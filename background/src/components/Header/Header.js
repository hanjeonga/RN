import React from "react";
import { View, Dimensions } from "react-native";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import Spacer from "../Spacer";
import HeaderTitle from "./HeaderTitle";
import HeaderButton from "./HeaderButton";
import HeaderGroup from "./HeaderGroup";
const { width } = Dimensions.get("window");

const Header = () => {
  return (
    <SafeAreaInsetsContext>
      {(insets) => (
        <View style={{ paddingTop: insets.top }}>
          <View
            style={{
              width: width,
              flexDirection: "row",
              height: 56,
              borderBottomColor: "gray",
              borderBottomWidth: 1,
              alignItems: "center",
            }}
          >
            <Spacer horizontal={true} space={12} />
            <View
              style={{
                height: 32,
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {this.props.children}
            </View>
            <Spacer horizontal={true} space={12} />
          </View>
        </View>
      )}
    </SafeAreaInsetsContext>
  );
};

export default Header;

Header.Title = HeaderTitle;
Header.Icon = HeaderButton;
Header.Group = HeaderGroup;
