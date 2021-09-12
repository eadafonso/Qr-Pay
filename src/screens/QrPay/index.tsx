import React from "react";

import AppLoading from "expo-app-loading";

import {
  useFonts,
  Inter_900Black,
  Inter_600SemiBold,
  Inter_500Medium,
  Inter_400Regular,
} from "@expo-google-fonts/inter";

import { TouchableOpacity } from "react-native";

import { Text } from "../../components/Text";
import { Feather } from "@expo/vector-icons";

import { Container, Header, QrImage } from "./styles";

const QrPay: React.FC = ({ navigation }: any) => {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_600SemiBold,
    Inter_500Medium,
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <Header>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("Home")}
          >
            <Feather name="chevron-left" color="#666" size={28} />
          </TouchableOpacity>
        </Header>

        <Container>
          <Text style={{ fontFamily: "Inter_900Black" }} extra>
            Payment by QR code
          </Text>

          <Text
            medium
            margin="15px 0 20px 0"
            color="#868686"
            style={{ fontFamily: "Inter_500Medium", fontWeight: "100" }}
          >
            Tap the image to start scanning
          </Text>

          <QrImage source={require("../../../assets/logo.png")} />
        </Container>
      </>
    );
  }
};

export default QrPay;
