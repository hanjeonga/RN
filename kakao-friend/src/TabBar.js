import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const TabButton = ({
  isSelected,
  onPress,
  activeIconName,
  inactiveIconName,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
      }}
    >
      <Ionicons
        name={isSelected ? activeIconName : inactiveIconName}
        size={24}
        color={"black"}
      />
    </TouchableOpacity>
  );
};

const TabBar = ({ selectedTabIdx, onPressTab }) => {
  const iconList = [
    {
      activeIconName: "person",
      inactiveIconName: "person-outline",
    },
    {
      activeIconName: "chatbubble",
      inactiveIconName: "chatbubble-outline",
    },
    {
      activeIconName: "pricetag",
      inactiveIconName: "pricetag-outline",
    },
    {
      activeIconName: "add-circle",
      inactiveIconName: "add-circle-outline",
    },
  ];

  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        paddingBottom: 10,
        borderTopWidth: 0.5,
        borderColor: "lightgray",
      }}
    >
      {iconList.map((icon, idx) => (
        <TabButton
          key={`${icon.activeIconName}_${idx}`}
          isSelected={selectedTabIdx === idx}
          onPress={() => onPressTab(idx)}
          activeIconName={icon.activeIconName}
          inactiveIconName={icon.inactiveIconName}
        />
      ))}
    </View>
  );
};

export default TabBar;
