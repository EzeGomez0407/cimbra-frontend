import { Stack } from "expo-router";
import ScreenLayout from "../../../components/layout/ScreenLayout";
import { Text, View } from "react-native";
import { Icons } from "../../../assets/icons";
import { Button, Surface } from "react-native-paper";
import BasicInputs from "../../../components/to-forms/BasicInputs";

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
      <View className="w-full items-center gap-4">
        <Surface style={{ borderRadius: 15 }} className="mt-8 w-full">
          <Button
            onPress={() => {}}
            mode="contained"
            icon={() => <Icons.plus size={20} color="#225599" />}
            buttonColor="#FFD700"
            textColor="#225599"
            labelStyle={{ fontSize: 18 }}
            contentStyle={{ height: 50 }}
            style={{ borderRadius: 15 }}
          >
            Agregar herramienta
          </Button>
        </Surface>

        <BasicInputs
          label={"Buscar herramientas..."}
          placeholder={"Matesito"}
          leftIcon={<Icons.search size="18" color="#225599" />}
          style={{ width: "100%" }}
        />
      </View>
    </ScreenLayout>
  );
}
