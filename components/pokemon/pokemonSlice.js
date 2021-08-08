import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchPokemonData = async (pokemon) => {
  try {
    let url = pokemon.url;
    let res = await fetch(url);
    let parsedRes = await res.json();
    return parsedRes;
  } catch (err) {
    console.error(err.message);
  }
};

export const getAllPokemon = createAsyncThunk(
  "pokemon/getPokemon",
  async (dispatch, getState) => {
    try {
      let res = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=9"
      );
      let allPokemon = await res.json();
      let allPokemonData = [];
      for (let i = 0; i < allPokemon.results.length; i++) {
        let data = await fetchPokemonData(allPokemon.results[i]);
        allPokemonData.push(data);
      }
      return allPokemonData;
    } catch (err) {
      console.error(err.message);
    }
  }
);

const initialState = {
  pokemon: [],
  status: null,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  extraReducers: {
    [getAllPokemon.pending]: (state, action) => {
      state.status = "Loading";
    },
    [getAllPokemon.fulfilled]: (state, action) => {
      state.status = "Success";
      state.pokemon = action.payload;
    },
    [getAllPokemon.rejected]: (state, action) => {
      state.status = "Failed";
    },
  },
});

export default pokemonSlice.reducer;
