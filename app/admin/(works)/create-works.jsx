import { Stack } from "expo-router";
import { useState } from "react";
import {
  List,
  Menu,
  Modal,
  PaperProvider,
  Surface,
  Button,
  Portal,
  FAB,
} from "react-native-paper";
import { Text, TouchableOpacity, View } from "react-native";

import ScreenLayout from "../../../components/layout/ScreenLayout";
import KeyboardLayout from "../../../components/layout/KeyboardLayout";
import BasicInputs from "../../../components/to-forms/BasicInputs";

import { Icons } from "../../../assets/icons";
import { Picker } from "@react-native-picker/picker";

export default function CreateWorks() {
  /* estados para el modal de invitacion de empleado */
  const [visible, setVisible] = useState(false);

  //estados para el formulario
  const [form, setForm] = useState({
    name: "",
    address: "",
    manager: null,
    tools: null,
  });

  const Managers = [
    { id: 1, name: "Roberto Sánchez" },
    { id: 2, name: "María Gonzáles" },
    { id: 3, name: "Carlos Ramirez" },
  ];

  const [expanded, setExpanded] = useState(false);

  const handlePress = () => {
    setExpanded(!expanded);
  };

  //estados para las herramientas
  const [tools, setTools] = useState([
    { id: 1, name: "Amoladora angular", type: "Eléctrica", stock: 6, qty: 0 },
    { id: 2, name: "Martillo", type: "Manual", stock: 15, qty: 0 },
    { id: 3, name: "Destornillador set", type: "Manual", stock: 12, qty: 0 },
    { id: 4, name: "Martillo", type: "Manual", stock: 15, qty: 0 },
    { id: 5, name: "Destornillador set", type: "Manual", stock: 12, qty: 0 },
    { id: 6, name: "Martillo", type: "Manual", stock: 15, qty: 0 },
    { id: 7, name: "Destornillador set", type: "Manual", stock: 12, qty: 0 },
    { id: 8, name: "Martillo", type: "Manual", stock: 15, qty: 0 },
    { id: 9, name: "Destornillador set", type: "Manual", stock: 12, qty: 0 },
    { id: 10, name: "Martillo", type: "Manual", stock: 15, qty: 0 },
    { id: 11, name: "Destornillador set", type: "Manual", stock: 12, qty: 0 },
    { id: 12, name: "Martillo", type: "Manual", stock: 15, qty: 0 },
    { id: 13, name: "Destornillador set", type: "Manual", stock: 12, qty: 0 },
    { id: 14, name: "Martillo", type: "Manual", stock: 15, qty: 0 },
    { id: 15, name: "Destornillador set", type: "Manual", stock: 12, qty: 0 },
  ]);

  const [filter, setFilter] = useState("Todas");

  const filters = [
    { id: "electric", label: "Eléctrica" },
    { id: "manual", label: "Manual" },
  ];

  /* estados para la busqueda */
  const [search, setSearch] = useState("");

  const filteredTools = tools
    // 1. filtro por tipo
    .filter((tool) => {
      if (filter === "Todas") return true;

      if (filter === "Eléctrica") return tool.type === "Eléctrica";
      if (filter === "Manual") return tool.type === "Manual";

      return true;
    })
    // 2. filtro por búsqueda
    .filter((tool) => tool.name.toLowerCase().includes(search.toLowerCase()));

  const [toolsExpanded, setToolsExpanded] = useState(false);

  const updateQty = (id, value) => {
    setTools((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, qty: Math.max(0, Math.min(value, t.stock)) } : t,
      ),
    );
  };

  return (
    <PaperProvider>
      <ScreenLayout>
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: "#225599",
              color: "#fff",
            },
            headerLeft: () => (
              <View className="py-2 pt-5 gap-3 flex-row items-center">
                <View className="self-start p-3 bg-[#FFD700] rounded-2xl mb-2">
                  <Icons.building size={24} color="#225599" />
                </View>
                <Text className="text-xl text-[#c7c77b]">
                  {" "}
                  Crear Nueva Obra
                </Text>
              </View>
            ),
          }}
        />

        <View className="gap-4 flex-1  mx-3 mt-5   pb-3">
          <WorkForm
            form={form}
            setForm={setForm}
            expanded={expanded}
            handlePress={handlePress}
            Managers={Managers}
          />

          <View style={{ marginHorizontal: 5 }} className="flex-1">
            <Text
              style={{ fontSize: 18, fontWeight: "bold", color: "#003366" }}
            >
              Herramientas del almacenamiento
            </Text>

            <SearchBar
              filter={filter}
              setFilter={setFilter}
              filters={filters}
              toolsExpanded={toolsExpanded}
              setToolsExpanded={setToolsExpanded}
              search={search}
              setSearch={setSearch}
            />

            <KeyboardLayout>
              {filteredTools.length == 0 ? (
                <Text>No se encontraron herramientas</Text>
              ) : (
                filteredTools.map((item) => (
                  <ToolItem key={item.id} item={item} onChange={updateQty} />
                ))
              )}
            </KeyboardLayout>
          </View>

          {/* btn guardar obra */}

          <Button
            icon={() => <Icons.plus size={16} color={"#003366"} />}
            onPress={() => console.log("crear")}
            style={{
              position: "relative",
              padding: 5,
              bottom: 0,
              backgroundColor: "#FFD700",
              opacity: visible ? 0 : 1,
            }}
            disabled={visible}
            textColor="#003366"
          >
            Crear obra
          </Button>
        </View>
      </ScreenLayout>
    </PaperProvider>
  );
}

function WorkForm({ form, setForm, expanded, handlePress, Managers }) {
  return (
    <Surface
      style={{
        borderRadius: 15,
        backgroundColor: "white",
        padding: 20,
        marginHorizontal: 5,
        gap: 5,
      }}
      elevation={3}
    >
      <Text style={{ fontWeight: "bold", marginBottom: 10, color: "#003366" }}>
        Datos de la obra
      </Text>

      {/* Nombre */}
      <BasicInputs
        leftIcon={<Icons.building size={16} color={"#FFD700"} />}
        placeholder={"Ej: Edificio Torres del Sol"}
        label={"Nombre de la obra"}
        onChangeText={(text) => setForm((prev) => ({ ...prev, name: text }))}
      />

      {/* Dirección */}
      <BasicInputs
        leftIcon={<Icons.building size={16} color={"#FFD700"} />}
        placeholder="Ej: Av. Principal 123"
        label={"Dirección"}
        onChangeText={(text) => setForm((prev) => ({ ...prev, address: text }))}
      />

      {/* Encargado */}
      <Text className="text-lg font-bold text-[#003366]">
        Encargado (opcional)
      </Text>
      <Surface
        style={{
          borderRadius: 15,
          width: "100%",
          outlineColor: "#c7b75b",
          outlineWidth: 1,
          backgroundColor: "#fff",
        }}
      >
        <Picker
          selectedValue={form.manager?.id}
          onValueChange={(value) => {
            const manager = Managers.find((m) => m.id === value);
            setForm((prev) => ({ ...prev, manager }));
          }}
          style={{ color: "#225599" }}
        >
          <Picker.Item label="Sin asignar" value="null" />

          {Managers.map((manager) => (
            <Picker.Item
              label={manager.name}
              value={manager.id}
              key={manager.id}
            />
          ))}
        </Picker>
      </Surface>
    </Surface>
  );
}

function SearchBar({
  filter,
  setFilter,
  filters,
  toolsExpanded,
  setToolsExpanded,
  search,
  setSearch,
}) {
  return (
    <View
      className=""
      style={{
        flexDirection: "row",
        gap: 10,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <BasicInputs
        width="60%"
        value={search}
        onChangeText={(text) => setSearch(text)}
        leftIcon={<Icons.magnifyingGlass size={16} color={"#FFD700"} />}
        placeholder={"Ej: Taladro percutor"}
        label={"Buscar herramientas..."}
      />
 
      <Surface
        style={{
          borderRadius: 15,
          width: "40%",
          outlineColor: "#c7b75b",
          outlineWidth: 1,
          backgroundColor: "#fff",
        }}
      >
        <Picker
          selectedValue={filter}
          onValueChange={(value) => setFilter(value)}
          style={{ color: "#225599" }}
        >
          <Picker.Item label="Todas" value="all" />

          {filters.map((filter) => (
            <Picker.Item
              label={filter.label}
              value={filter.id}
              key={filter.id}
            />
          ))}
        </Picker>
      </Surface>
    </View>
  );
}

function ToolItem({ item, onChange }) {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 12,
        marginBottom: 10,
        elevation: 2,
        flexDirection: "row",
      }}
    >
      <View style={{ flex: 1, alignItems: "start" }}>
        <Text style={{ fontWeight: "bold", color: "#003366" }}>
          {item.name}
        </Text>

        <View style={{ flexDirection: "row", gap: 8, marginVertical: 5 }}>
          <Text
            style={{
              backgroundColor: "#e6f0ff",
              paddingHorizontal: 8,
              borderRadius: 8,
            }}
          >
            {item.type}
          </Text>

          <Text style={{ color: "#777" }}>Disponibles: {item.stock}</Text>
        </View>
      </View>

      {/* CONTADOR */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 10,
        }}
      >
        <QtyButton label="-" onPress={() => onChange(item.id, item.qty - 1)} />

        <View
          style={{
            borderWidth: 1,
            borderColor: "#E5C76B",
            borderRadius: 10,
            paddingHorizontal: 16,
            paddingVertical: 6,
          }}
        >
          <Text>{item.qty}</Text>
        </View>

        <QtyButton label="+" onPress={() => onChange(item.id, item.qty + 1)} />
      </View>
    </View>
  );
}

function QtyButton({ label, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "#FFD700",
        borderRadius: 10,
        padding: 10,
        minWidth: 36,
        alignItems: "center",
      }}
    >
      <Text style={{ fontWeight: "bold" }}>{label}</Text>
    </TouchableOpacity>
  );
}
