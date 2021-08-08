import React, { useEffect } from "react";
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";
import * as Animatable from "react-native-animatable";

import { getAllPokemon } from "./pokemonSlice";
import { findTypeColor } from "../../shared/typeFinder";

const PokemonList = () => {
  const dispatch = useDispatch();
  const { pokemon } = useSelector((state) => state.pokemon);
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getAllPokemon());
  }, []);

  return (
    <FlatList
      style={tw`bg-white h-full`}
      data={pokemon}
      keyExtractor={(item) => item.name}
      renderItem={({ item, index }) => (
        <Animatable.View animation="fadeInDown" delay={index * 100}>
          <TouchableOpacity
            onPress={() => navigation.navigate("PokedetailsScreen", { item })}
            style={tw`m-2`}
          >
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Image
                style={{ width: 50, height: 50, resizeMode: "contain" }}
                source={{ uri: item.sprites.front_default }}
              />

              <Text
                style={tw`p-2 rounded-full text-lg text-white font-semibold bg-${findTypeColor(
                  item.types[0].type.name
                )}`}
              >
                {item.name.toUpperCase()}{" "}
              </Text>
            </View>
          </TouchableOpacity>
        </Animatable.View>
      )}
    />
  );
};

export default PokemonList;
