import React from "react";
import { List } from "native-base";
import Car from "./Car";

const CarYard = ({ cars, navigation }) => {
  const carYard = cars.map((car) => (
    <Car key={car.id} car={car} navigation={navigation} />
  ));

  return <List>{carYard}</List>;
};

export default CarYard;
