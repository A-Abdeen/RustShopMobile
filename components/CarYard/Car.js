import React from "react";
import { ListItem } from "native-base";
import { ManufacturerItemStyled } from "../ManufacturerYard/styles";

const Car = ({ car, navigation }) => {
  return (
    <ListItem onPress={() => navigation.navigate("Car Detail", { car: car })}>
      <ManufacturerItemStyled> {car.name} </ManufacturerItemStyled>
    </ListItem>
  );
};

export default Car;
