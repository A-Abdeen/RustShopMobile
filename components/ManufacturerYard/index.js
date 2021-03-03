import React from "react";
import { useSelector } from "react-redux";
import { List } from "native-base";
import Loading from "../Loading";
import Manufacturer from "./Manufacturer";

const ManufacturerYard = ({ navigation }) => {
  const manufacturers = useSelector(
    (state) => state.manufacturers.manufacturers
  );
  const loading = useSelector((state) => state.manufacturers.loading);

  if (loading) return <Loading />;
  const manufacturerYard = manufacturers.map((manufacturer) => (
    <Manufacturer
      key={manufacturer.id}
      manufacturer={manufacturer}
      navigation={navigation}
    />
  ));
  return <List>{manufacturerYard}</List>;
};

export default ManufacturerYard;
