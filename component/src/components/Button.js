import React from "react";
import { Pressable } from "react-native";

const Button = () => {
  return (
    <Pressable
      onPress={this.props.onPress}
      hitSlop={this.props.hitSlop ?? { left: 0, right: 0, top: 0, bottom: 0 }}
    >
      {this.props.children}
    </Pressable>
  );
};

export default Button;
