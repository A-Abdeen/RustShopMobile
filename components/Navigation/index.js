import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import ManufacturerYard from "../ManufacturerYard";
import ManufacturerDetail from "../ManufacturerDetail";
import CarDetail from "../CarDetail";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: "sienna",
        headerStyle: {
          backgroundColor: "lightsalmon",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="Manufacturer Yard"
        component={ManufacturerYard}
        options={{ title: "Who's the maker?" }}
      />
      <Screen
        name="Manufacturer Detail"
        component={ManufacturerDetail}
        options={({ route }) => {
          const { manufacturer } = route.params;
          return {
            title: manufacturer.name,
          };
        }}
      />
      <Screen
        name="Car Detail"
        component={CarDetail}
        options={({ route }) => {
          const { car } = route.params;
          return {
            title: car.name,
          };
        }}
      />
    </Navigator>
  );
};

export default RootNavigator;
