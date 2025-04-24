import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import ImageListScreen from "../screen/ImageListScreen";
import FavoriteImageScreen from "../screen/FavoriteImageScreen";
import TabIcon from "../components/TabIcon";

const Tabs = createBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={(route) => ({
        headerShown: true,
        tabBarIcon: ({ focused, color, size }) => {
          const getIconName = () => {
            if (route.name == "ImageList") return "home";
            if (route.name == "FavoriteImage") return "star";
          };
          const iconName = getIconName();
          return (
            <TabIcon
              iconName={iconName}
              iconColor={focused ? "tomato" : "gray"}
            />
          );
        },
      })}
    >
      <Tabs.Screen name="ImageList" component={ImageListScreen} />
      <Tabs.Screen name="FavoriteImageList" component={FavoriteImageScreen} />
    </Tabs.Navigator>
  );
};

export default BottomTabNavigation;
