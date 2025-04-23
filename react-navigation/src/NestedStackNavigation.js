import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenC from "./ScreenC";

const Stack = createNativeStackNavigator();

const NestedStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScreenC" component={ScreenC} />
    </Stack.Navigator>
  );
};

export default NestedStackNavigation;
