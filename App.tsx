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
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NumberPay"
          component={NumberPayScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QrPay"
          component={QrScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
