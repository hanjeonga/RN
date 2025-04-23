import React from "react";
import { Image as RNImage } from "react-native";

const RemoteImage = () => {
  return (
    <RNImage
      source={{ uri: this.props.url }}
      style={[
        this.props.style,
        { width: this.props.width, height: this.props.height },
      ]}
    />
  );
};

export default RemoteImage;
