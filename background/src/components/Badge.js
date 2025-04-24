import React from "react";
import { View } from "react-native";
import { Typography } from "./Typography";

const Badge = () => {
  return (
    <View>
      <View>
        {this.props.children}
        <View
          style={{
            width: 16,
            height: 16,
            borderRadius: 8,
            backgroundColor: "red",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: -5,
            right: -5,
          }}
        >
          <Typography fontSize={this.props.fontSize} color={"white"}>
            N
          </Typography>
        </View>
      </View>
    </View>
  );
};

export default Badge;
