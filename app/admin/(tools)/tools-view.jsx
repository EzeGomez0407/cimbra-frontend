import { Stack } from "expo-router";
import ScreenLayout from "../../../components/layout/ScreenLayout";
import { ScrollView, Text, View } from "react-native";
import { Icons } from "../../../assets/icons";
import { Button, SegmentedButtons, Surface } from "react-native-paper";
import BasicInputs from "../../../components/to-forms/BasicInputs";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

export default function ToolsView() {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [value, setValue] = useState("");

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

        <View className="flex-row gap-2">
          <Surface
            style={{
              borderRadius: 15,
              width: "48%",
              outlineColor: "#c7b75b",
              outlineWidth: 1,
              backgroundColor: "#fff",
            }}
          >
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
              style={{ color: "#225599" }}
            >
              <Picker.Item label="Todas las ubicaciones" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </Surface>
          <Surface
            style={{
              borderRadius: 15,
              width: "48%",
              outlineColor: "#c7b75b",
              outlineWidth: 1,
              backgroundColor: "#fff",
            }}
          >
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
              style={{ color: "#225599" }}
            >
              <Picker.Item label="Todos los encargados" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </Surface>
        </View>
        <SegmentedButtons
          value={value}
          onValueChange={setValue}
          buttons={[
            {
              value: "walk",
              label: "Todas",
            },
            {
              value: "train",
              label: "Eléctricas",
            },
            { value: "drive", label: "Manuales" },
          ]}
          theme={{
            colors: {
              secondaryContainer: "#FFD700",
              primary: "#c7b75b",
              outline: "#c7b75b",
              onSurface: "#225599",
              onSecondaryContainer: "#225599",
            },
          }}
          style={{
            backgroundColor: "#fff",
            borderRadius: 18,
          }}
        />
      </View>
      <ScrollView></ScrollView>
    </ScreenLayout>
  );
}
