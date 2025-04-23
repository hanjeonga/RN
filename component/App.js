import { StyleSheet, View } from "react-native";
import LocalImage from "./src/components/LocalImage";
import RemoteImage from "./src/components/RemoteImage";
import Icons from "./src/components/Icons";
import Badge from "./src/components/Badge";
import { Typography } from "./src/components/Typography";
import Button from "./src/components/Button";

export default function App() {
  return (
    <View style={styles.container}>
      <Typography color="red" fontSize={20}>
        이것은 텍스트 입니다.
      </Typography>

      <LocalImage
        localAsset={require("./assets/favicon.png")}
        width={50}
        height={50}
      />

      <RemoteImage
        url={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9aeHFWXHfDhJ_xzPneJlEsKVdu-tZ5vGoow&s"
        }
        width={100}
        height={200}
      />

      <Icons name="home" size={40} color="red" />

      <View>
        <Badge fontSize={10}>
          <Typography>BADGE</Typography>
        </Badge>
      </View>
      <View>
        <Badge>
          <Icons name="home" size={50} color={black} />
        </Badge>
      </View>

      <View style={{ flexDirection: "row", marginTop: 32 }}>
        <Button onPress={() => console.log("PRESSED BUTTON")}>
          <Typography>TEXT BUTTON</Typography>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
