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
      <KeyboardLayout>
        <View className="w-full items-center">
          <Surface
            style={{
              borderRadius: 15,
              marginTop: 20,
              backgroundColor: "white",
              padding: 25,
              gap: 25,
              width: "92%",
            }}
          >
            <BasicInputs
              label={"Nombre de la herramienta"}
              placeholder={"Ej: Taladro Percutor Bosch"}
              leftIcon={<Icons.frenchKey size="18" color="#225599" />}
            />
            <View>
              <Text className="text-placeholder mb-2 ml-1">Estado</Text>
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
            <View>
              <Text className="text-placeholder mb-2 ml-1">Categoría</Text>
              <View className="flex-row gap-2 justify-between">
                <Surface style={{ borderRadius: 15 }} className="w-[45%]">
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

                <Surface style={{ borderRadius: 15 }} className="w-[45%]">
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
              </View>
            </View>

            {/* ---------SELECTOR DE UBICACION-------------- */}
            <View>
              <Text className="text-placeholder mb-2 ml-1">Ubicación</Text>
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
            <View>
              <Text className="text-placeholder mb-2 ml-1">
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
          </Surface>
          {/* -----------bOTON AGREGAR HERRAMIENTA--------------- */}
          <Surface style={{ borderRadius: 15 }} className="mt-5 w-[93%]">
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
      </KeyboardLayout>
    </ScreenLayout>
  );
}
