import React from "react";
import { ListItem } from "native-base";
import { ManufacturerItemStyled } from "./styles";

const Manufacturer = ({ manufacturer, navigation }) => {
  return (
    <ListItem
      onPress={() =>
        navigation.navigate("Manufacturer Detail", {
          manufacturer: manufacturer,
        })
      }
    >
      <ManufacturerItemStyled> {manufacturer.name} </ManufacturerItemStyled>
    </ListItem>
  );
};

export default Manufacturer;
