import React from "react";
import { useSelector } from "react-redux";
import { View, Image } from "react-native";
import { Card, CardItem, Text, Left, Body } from "native-base";
import Loading from "../Loading";

const CarDetail = ({ navigation, route }) => {
  const { car } = route.params;

  //To access cars from backend through reducer
  const carLoading = useSelector((state) => state.cars.loading);
  //To check if loading required
  if (carLoading) return <Loading />;
  //////////
  console.log(car);
  //////////
  return (
    <View>
      <Card>
        <CardItem>
          <Left>
            <Body>
              <Text>{car.name}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            style={{ height: 100, width: 100, flex: 1 }}
            source={{ uri: car.image }}
          />
        </CardItem>
      </Card>
    </View>
  );
};

export default CarDetail;
