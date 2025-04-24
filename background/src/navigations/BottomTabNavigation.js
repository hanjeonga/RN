import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import ImageListScreen from "../screen/ImageListScreen";
import FavoriteImageScreen from "../screen/FavoriteImageScreen";

const Tabs = createBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="ImageList" component={ImageListScreen} />
      <Tabs.Screen name="FavoriteImageList" component={FavoriteImageScreen} />
    </Tabs.Navigator>
  );
};

export default BottomTabNavigation;
