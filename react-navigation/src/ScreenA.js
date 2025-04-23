import React from "react";
import { Button, Text, View } from "react-native";

const ScreenA = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>이것은 'ScreenA' 라고 합니다.</Text>

      <Button
        title="B스크린으로 이동하기"
        onPress={() =>
          this.props.navigation.navigate("ScreenB", { value: "fromA" })
        }
      />

      <Button
        title="C스크린으로 이동하기"
        onPress={() =>
          this.props.navigation.navigate("Nested", { screen: "ScreenC" })
        }
      />
    </View>
  );
};

export default ScreenA;
