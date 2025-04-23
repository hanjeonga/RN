import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import ScreenA from "./src/ScreenA";
// import ScreenB from "./src/ScreenB";
// import NestedStackNavigation from "./src/NestedStackNavigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabA from "./src/TabA";
import TabB from "./src/TabB";
import { Ionicons } from "@expo/vector-icons";

// const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="ScreenA" component={ScreenA}></Stack.Screen>
        <Stack.Screen name="ScreenB" component={ScreenB}></Stack.Screen>
        <Stack.Screen
          name="NestedNavigator"
          component={NestedStackNavigation}
        ></Stack.Screen>
      </Stack.Navigator> */}
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="TabA"
          component={TabA}
          options={{ tabBarIcon: () => <Ionicons name="home" size={20} /> }}
        />
        <BottomTab.Screen
          name="TabB"
          component={TabB}
          options={{ tabBarIcon: () => <Ionicons name="settings" size={20} /> }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
