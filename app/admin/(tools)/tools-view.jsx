import { Stack, useRouter } from "expo-router";
import ScreenLayout from "../../../components/layout/ScreenLayout";
import { ScrollView, Text, View } from "react-native";
import { Icons } from "../../../assets/icons";
import { Button, SegmentedButtons, Surface } from "react-native-paper";
import BasicInputs from "../../../components/to-forms/BasicInputs";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

// DATA MOCK
const tools = [
  {
    id: 1,
    name: "Taladro percutor",
    brand: "Bosch",
    status: "bueno",
    category: "electrica",
    ubication: "Edificio Torres del Sol - Fase 2",
    mandated: "Roberto Sánchez",
  },
  {
    id: 2,
    name: "Sierra circular",
    brand: "Makita",
    status: "bueno",
    category: "electrica",
    ubication: "Almacenamiento principal",
    mandated: null,
  },
  {
    id: 3,
    name: "Amoladora angular",
    brand: "DeWalt",
    status: "regular",
    category: "electrica",
    ubication: "Centro Comercial Plaza Mayor",
    mandated: "María González",
  },
  {
    id: 4,
    name: "Martillo carpintero",
    brand: "Generic",
    status: "bueno",
    category: "manual",
    ubication: "Edificio Torres del Sol - Fase 2",
    mandated: "Roberto Sánchez",
  },
  {
    id: 5,
    name: "Destornillador set 12 pzas",
    brand: "Generic",
    status: "bueno",
    category: "manual",
    ubication: "Almacenamiento principal",
    mandated: null,
  },
  {
    id: 6,
    name: "Llave inglesa 12 pulgadas",
    brand: "Generic",
    status: "malo",
    category: "manual",
    ubication: "Complejo Residencial Los Pinos",
    mandated: "Carlos Ramírez",
  },
  {
    id: 7,
    name: "Nivel láser",
    brand: "Stanley",
    status: "bueno",
    category: "electrica",
    ubication: "Ampliación Planta Industrial",
    mandated: "Ana Martínez",
  },
  {
    id: 8,
    name: "Pala excavadora",
    brand: "Generic",
    status: "regular",
    category: "manual",
    ubication: "Almacenamiento principal",
    mandated: null,
  },
];

const worksList = [
  "Almacenamiento principal",
  "Edificio Torres del Sol - Fase 2",
  "Centro Comercial Plaza Mayor",
  "Complejo Residencial Los Pinos",
  "Ampliación Planta Industrial",
  "Remodelación Oficinas Norte",
];

const mandatedList = [
  "Roberto Sánchez",
  "María González",
  "Carlos Ramírez",
  "Ana Martínez",
];

export default function ToolsView() {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [value, setValue] = useState("");
  const router = useRouter();

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
        {/* ----------BOTON AGREGAR HERRAMIENTA------------ */}
        <Surface style={{ borderRadius: 15 }} className="mt-3 w-full">
          <Button
            onPress={() => router.navigate("/admin/add-tool")}
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
        {/* -----------BUSCADOR DE HERRAMIENTAS-------------- */}
        <BasicInputs
          label={"Buscar herramientas..."}
          placeholder={"Matesito"}
          leftIcon={<Icons.search size="18" color="#225599" />}
          style={{ width: "100%" }}
        />
        <View className="flex-row gap-2">
          {/* ------------FILTRO POR UBICACION------------- */}
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

              {worksList.map((work) => (
                <Picker.Item label={work} value="x" />
              ))}
            </Picker>
          </Surface>

          {/* ------------FILTRO POR ENCARGADO------------- */}
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
              <Picker.Item label="Todos los encargados" value="x" />
              {mandatedList.map((mandated) => (
                <Picker.Item label={mandated} value="x" />
              ))}
            </Picker>
          </Surface>
        </View>
        {/* --------------SELECCION DE CATEGORIA-------------- */}
        <SegmentedButtons
          value={"all"}
          onValueChange={setValue}
          buttons={[
            {
              value: "all",
              label: "Todas",
            },
            {
              value: "Eléctricas",
              label: "Eléctricas",
            },
            { value: "Manuales", label: "Manuales" },
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
            marginBottom: 10,
          }}
        />
      </View>
      {/*------------LISTA DE HERRAMIENTAS --------------- */}
      <ScrollView className="px-2 py-5 ">
        <View className="flex-column gap-5 pb-10">
          {tools.map((tool) => (
            <CardTool
              key={tool.id}
              name={tool.name}
              mandated={tool.mandated}
              status={tool.status}
              ubication={tool.ubication}
              category={tool.category}
              brand={tool.brand}
            />
          ))}
        </View>
      </ScrollView>
    </ScreenLayout>
  );
}

function CardTool({ name, mandated, status, ubication, category, brand }) {
  return (
    <Surface
      style={{
        borderRadius: 15,
        backgroundColor: "white",
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        width: "100%",
      }}
    >
      {/* ICONO PRINCIPAL */}
      <View className="self-start p-2 bg-[#225599] rounded-2xl">
        <Icons.frenchKey size={28} color="#FFD700" />
      </View>

      <View className="flex-1 gap-2">
        {/* NOMBRE HERRAMIENTA Y MARCA */}
        <View className="flex-row justify-between items-center">
          <Text className="text-[#225599] text-xl font-semibold">{name}</Text>
          <Text
            style={{ borderRadius: 10 }}
            className="bg-blue-box-info/10 text-[important-info] p-1 px-4 font-semibold text-lg"
          >
            {brand}
          </Text>
        </View>
        {/* ESTADO + CATEGORIA*/}
        <View className="flex-row gap-3 items-center">
          <Text
            style={{ borderRadius: 15 }}
            className="bg-green-100 text-green-500 p-1 px-3 font-semibold "
          >
            {status}
          </Text>
          <Text
            style={{ borderRadius: 15 }}
            className="bg-blue-100 text-blue-600 p-1 px-3 font-semibold "
          >
            {category}
          </Text>
        </View>
        <Text className="text-[#908c9d] text-lg ">
          <Icons.mapMarker size={18} color="#908c9d" /> {ubication}
        </Text>
        <Text className="text-[#908c9d] text-lg ">
          <Icons.user size={18} color="#908c9d" />{" "}
          {mandated ? mandated : "Sin Asignar"}
        </Text>
      </View>
    </Surface>
  );
}
