import React from "react";
import { Button, Text, View } from "react-native";

const ScreenB = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>
        이것은 'ScreenB' 라고 합니다. 받은 값 : {this.props.route.params.value}
      </Text>
      <Button title="뒤로가기" onPress={() => console.log("뒤로가기")} />
    </View>
  );
};

export default ScreenB;
