import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Icons = () => {
  return (
    <Ionicons
      name={this.props.name}
      size={this.props.size}
      color={this.props.color}
    />
  );
};

export default Icons;
