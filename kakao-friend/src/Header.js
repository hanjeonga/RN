import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const IconButton = (props) => {
  return (
    <View style={{ paddingHorizontal: 6 }}>
      <Ionicons name={props.name} size={24} color={"black"} />
    </View>
  );
};

const Header = () => {
  const iconList = [
    "search-outline",
    "person-add-outline",
    "musical-notes-outline",
    "settings-outline",
  ];

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        marginBottom: 10,
      }}
    >
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>친구</Text>

      <View style={{ flexDirection: "row" }}>
        {iconList.map((icon) => (
          <IconButton key={icon} name={icon} />
        ))}
      </View>
    </View>
  );
};

export default Header;
