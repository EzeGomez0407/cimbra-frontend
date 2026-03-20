import { Text, View } from "react-native";
import ScreenLayout from "../../components/layout/ScreenLayout";
import { router, Stack } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import BasicInputs from "../../components/to-forms/BasicInputs";
import BasicMsgError from "../../components/to-forms/BasicMsgError";
import { Button, Surface } from "react-native-paper";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import KeyboardLayout from "../../components/layout/KeyboardLayout";

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
            <View className="py-2 pt-5 flex-column gap-1">
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
      <KeyboardLayout>
        <View className="py-10">
          <BasicInputs
            label={" Nombre de la empresa"}
            placeholder={"Ingresá el nombre de tu empresa"}
            leftIcon={
              <MaterialCommunityIcons
                name="office-building-plus-outline"
                size={20}
                color="#FFD700"
              />
            }
            style={{ fontSize: 18 }}
          />
          <BasicMsgError />
          <BasicInputs
            label={" Dirección"}
            placeholder={"Ingresá el nombre de tu empresa"}
            leftIcon={
              <SimpleLineIcons name="location-pin" size={20} color="#FFD700" />
            }
            style={{ fontSize: 18 }}
          />
        </View>
        <View className="flex-row bg-[#4477ff]/10 p-5 rounded-2xl border border-[#E7D77B]/40 mb-10">
          <Text className="text-lg text-[#405C4D]">
            <Text className="text-[#003366]">💡Importante </Text>
            Estos datos serán visibles para tus empleados y servirán para
            identificar tu empresa dentro de la aplicación.
          </Text>
        </View>

        <Surface style={{ borderRadius: 15, shadowColor: "#c7b75b" }}>
          <Button
            onPress={() => router.navigate("/admin/works-view")}
            mode="contained"
            icon={() => (
              <MaterialIcons
                name="arrow-forward-ios"
                size={16}
                color="#225599"
              />
            )}
            buttonColor="#FFD700"
            textColor="#225599"
            labelStyle={{ fontSize: 16 }}
            contentStyle={{ height: 50, flexDirection: "row-reverse" }}
            style={{ borderRadius: 15 }}
          >
            Registrar Empresa
          </Button>
        </Surface>
      </KeyboardLayout>
    </ScreenLayout>
  );
}
