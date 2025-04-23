import React from "react";
import { View } from "react-native";

const Spacer = () => {
  if (this.props.horizontal)
    return <View style={{ marginLeft: this.props.space }} />;
  return <View style={{ marginTop: this.props.space }} />;
};

export default Spacer;
