import React from "react";
import { useSelector } from "react-redux";
import { View, Image } from "react-native";
import { Card, CardItem, Text, Left, Body } from "native-base";
import CarYard from "../CarYard";
import Loading from "../Loading";

const ManufacturerDetail = ({ navigation, route }) => {
  const { manufacturer } = route.params;
  //To access loading state in manufacturer reducer
  const manufacturerLoading = useSelector(
    (state) => state.manufacturers.loading
  );
  //To access cars from backend through reducer
  const carReducer = useSelector((state) => state.cars);
  //To check if loading required
  if (manufacturerLoading || carReducer.loading) return <Loading />;
  //////////
  console.log(manufacturer);
  //////////
  return (
    <View>
      <Card>
        <CardItem>
          <Left>
            <Body>
              <Text>{manufacturer.name}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            style={{ height: 100, width: 100, flex: 1 }}
            source={{ uri: manufacturer.image }}
          />
        </CardItem>
      </Card>
      <CarYard cars={manufacturer.car} navigation={navigation} />
    </View>
  );
};

export default ManufacturerDetail;
