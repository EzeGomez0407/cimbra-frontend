import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ScreenLayout({ children }) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{ flex: 1, marginBottom: insets.bottom, paddingHorizontal: 20 }}
    >
      {children}
    </View>
  );
}
