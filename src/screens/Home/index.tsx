import React from "react";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  Inter_900Black,
  Inter_600SemiBold,
  Inter_500Medium,
  Inter_400Regular,
} from "@expo-google-fonts/inter";

import {
  Container,
  Logo,
  LogoText,
  InfoUserContainer,
  Line,
  MethodContainer,
  MethodPayment,
} from "./styles";

import { Text } from "../../components/Text";
import { Ionicons } from "@expo/vector-icons";

const Home: React.FC = ({ navigation }: unknown | any) => {
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
      <Container>
        <Logo source={require("../../../assets/logo.png")} />
        <LogoText style={{ fontFamily: "Inter_400Regular" }}>QR-PAY</LogoText>

        <InfoUserContainer>
          <Text style={{ fontFamily: "Inter_900Black" }} title>
            Hello, Edvaldo
          </Text>

          <Text
            color={"#00c271"}
            extra
            style={{
              fontFamily: "Inter_900Black",
            }}
          >
            your account is
          </Text>
          <Text
            color={"#00c271"}
            extra
            style={{
              fontFamily: "Inter_900Black",
            }}
          >
            10.000.00 kz
          </Text>
        </InfoUserContainer>

        <Line />

        <Text
          style={{
            fontFamily: "Inter_400Regular",
          }}
          color={"#999"}
          large
        >
          how do you want to pay?
        </Text>

        <MethodContainer>
          <MethodPayment
            activeOpacity={0.7}
            onPress={() => navigation.navigate("NumberPay")}
          >
            <Ionicons name="cash-outline" size={22} />
            <Text
              margin="0 0 0 10px"
              medium
              style={{
                fontFamily: "Inter_400Regular",
              }}
            >
              Payment by Reference
            </Text>
          </MethodPayment>

          <MethodPayment
            activeOpacity={0.7}
            onPress={() => navigation.navigate("QrPay")}
          >
            <Ionicons name="qr-code-outline" size={22} />
            <Text
              margin="0 0 0 10px"
              medium
              style={{
                fontFamily: "Inter_400Regular",
              }}
            >
              Payment by QR code
            </Text>
          </MethodPayment>
        </MethodContainer>
      </Container>
    );
  }
};

export default Home;
