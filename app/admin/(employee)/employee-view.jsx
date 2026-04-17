import { Modal, Text, TouchableOpacity, View } from "react-native";
import { Stack } from "expo-router";
import { useState } from "react";
import { Button, Avatar, Surface } from "react-native-paper";

import ScreenLayout from "../../../components/layout/ScreenLayout";
import KeyboardLayout from "../../../components/layout/KeyboardLayout";

import { Icons } from "../../../assets/icons";
import BasicInputs from "../../../components/to-forms/BasicInputs";
import { Picker } from "@react-native-picker/picker";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const empleados = [
  {
    id: 1,
    nombre: "Roberto Sánchez",
    email: "roberto.sanchez@empresa.com",
    rol: "encargado",
    obraAsignada: "Edificio Torres del Sol - Fase 2",
    fechaIngreso: "2022-03-15",
    obrasACargo: [
      "Edificio Torres del Sol - Fase 2",
      "Centro Comercial Plaza Mayor",
    ],
  },
  {
    id: 2,
    nombre: "María González",
    email: "maria.gonzalez@empresa.com",
    rol: "encargado",
    obraAsignada: "Centro Comercial Plaza Mayor",
    fechaIngreso: "2021-06-20",
    obrasACargo: ["Complejo Residencial Los Pinos"],
  },
  {
    id: 3,
    nombre: "Carlos Ramírez",
    email: "carlos.ramirez@empresa.com",
    rol: "encargado",
    obraAsignada: "Complejo Residencial Los Pinos",
    fechaIngreso: "2023-01-10",
    obrasACargo: ["Ampliación Planta Industrial"],
  },
  {
    id: 4,
    nombre: "Ana Martínez",
    email: "ana.martinez@empresa.com",
    rol: "operario",
    obraAsignada: "Edificio Torres del Sol - Fase 2",
    fechaIngreso: "2023-05-12",
  },
  {
    id: 5,
    nombre: "Luis Fernández",
    email: "luis.fernandez@empresa.com",
    rol: "operario",
    obraAsignada: "Centro Comercial Plaza Mayor",
    fechaIngreso: "2022-11-08",
  },
  {
    id: 6,
    nombre: "Pedro Gómez",
    email: "pedro.gomez@empresa.com",
    rol: "operario",
    obraAsignada: "Complejo Residencial Los Pinos",
    fechaIngreso: "2024-02-01",
  },
  {
    id: 7,
    nombre: "Laura Torres",
    email: "laura.torres@empresa.com",
    rol: "operario",
    obraAsignada: "Ampliación Planta Industrial",
    fechaIngreso: "2023-09-15",
  },
];

const obras = [
  { id: 1, name: "Edificio Torres del Sol - Fase 2" },
  { id: 2, name: "Centro Comercial Plaza Mayor" },
  { id: 3, name: "Complejo Residencial Los Pinos" },
  { id: 4, name: "Ampliación Planta Industrial" },
  { id: 5, name: "Remodelación Oficinas Norte" },
];

const role = ["encargado", "operario"];

export default function EmployeeView() {
  const inset = useSafeAreaInsets();
  const [searchTerm, setSearchTerm] = useState("");

  const mandatedList = empleados.filter((e) => e.rol == role[0]);
  const operariosList = empleados.filter((e) => e.rol == role[1]);

  /* estados para el modal de invitacion de empleado */
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  // Generar keys únicas para cada tipo de invitación
  const encargadoKey = "64a6s54d6a5s4d6as54d";
  const operarioKey = "asjndas4442145a5sd";

  return (
    <ScreenLayout>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#225599",
            color: "#fff",
          },
          headerLeft: () => (
            <View className="py-2 pt-5 gap-1 ">
              <View className="flex-row items-center gap-3">
                <View className="self-start p-3 bg-[#FFD700] rounded-2xl mb-2">
                  <Icons.users size={24} color="#225599" />
                </View>
                <Text className="text-xl text-[#fff]">Empleados</Text>
              </View>
              <View className="flex-row pb-3 gap-4 text-sm">
                <Text className="text-[#E7D77B]">
                  {mandatedList.length}
                  {mandatedList.length == 1 ? " encargado" : " encargados"}
                </Text>
                <Text className="text-[#E7D77B]">•</Text>
                <Text className="text-[#E7D77B]">
                  {operariosList.length}
                  {operariosList.length === 1 ? " operario" : " operarios"}
                </Text>
              </View>
            </View>
          ),
        }}
      />

      {/* <View className="flex-1 gap-2 px-2 py-2 "> */}
      {/* Buscador y filtros */}
      <View className="mb-4 gap-5 py-2">
        {/* Buscador */}
        <BasicInputs
          value={searchTerm}
          onChangeText={setSearchTerm}
          leftIcon={<Icons.magnifyingGlass size={16} color={"#FFD700"} />}
          placeholder={"Buscar empleados..."}
          label={"Buscar empleados..."}
          style={{ flex: 1 }}
        />
        {/* Filtros */}
        <View
          style={{
            flexDirection: "row",
            height: 50,
          }}
          className="gap-2 justify-center content-center items-center"
        >
          {/* Filtro por obra */}
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
              selectedValue={() => {}}
              onValueChange={() => {}}
              style={{ color: "#225599" }}
            >
              <Picker.Item label="Todas las obras" value="java" />

              {obras.map((work) => (
                <Picker.Item label={work.name} value={work.id} key={work.id} />
              ))}
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
              selectedValue={() => {}}
              onValueChange={() => {}}
              style={{ color: "#225599" }}
            >
              <Picker.Item label="Todos los roles" value="java" />

              {role.map((rol) => (
                <Picker.Item label={rol} value={rol} key={rol} />
              ))}
            </Picker>
          </Surface>
        </View>
      </View>

      <KeyboardLayout>
        {/* Lista de empleados */}
        <View className="space-y-3 mb-7 gap-3">
          {empleados.map((empleado, index) => (
            <TouchableOpacity
              key={empleado.id ?? index}
              className="w-full bg-white rounded-2xl p-4 border border-[#E7D77B]/40"
            >
              <View className="flex-row items-center gap-3">
                {/* Avatar */}
                <View className="w-12 h-12 flex items-center justify-center shrink-0">
                  <Avatar.Text
                    style={{ backgroundColor: "#003366" }}
                    size={50}
                    color="#FFD700"
                    label={empleado.nombre
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  />
                </View>
                {/* Info */}
                <View className="flex-1 min-w-0">
                  <Text
                    style={{ fontSize: 16 }}
                    className="text-[#003366] text-sm mb-1"
                  >
                    {empleado.nombre}
                  </Text>
                  <View className="gap-2 self-start mb-1">
                    <Text
                      style={{ fontSize: 14 }}
                      className={`px-2 py-1 rounded-full text-xs ${
                        empleado.rol === "encargado"
                          ? "bg-[#FFD700]/20 text-[#003366]"
                          : "bg-[#405C4D]/10 text-[#405C4D]"
                      }`}
                    >
                      {empleado.rol === "encargado" ? "Encargado" : "Operario"}
                    </Text>
                  </View>

                  <Text
                    style={{ fontSize: 15 }}
                    numberOfLines={1}
                    className="text-[#405C4D] text-xs "
                  >
                    {empleado.obraAsignada || "Sin asignar"}
                  </Text>
                </View>
                {/* Arrow */}
                <Icons.arrowRight size={18} color={"#405C4D"} />
              </View>
            </TouchableOpacity>
          ))}

          {empleados.length === 0 && (
            <View className=" py-12">
              <Text
                style={{ fontSize: 16 }}
                className="text-[#405C4D] text-center text-sm"
              >
                No se encontraron empleados
              </Text>
            </View>
          )}
        </View>

        {/* Boton de Invitar empleado */}
        {/* </View> */}
        {/* modal para la invitación de empleado */}

        <Modal
          animationType="slide"
          // transparent={true}
          backdropColor="#504f4f75"
          visible={visible}
          onRequestClose={() => {
            hideModal();
          }}
          // ----------
          // contentContainerStyle={{ backgroundColor: "white", padding: 20 }}
        >
          <View className="flex-1 items-center justify-center">
            <View className="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl">
              {/* Header del modal */}
              <View className="flex-row items-center justify-between mb-5">
                <Text style={{ fontSize: 18 }} className="text-[#003366]">
                  Invitar empleados
                </Text>
                <Button buttonColor="#FFD700" onPress={() => setVisible(false)}>
                  <Icons.close size={18} color={"#003366"} />
                </Button>
              </View>

              <Text style={{ fontSize: 14 }} className="text-[#405C4D] mb-6">
                Compartí estos links de invitación según el rol del empleado
              </Text>

              {/* Link para Encargados */}
              <View className="mb-1">
                <View className="flex-row items-center gap-2 mb-2">
                  <View className="w-2 h-2 rounded-full bg-[#FFD700]" />
                  <Text style={{ fontSize: 14 }} className="text-[#003366]">
                    Encargado
                  </Text>
                </View>
                <View className="bg-[#F9F7F0] rounded-xl p-4 mb-2">
                  <Text
                    style={{ fontSize: 13 }}
                    className="text-[#405C4D] mb-1"
                  >
                    Link de invitación
                  </Text>
                  <Text
                    style={{ fontSize: 13 }}
                    className="text-[#003366]  mb-3"
                  >
                    https://localhost:8709/invitacion/encargado?key=
                    {encargadoKey}
                  </Text>
                  <View className="items-stretch">
                    <View className=" bg-white rounded-lg px-3 py-2 border border-[#E7D77B]">
                      <Text
                        style={{ fontSize: 13 }}
                        className="text-[#405C4D] mb-0.5"
                      >
                        Key de acceso
                      </Text>
                      <Text style={{ fontSize: 13 }} className="text-[#003366]">
                        {encargadoKey}
                      </Text>
                    </View>
                  </View>
                </View>
                <Button
                  onPress={() => {}}
                  textColor="#003366"
                  buttonColor="#FFD700"
                  labelStyle={{ fontSize: 14 }}
                >
                  Copiar link completo
                </Button>
              </View>

              {/* Divider */}
              <View className="h-px bg-[#E7D77B] my-5" />

              {/* Link para Operarios */}
              <View>
                <View className="flex-row items-center gap-2 mb-2">
                  <View className="w-2 h-2 rounded-full bg-[#405C4D]" />
                  <Text style={{ fontSize: 14 }} className="text-[#003366] ">
                    Operario
                  </Text>
                </View>
                <View className="bg-[#F9F7F0] rounded-xl p-4 mb-2">
                  <Text
                    style={{ fontSize: 13 }}
                    className="text-[#405C4D]  mb-1"
                  >
                    Link de invitación
                  </Text>
                  <Text
                    style={{ fontSize: 13 }}
                    className="text-[#003366]  mb-3"
                  >
                    https://localhost:8709/invitacion/operario?key={operarioKey}
                  </Text>
                  <View className="items-stretch">
                    <View className="bg-white rounded-lg px-3 py-2 border border-[#E7D77B]">
                      <Text
                        style={{ fontSize: 13 }}
                        className="text-[#405C4D]  mb-0.5"
                      >
                        Key de acceso
                      </Text>
                      <Text
                        style={{ fontSize: 13 }}
                        className="text-[#003366] "
                      >
                        {operarioKey}
                      </Text>
                    </View>
                  </View>
                </View>
                <Button
                  onPress={() => {}}
                  textColor="#003366"
                  buttonColor="#FFD700"
                  labelStyle={{ fontSize: 14 }}
                >
                  Copiar link completo
                </Button>
              </View>
            </View>
          </View>
        </Modal>
      </KeyboardLayout>
      <Button
        icon={() => <Icons.userPlus size={16} color={"#003366"} />}
        style={{
          position: "relative",
          padding: 5,
          bottom: 20,
          backgroundColor: "#FFD700",
          opacity: visible ? 0 : 1,
        }}
        disabled={visible}
        onPress={showModal}
        textColor="#003366"
      >
        Invitar Empleados
      </Button>
    </ScreenLayout>
  );
}
