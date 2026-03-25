import { View } from "react-native";
import "../global.css";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      initialRouteName="(home)/index"
      screenOptions={{
        headerStyle: { backgroundColor: "#FFD700" },
        headerTitle: "",
        headerLeft: () => {},
      }}
    ></Stack>
  );
}
