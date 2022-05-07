import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import { images } from "../shared/images";
import { findTypeColor } from "../shared/typeFinder";

const PokedetailsScreen = ({ route }) => {
  const navigation = useNavigation();

  const { item: pokemon } = route.params;

  let POKEURL;

  for (let i = 0; i < images.length; i++) {
    if (images[i].id == pokemon.id) {
      POKEURL = images[i].uri;
    }
  }

  return (
    <View style={tw`bg-white h-full`}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={tw`font-bold p-2`}>{pokemon.name.toUpperCase()}</Text>
        <View style={{ flexDirection: "row" }}>
          {pokemon.types.map((type) => {
            return (
              <Text
                key={type.type.name}
                style={tw`font-light p-2 mb-3 mx-2 rounded-full bg-${findTypeColor(
                  type.type.name
                )}`}
              >
                {type.type.name}
              </Text>
            );
          })}
        </View>

        <Image
          style={{ height: 400, width: 400, resizeMode: "contain" }}
          source={POKEURL}
        />
        <Button
          style={tw`mt-2`}
          title="Go back"
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};

export default PokedetailsScreen;

const styles = StyleSheet.create({});
