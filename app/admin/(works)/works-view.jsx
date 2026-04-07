import { ScrollView, Text, View } from "react-native";
import { router, Stack } from "expo-router";

import ScreenLayout from "../../../components/layout/ScreenLayout";
import { Button, Surface } from "react-native-paper";

import { Icons } from "../../../assets/icons";

const obras = [
  {
    id: 1,
    nombre: "Edificio Torres del Sol - Fase 2",
    encargado: "Roberto Sánchez",
    alertas: 3,
  },
  {
    id: 2,
    nombre: "Centro Comercial Plaza Mayor",
    encargado: "María González",
    alertas: 0,
  },
  {
    id: 3,
    nombre: "Complejo Residencial Los Pinos",
    encargado: "Carlos Ramírez",
    alertas: 7,
  },
  {
    id: 4,
    nombre: "Ampliación Planta Industrial",
    encargado: "Ana Martínez",
    alertas: 2,
  },
  {
    id: 5,
    nombre: "Remodelación Oficinas Norte",
    encargado: "Luis Fernández",
    alertas: 0,
  },
];

export default function WorksView() {
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
              <View className="self-start p-5 bg-[#FFD700] rounded-3xl mb-2">
                <Icons.hardHat size={24} color="#225599" />
              </View>
              <Text className="text-xl text-[#c7c77b]"> x obras activas</Text>
            </View>
          ),
        }}
      />

      <Surface
        style={{ shadowColor: "#c7b75b" }}
        className="mt-8 rounded-[15px] w-full"
      >
        <Button
          onPress={() => {router.navigate("admin/create-works")}}
          mode="contained"
          icon={() => <Icons.plus size={20} color="#225599" />}
          buttonColor="#FFD700"
          textColor="#225599"
          labelStyle={{ fontSize: 18 }}
          contentStyle={{ height: 50 }}
          style={{ borderRadius: 15 }}
        >
          Agregar nueva obra
        </Button>
      </Surface>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 2,
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: 20,
        }}
      >
        <View className="gap-4 mt-5">
          {obras.map((obra) => (
            <CardWork
              key={obra.id}
              name={obra.nombre}
              mandated={obra.encargado}
              alerts={obra.alertas}
            />
          ))}
        </View>
      </ScrollView>
    </ScreenLayout>
  );
}

function CardWork({ name, mandated, alerts }) {
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
      <View className="self-start p-2 bg-[#225599] rounded-2xl">
        <Icons.hammer size={28} color="#FFD700" />
      </View>
      <View className="flex-1 gap-2">
        <Text className="text-[#225599] text-xl font-semibold">{name}</Text>
        <Text className="text-[#908c9d] text-lg ">
          <Icons.user size={18} color="#908c9d" /> Encargado: {mandated}
        </Text>
        <View
          className={`${
            alerts > 0 ? "bg-red-100" : "bg-green-50"
          }  flex-row items-center justify-center w-[95px] px-4 py-1 rounded-2xl ml-1`}
        >
          {alerts > 0 && <Icons.warning size={12} color="#d82828" />}
          <Text className={`${alerts > 0 ? "text-red-600" : "text-green-600"}`}>
            {" "}
            {alerts > 0 ? `Alertas: ${alerts}` : "Sin alertas"}
          </Text>
        </View>
      </View>
    </Surface>
  );
}
