import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/Home";
import NumberPayScreen from "./src/screens/NumberPay";
import QrScreen from "./src/screens/QrPay";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NumberPay" component={NumberPayScreen} />
        <Stack.Screen name="QrPay" component={QrScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
