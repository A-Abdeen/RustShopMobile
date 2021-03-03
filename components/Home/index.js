import React from "react";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/Entypo";
import {
  HomeBackground,
  OverLayContainer,
  TopStyling,
  Title,
  BottomStyling,
  MiddleStyling,
  ButtonStyled,
} from "./styles";

const Home = ({ navigation }) => {
  return (
    <HomeBackground
      source={{
        uri:
          "https://www.mordeo.org/files/uploads/2016/10/Abandoned-Old-Buick-Mobile-Wallpaper.jpg",
      }}
    >
      <OverLayContainer>
        <TopStyling>
          <Title>Rust Shop</Title>
        </TopStyling>
        <MiddleStyling></MiddleStyling>
        <BottomStyling>
          <Button
            title="Enter"
            onPress={() => navigation.navigate("Manufacturer Yard")}
            icon={<Icon name="cog" size={40} color="chocolate" />}
          />
          {/* <ButtonStyled
            onPress={() => navigation.navigate("Manufacturer Yard")}
          >
            Welcome
          </ButtonStyled> */}
        </BottomStyling>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default Home;
