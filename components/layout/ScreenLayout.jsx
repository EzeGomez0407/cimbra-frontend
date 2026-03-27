import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ScreenLayout({ children }) {
  const insets = useSafeAreaInsets();
  return (
    <View
      className="px-3 flex-1 bg-white"
      style={{ marginBottom: insets.bottom }}
    >
      {children}
    </View>
  );
}
