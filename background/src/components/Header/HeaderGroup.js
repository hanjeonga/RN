import React from "react";
import { View } from "react-native";

const HeaderGroup = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {this.props.children}
    </View>
  );
};

export default HeaderGroup;
