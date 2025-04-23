import { StyleSheet, View } from "react-native";
import LocalImage from "./src/components/LocalImage";
import RemoteImage from "./src/components/RemoteImage";
import Icons from "./src/components/Icons";
import Badge from "./src/components/Badge";
import { Typography } from "./src/components/Typography";
import Button from "./src/components/Button";
import Divider from "./src/components/Divider";
import Spacer from "./src/components/Spacer";

export default function App() {
  return (
    <View style={styles.container}>
      <Typography color="red" fontSize={20}>
        이것은 텍스트 입니다.
      </Typography>
      <Divider />
      <LocalImage
        localAsset={require("./assets/favicon.png")}
        width={50}
        height={50}
      />
      <Divider />
      <RemoteImage
        url={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9aeHFWXHfDhJ_xzPneJlEsKVdu-tZ5vGoow&s"
        }
        width={100}
        height={200}
      />
      <Divider />
      <Icons name="home" size={40} color="red" />
      <Spacer space={20} />
      <View>
        <Badge fontSize={10}>
          <Typography>BADGE</Typography>
        </Badge>
      </View>
      <View>
        <Badge>
          <Icons name="home" size={50} color={"black"} />
        </Badge>
      </View>
      <Spacer space={20} />
      <View style={{ flexDirection: "row", marginTop: 32 }}>
        <Button onPress={() => console.log("PRESSED BUTTON")}>
          <Typography>TEXT BUTTON</Typography>
        </Button>

        <Button onPress={() => console.log("PRESSED ICON BUTTON")}>
          <Icons name="home" size={50} color={"green"} />
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
