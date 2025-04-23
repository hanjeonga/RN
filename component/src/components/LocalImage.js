import React from "react";
import { Image as RNImage } from "react-native";

const LocalImage = () => {
  return (
    <RNImage
      source={this.props.localAsset}
      style={[
        this.props.style,
        { width: this.props.width, height: this.props.height },
      ]}
    />
  );
};

export default LocalImage;
