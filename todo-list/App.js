import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getCalendarColumns, getDayColor, getDayText } from "./src/utils/util";
import dayjs from "dayjs";
import { Ionicons } from "@expo/vector-icons";

const columnSize = 35;

const Columns = ({ text, color, opacity }) => (
  <View
    style={{
      width: columnSize,
      height: columnSize,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Text style={{ color, opacity }}>{text}</Text>
  </View>
);

const ArrowButton = ({ name, onPress }) => (
  <TouchableOpacity hitSlop={15}>
    <Ionicons name={name} size={20} color={"#404040"} onPress={onPress} />
  </TouchableOpacity>
);

export default function App() {
  const now = dayjs();
  const columns = getCalendarColumns(now);

  const ListHeaderComponent = () => {
    const currentDateText = dayjs(now).format("YYYY-MM-DD");

    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 15,
          }}
        >
          <ArrowButton name={"chevron-back"} onPress={() => {}} />
          <TouchableOpacity hitSlop={15}>
            <Text style={{ color: "#404040", fontSize: 20 }}>
              {currentDateText}
            </Text>
          </TouchableOpacity>
          <ArrowButton name={"chevron-forward"} onPress={() => {}} />
        </View>

        <View style={{ flexDirection: "row" }}>
          {[0, 1, 2, 3, 4, 5, 6].map((day) => {
            const dayText = getDayText(day);
            const color = getDayColor(day);
            return (
              <Columns
                key={`day_${dayText}`}
                text={dayText}
                color={color}
                opacity={1}
              />
            );
          })}
        </View>
      </View>
    );
  };

  const renderItem = ({ item: date }) => {
    const dateText = dayjs(date).get("date");
    const day = dayjs(date).get("day");
    const color = day === 0 ? "#e67639" : day === 6 ? "#5872d1" : "#2b2b2b";
    const isCurrentMonth = dayjs(date).isSame(now, "month");

    return (
      <Columns
        text={dateText}
        color={color}
        opacity={isCurrentMonth ? 1 : 0.4}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={columns}
        keyExtractor={(_, idx) => `column_${idx}`}
        numColumns={7}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
      ></FlatList>
    </SafeAreaView>
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
