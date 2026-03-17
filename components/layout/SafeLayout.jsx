import React from "react";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

export default function SafeLayout({
  children,
  style,
  withHeader = false,
}) {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          paddingTop: withHeader ? 0 : insets.top,
        },
        style,
      ]}
    >
      {children}
    </SafeAreaView>
  );
}