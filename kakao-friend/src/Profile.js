import { Image, Text, View } from "react-native";

const Profile = ({ uri, name, introduction, type }) => {
  const isMe = type === "my";
  const size = isMe ? 50 : 40;

  return (
    <View
      style={{
        flexDirection: "row",
        marginBottom: isMe ? 15 : 13,
      }}
    >
      <Image
        source={{ uri: uri }}
        style={{ width: size, height: size, borderRadius: size * 0.4 }}
      />
      <View style={{ justifyContent: "center", marginLeft: 10 }}>
        <Text
          style={{
            fontSize: size ? 16 : 15,
            fontWeight: isMe ? "bold" : "",
            marginBottom: size ? 6 : 2,
          }}
        >
          {name}
        </Text>
        {!!introduction && (
          <Text style={{ fontSize: size ? 12 : 11, color: "gray" }}>
            {introduction}
          </Text>
        )}
      </View>
    </View>
  );
};

export default Profile;
