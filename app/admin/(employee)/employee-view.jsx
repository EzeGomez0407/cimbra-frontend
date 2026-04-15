import { Text, TouchableOpacity, View } from "react-native";
import { Stack } from "expo-router";
import { useState } from "react";
import {
  PaperProvider,
  Button,
  Portal,
  Avatar,
  Modal,
} from "react-native-paper";

import ScreenLayout from "../../../components/layout/ScreenLayout";
import KeyboardLayout from "../../../components/layout/KeyboardLayout";

import { Icons } from "../../../assets/icons";
import BasicInputs from "../../../components/to-forms/BasicInputs";
import Dropdown from "../../../components/dropdown/Dropdown";

export default function EmployeeView() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtroObra, setFiltroObra] = useState("todos");
  const [filtroRol, setFiltroRol] = useState("todos");

  // Datos de ejemplo
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
    "Edificio Torres del Sol - Fase 2",
    "Centro Comercial Plaza Mayor",
    "Complejo Residencial Los Pinos",
    "Ampliación Planta Industrial",
    "Remodelación Oficinas Norte",
  ];

  const role = ["encargado", "operario"];

  // Filtrar empleados
  const empleadosFiltrados = empleados.filter((emp) => {
    const matchSearch = emp.nombre
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchObra = filtroObra === "todos" || emp.obraAsignada === filtroObra;
    const matchRol = filtroRol === "todos" || emp.rol === filtroRol;
    return matchSearch && matchObra && matchRol;
  });

  const contadorEncargados = empleados.filter(
    (e) => e.rol === "encargado"
  ).length;
  const contadorOperarios = empleados.filter(
    (e) => e.rol === "operario"
  ).length;

  /* estados para el modal de invitacion de empleado */
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const [copiedKey, setCopiedKey] = useState(null);

  // Generar keys únicas para cada tipo de invitación
  const encargadoKey =
    "ENC-" + Math.random().toString(36).substring(2, 10).toUpperCase();
  const operarioKey =
    "OPR-" + Math.random().toString(36).substring(2, 10).toUpperCase();
  const baseUrl = window.location.origin;

  const handleCopyLink = (tipo) => {
    const key = tipo === "encargado" ? encargadoKey : operarioKey;
    const link = `${baseUrl}/invitacion/${tipo}?key=${key}`;
    console.log(link);
    setCopiedKey(tipo);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <PaperProvider>
      <ScreenLayout>
        <KeyboardLayout>
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
                      {contadorEncargados}{" "}
                      {contadorEncargados === 1 ? "encargado" : "encargados"}
                    </Text>
                    <Text className="text-[#E7D77B]">•</Text>
                    <Text className="text-[#E7D77B]">
                      {contadorOperarios}{" "}
                      {contadorOperarios === 1 ? "operario" : "operarios"}
                    </Text>
                  </View>
                </View>
              ),
            }}
          />

          <View className="flex-1 gap-2 px-2 py-2 ">
            {/* Buscador y filtros */}
            <View className="mb-4 gap-2 space-y-2">
              {/* Buscador */}
              <BasicInputs
                value={searchTerm}
                onChangeText={(text) => setSearchTerm(text)}
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
                <Dropdown
                  styleContent={{
                    flex: 1,
                  }}
                  style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  iconRight={<Icons.arrowDown size={16} color={"#003366"} />}
                  label={"Todas las obras"}
                  lists={obras}
                  list={filtroObra}
                  setList={setFiltroObra}
                  positionLeft={0}
                  positionRigth={0}
                />

                <Dropdown
                  style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 5,
                  }}
                  iconLeft={<Icons.filter size={16} color={"#003366"} />}
                  label={"Rol"}
                  lists={role}
                  list={filtroRol}
                  setList={setFiltroRol}
                  positionLeft={-50}
                  positionRigth={0}
                />
              </View>
            </View>
            {/* Lista de empleados */}
            <View className="space-y-3 mb-7 gap-3">
              {empleadosFiltrados.map((empleado, index) => (
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
                          {empleado.rol === "encargado"
                            ? "Encargado"
                            : "Operario"}
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

              {empleadosFiltrados.length === 0 && (
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
            <Portal>
              <Button
                icon={() => <Icons.userPlus size={16} color={"#003366"} />}
                style={{
                  position: "absolute",
                  padding: 5,
                  left: 15,
                  right: 15,
                  bottom: 70,
                  backgroundColor: "#FFD700",
                  opacity: visible ? 0 : 1,
                }}
                disabled={visible}
                onPress={showModal}
                textColor="#003366"
              >
                Invitar Empleados
              </Button>
            </Portal>
          </View>
          {/* modal para la invitación de empleado */}
          <Portal>
            <Modal
              visible={visible}
              onDismiss={hideModal}
              contentContainerStyle={{ backgroundColor: "white", padding: 20 }}
            >
              <View className="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl">
                {/* Header del modal */}
                <View className="flex-row items-center justify-between mb-5">
                  <Text style={{ fontSize: 18 }} className="text-[#003366]">
                    Invitar empleados
                  </Text>
                  <Button
                    buttonColor="#FFD700"
                    onPress={() => setVisible(false)}
                  >
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
                      {baseUrl}/invitacion/encargado?key={encargadoKey}
                    </Text>
                    <View className="items-stretch">
                      <View className=" bg-white rounded-lg px-3 py-2 border border-[#E7D77B]">
                        <Text
                          style={{ fontSize: 13 }}
                          className="text-[#405C4D] mb-0.5"
                        >
                          Key de acceso
                        </Text>
                        <Text
                          style={{ fontSize: 13 }}
                          className="text-[#003366]"
                        >
                          {encargadoKey}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <Button
                    onPress={() => handleCopyLink("encargado")}
                    textColor="#003366"
                    buttonColor="#FFD700"
                    labelStyle={{ fontSize: 14 }}
                  >
                    {copiedKey === "encargado"
                      ? "¡Copiado!"
                      : "Copiar link completo"}
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
                      {baseUrl}/invitacion/operario?key={operarioKey}
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
                    onPress={() => handleCopyLink("operario")}
                    textColor="#003366"
                    buttonColor="#FFD700"
                    labelStyle={{ fontSize: 14 }}
                  >
                    {copiedKey === "operario"
                      ? "¡Copiado!"
                      : "Copiar link completo"}
                  </Button>
                </View>
              </View>
            </Modal>
          </Portal>
        </KeyboardLayout>
      </ScreenLayout>
    </PaperProvider>
  );
}
