import React from "react";
import { StyleSheet, View, Image, SafeAreaView, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./store";
import tw from "tailwind-react-native-classnames";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// components
import PokemonList from "./components/pokemon/PokemonList";
import PokedetailsScreen from "./screens/PokedetailsScreen";
//assets
import PokeAPIPNG from "./assets/pokeapi.png";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={tw`bg-white h-full`}>
          <View style={tw`pt-2 pl-2`}>
            <Image
              style={{
                width: 120,
                height: 120,
                resizeMode: "contain",
              }}
              source={PokeAPIPNG}
              onPress={() => navigation.goBack()}
            />
          </View>
          <Stack.Navigator>
            <Stack.Screen
              name="PokemonList"
              component={PokemonList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PokedetailsScreen"
              component={PokedetailsScreen}
              options={{ headerShown: false }}
            />

            {/* <PokemonList /> */}
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
