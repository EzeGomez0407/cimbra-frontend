import { Text, View } from "react-native";
import ScreenLayout from "../../components/layout/ScreenLayout";
import { Stack } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function CreateCompany() {
  return (
    <ScreenLayout>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#225599",
            color: "#fff",
          },
          headerLeft: () => (
            <View className="py-2 pt-5 flex-column">
              <View className="self-start p-5 bg-white/10 rounded-3xl mb-4">
                <MaterialCommunityIcons
                  name="office-building-plus-outline"
                  size={24}
                  color="#FFD700"
                />
              </View>
              <Text className="text-3xl font-bold text-white">
                Registrar empresa
              </Text>
              <Text className="text-xl text-[#c7b75b]">
                Completa los datos de tu empresa
              </Text>
            </View>
          ),
        }}
      />
    </ScreenLayout>
  );
}
