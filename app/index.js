import { Stack } from "expo-router";
import Register from "../components/Register";
import ScreenLayout from "../components/ScreenLayout";
import { Text } from "react-native";

export default function Index() {
  return (
    <ScreenLayout>
      <Stack.Screen
        options={{
          // headerBackVisible: false
          headerLeft: () => (
            <Text className="text-[24px] font-semibold color-[#225599] my-4 mt-12">
              Bienvenido a Cimbra
            </Text>
          ),
        }}
      />
      <Register />
    </ScreenLayout>
  );
}
