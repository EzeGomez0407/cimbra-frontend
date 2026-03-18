import { Stack } from "expo-router";
import Register from "../components/Register";
import ScreenLayout from "../components/layout/ScreenLayout";
import KeyboardLayout from "../components/layout/KeyboardLayout";
import { Text } from "react-native";

export default function Index() {
  return (
    <ScreenLayout>
      <Stack.Screen
        options={{
          headerLeft: () => (
            <Text className="text-[24px] font-semibold color-[#225599]">
              Bienvenido a Cimbra
            </Text>
          ),
        }}
      />
      <KeyboardLayout>
        <Register />
      </KeyboardLayout>
    </ScreenLayout>
  );
}
