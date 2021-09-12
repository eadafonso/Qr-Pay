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

import { ButtonSend, Container, Header, Input } from "./styles";

const NumberPay: React.FC = ({ navigation }: any) => {
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
            Payment by {"\n"}reference ID
          </Text>

          <Text
            medium
            margin="15px 0 20px 0"
            color="#868686"
            style={{ fontFamily: "Inter_500Medium", fontWeight: "100" }}
          >
            Please enter the reference code
          </Text>

          <Input placeholder="Reference ID" keyboardType="number-pad" />

          <ButtonSend activeOpacity={0.7}>
            <Text
              medium
              color="#fafafa"
              style={{ fontFamily: "Inter_500Medium" }}
            >
              Pay
            </Text>
          </ButtonSend>
        </Container>
      </>
    );
  }
};

export default NumberPay;
