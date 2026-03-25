import { KeyboardAvoidingView, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function KeyboardLayout({ children, style }) {
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={"height"}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          {
            flexGrow: 1,
            paddingBottom: insets.bottom,
          },
          style,
        ]}
        keyboardShouldPersistTaps="handled"
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
