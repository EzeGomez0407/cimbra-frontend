import { StyleSheet, TouchableOpacity } from "react-native";
import { Surface } from "react-native-paper";

export default function HeaderIcon({ icon, bgIcon, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{ borderRadius: 20, overflow: "hidden" }}
      onPress={onPress}
    >
      <Surface
        style={[styles.iconContainer, { backgroundColor: bgIcon }]}
        elevation={4}
      >
        {icon}
      </Surface>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,

    alignItems: "center",
    justifyContent: "center",
  },
});
