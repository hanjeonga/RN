import { ScrollView } from "react-native";
import Profile from "./Profile";

const FriendList = (props) => {
  if (!props.isOpened) return null;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {props.data.map((item, idx) => (
        <Profile
          key={`friend_${item.name}_${idx}`}
          uri={item.uri}
          name={item.name}
          introduction={item.introduction}
        />
      ))}
    </ScrollView>
  );
};

export default FriendList;
