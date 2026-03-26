import { Stack } from "expo-router";
import ScreenLayout from "../../../components/layout/ScreenLayout";
import { Text, View } from "react-native";
import { Icons } from "../../../assets/icons";

export default function ToolsView() {
  return (
    <ScreenLayout>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#225599",
          },
          headerLeft: () => (
            <View className="my-5 gap-2">
              <View className="flex-row items-center gap-3">
                <View className="self-start p-[12px] rounded-[17px] bg-yellow-primary">
                  <Icons.frenchKey size={25} color="#225599" />
                </View>
                <Text className="text-white text-3xl font-medium">
                  Herramientas
                </Text>
              </View>
              <Text className="text-light-yellow text-lg ">8 Herramientas</Text>
            </View>
          ),
        }}
      />
    </ScreenLayout>
  );
}
