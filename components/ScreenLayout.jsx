import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function ScreenLayout({ children }) {
  const insets = useSafeAreaInsets();
  return (
    <View className="px-3 " style={{ flex: 1, paddingBottom: insets.bottom }}>
      {children}
    </View>
  );
}
