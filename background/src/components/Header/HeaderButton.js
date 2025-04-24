import React from "react";
import Button from "../Button";
import Icons from "../Icons";

const HeaderButton = () => {
  return (
    <Button onPress={this.props.onPress}>
      <Icons name={this.props.iconName} size={28} color="black" />
    </Button>
  );
};

export default HeaderButton;
