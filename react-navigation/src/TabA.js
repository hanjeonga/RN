import React from "react";
import { Button, Text, View } from "react-native";

const TabA = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>이것은 'TabA' 입니다.</Text>
      <Button
        title="B스크린으로 이동하기"
        onPress={() =>
          this.props.navigation.navigate("ScreenB", { value: "fromA" })
        }
      />
    </View>
  );
};

export default TabA;
