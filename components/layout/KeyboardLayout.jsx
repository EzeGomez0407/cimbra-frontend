import { KeyboardAvoidingView, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function KeyboardLayout({ children, style }) {
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView className="" behavior={"height"}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          {
            flexGrow: 1,
            justifyContent: "space-between",
            paddingBottom: insets.bottom,
          },
          style,
        ]}
        keyboardShouldPersistTaps="always"
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
