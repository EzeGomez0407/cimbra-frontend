import { StyleSheet, View, Text } from "react-native";

export default function Divider({ text }) {
  return (
    <View style={style.content}>
      <View style={style.lines} />
      <Text style={style.text}>{text}</Text>
      <View style={style.lines} />
    </View>
  );
}

const style = StyleSheet.create({
  content: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },

  lines: {
    flex: 1,
    height: 2,
    opacity: 0.4,
    backgroundColor: "#f3d73e",
  },
  text: {
    marginHorizontal: 10,
    fontSize: 12,
  },
});
