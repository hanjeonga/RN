import React from "react";
import { View } from "react-native";
import Badge from "./Badge";
import Icons from "./Icons";

const TabIcon = () => {
  if (this.props.visibleBadge)
    return (
      <View>
        <Badge fontSize={10}>
          <Icons name={this.props.iconName} size={20} color={"black"} />
        </Badge>
      </View>
    );
  return (
    <View>
      <Icons name={this.props.iconName} size={20} color={"black"} />
    </View>
  );
};

export default TabIcon;
