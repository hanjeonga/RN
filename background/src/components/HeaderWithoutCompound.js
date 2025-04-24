import React from "react";
import { View, Dimensions } from "react-native";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import Spacer from "./Spacer";
import Button from "./Button";
import Icons from "./Icons";
import { Typography } from "./Typography";

const { width } = Dimensions.get("window");

const HeaderWithoutCompound = () => {
  return (
    <SafeAreaInsetsContext>
      {(insets) => (
        <View style={{ paddingTop: insets.top }}>
          <View
            style={{
              width: width,
              height: 56,
              flexDirection: "row",
              borderBottomColor: "gray",
              borderBottomWidth: 1,
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
              {this.props.leftIcon && (
                <Button onPress={this.props.leftIcon.onPress}>
                  <Icons iconName={this.props.leftIcon.iconName} size={28} />
                </Button>
              )}
              <Typography fontSize={18}>{this.props.title}</Typography>
              {this.props.rightIcon && (
                <Button onPress={this.props.rightIcon.onPress}>
                  <Icons iconName={this.props.rightIcon.iconName} size={28} />
                </Button>
              )}
            </View>
            <Spacer horizontal={true} space={12} />
          </View>
        </View>
      )}
    </SafeAreaInsetsContext>
  );
};

export default HeaderWithoutCompound;
