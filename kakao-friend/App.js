import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "./src/Header";
import Profile from "./src/Profile";
import { friendProfiles, myProfile } from "./src/data";
import Division from "./src/Division";
import FriendSection from "./src/FriendSection";
import { useState } from "react";
import TabBar from "./src/TabBar";

export default function App() {
  const [isOpened, setIsOpened] = useState(true);
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);

  const onPressArrow = () => {
    setIsOpened((prev) => !prev);
  };

  const onPressTab = (idx) => {
    setSelectedTabIdx(idx);
  };

  const renderItem = ({ item }) => (
    <Profile uri={item.uri} name={item.name} introduction={item.introduction} />
  );

  const ListHeaderComponent = () => (
    <View style={{ marginBottom: 5, backgroundColor: "white" }}>
      <Header />
      <Profile
        type={"my"}
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
      />
      <Division />
      <FriendSection
        friendLen={friendProfiles.length}
        isOpened={isOpened}
        onPress={onPressArrow}
      />
    </View>
  );

  const ListFooterComponent = () => <View style={{ marginBottom: 10 }} />;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={isOpened ? friendProfiles : []}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          keyExtractor={(_, index) => index}
          stickyHeaderIndices={[0]}
          renderItem={renderItem}
          ListHeaderComponent={ListHeaderComponent}
          ListFooterComponent={ListFooterComponent}
          showsVerticalScrollIndicator={false}
        />
        <TabBar selectedTabIdx={selectedTabIdx} onPressTab={onPressTab} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
