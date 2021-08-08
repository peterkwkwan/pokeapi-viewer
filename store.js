import { configureStore } from "@reduxjs/toolkit";
import pokeReducer from "./components/pokemon/pokemonSlice";

export const store = configureStore({
  reducer: {
    pokemon: pokeReducer,
  },
});
