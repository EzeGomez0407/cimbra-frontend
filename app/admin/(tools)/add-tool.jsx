import ScreenLayout from "../../../components/layout/ScreenLayout";
import KeyboardLayout from "../../../components/layout/KeyboardLayout";
import BasicInputs from "../../../components/to-forms/BasicInputs";
import { Icons } from "../../../assets/icons";
import { Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Button, Surface } from "react-native-paper";
import { useState } from "react";
import { Stack } from "expo-router";

export default function AddTool() {
  const [selectedLanguage, setSelectedLanguage] = useState();

  const tools = [
    { id: "electric", label: "Eléctrica" },
    { id: "manual", label: "Manual" },
  ];

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
                  Agregar herramientas
                </Text>
              </View>
            </View>
          ),
        }}
      />
      <View className="w-full px-[4%] items-center gap-3 pt-5">
        <BasicInputs
          label={"Nombre de la herramienta"}
          placeholder={"Ej: Taladro Percutor Bosch"}
          leftIcon={<Icons.frenchKey size="18" color="#225599" />}
          labelStyle={{ color: "#225599" }}
        />
        {/* Selector de Estado */}
        <View className="w-full">
          <Text className="text-placeholder mb-1 ml-1">Estado</Text>
          <Surface
            style={{
              borderRadius: 15,
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
              <Picker.Item label={"Bueno"} value="x" />
              <Picker.Item label={"Malo"} value="x" />
              <Picker.Item label={"Regular"} value="x" />
            </Picker>
          </Surface>
        </View>

        {/* Selector de categoria */}
        <View className="w-full">
          <Text className="text-placeholder mb-1 ml-1">Categoría</Text>
          <Surface
            style={{
              borderRadius: 15,
              outlineColor: "#c7b75b",
              outlineWidth: 1,
              backgroundColor: "#fff",
            }}
          >
            <Picker style={{ color: "#225599" }}>
              <Picker.Item label="Sin asignar" value="null" />
              {tools.map((tool) => (
                <Picker.Item
                  label={tool.label}
                  value={tool.id}
                  key={tool.id}
                />
              ))}
            </Picker>
          </Surface>
          {/* comente los botones anteriores en caso de que no te guste xd */}
          {/* <View className="flex-row gap-2 justify-between">
            <Surface style={{ borderRadius: 15, width: "47%" }}>
              <Button
                onPress={() => console.log("Agregar herramienta")}
                mode="contained"
                buttonColor="#FFD700"
                textColor="#225599"
                labelStyle={{ fontSize: 18 }}
                contentStyle={{ height: 50 }}
                style={{ borderRadius: 15 }}
              >
                Manual
              </Button>
            </Surface>

            <Surface style={{ borderRadius: 15, width: "47%" }}>
              <Button
                onPress={() => console.log("Agregar herramienta")}
                mode="contained"
                buttonColor="#FFD700"
                textColor="#225599"
                labelStyle={{ fontSize: 18 }}
                contentStyle={{ height: 50 }}
                style={{ borderRadius: 15 }}
              >
                Eléctrica
              </Button>
            </Surface>
          </View> */}
        </View>

        {/* ---------SELECTOR DE UBICACION-------------- */}
        <View className="w-[100%]">
          <Text className="text-placeholder mb-1 ml-1">Ubicación</Text>
          <Surface
            style={{
              borderRadius: 15,
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
              <Picker.Item label="Almacenamiento principal" value="java" />
              <Picker.Item label={"Bueno"} value="x" />
              <Picker.Item label={"Malo"} value="x" />
              <Picker.Item label={"Regular"} value="x" />
            </Picker>
          </Surface>
        </View>
        {/* ----------SELECTOR DE ENCARGADO----------- */}
        <View className="w-[100%]">
          <Text className="text-placeholder mb-1 ml-1">
            Encargado (opcional)
          </Text>
          <Surface
            style={{
              borderRadius: 15,
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
              <Picker.Item label="Sin asignar" value="java" />
              <Picker.Item label={"Bueno"} value="x" />
              <Picker.Item label={"Malo"} value="x" />
              <Picker.Item label={"Regular"} value="x" />
            </Picker>
          </Surface>
        </View>
        {/* -----------bOTON AGREGAR HERRAMIENTA--------------- */}
        <Surface style={{ borderRadius: 15, width: "100%", marginTop: 10 }}>
          <Button
            onPress={() => {
              console.log("Agregar herramienta");
            }}
            mode="contained"
            buttonColor="#FFD700"
            textColor="#225599"
            labelStyle={{ fontSize: 18 }}
            contentStyle={{ height: 50 }}
            style={{ borderRadius: 15 }}
          >
            Agregar herramienta
          </Button>
        </Surface>
      </View>
    </ScreenLayout>
  );
}
