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

export default function CreateWorks() {
  //estados para el formulario
  const [form, setForm] = useState({
    name: "",
    address: "",
    manager: null,
    tools: null,
  });

  const Managers = [
    { id: null, name: "Sin asignar" },
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
    { id: "all", label: "Todas" },
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
        <KeyboardLayout>
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

          <View className="gap-4 mx-3 mt-5  pb-12">
            <WorkForm
              form={form}
              setForm={setForm}
              expanded={expanded}
              handlePress={handlePress}
              Managers={Managers}
            />

            <View style={{ marginHorizontal: 5 }}>
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

              {filteredTools.length == 0 ? (
                <Text>No se encontraron herramientas</Text>
              ) : (
                filteredTools.map((item) => (
                  <ToolItem key={item.id} item={item} onChange={updateQty} />
                ))
              )}
            </View>
            {/* btn guardar obra */}
            <Portal>
              <FAB
                icon="plus"
                label="Crear obra"
                onPress={() => console.log("crear")}
                style={{
                  position: "absolute",
                  left: 15,
                  right: 15,
                  bottom: 70,
                  backgroundColor: "#FFD700",
                }}
                color="#003366"
              />
            </Portal>
          </View>
        </KeyboardLayout>
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
      <List.Section
        title="Encargado (opcional)"
        titleStyle={{
          color: "#003366",
          fontWeight: "500",
        }}
      >
        <List.Accordion
          style={{
            backgroundColor: "#fff",
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#c7b75b",
          }}
          contentStyle={{
            borderRadius: 12,
          }}
          title={form.manager?.name || "Sin asignar"}
          titleStyle={{
            color: "#003366",
            fontWeight: "500",
          }}
          left={(props) => (
            <View
              style={{
                padding: 8,
                borderRadius: 8,
                marginLeft: 10,
              }}
            >
              <Icons.user size={18} color="#FFD700" />
            </View>
          )}
          theme={{
            colors: {
              primary: "#FFD700", // flecha
            },
          }}
          expanded={expanded}
          onPress={handlePress}
        >
          {Managers.map((manager) => (
            <List.Item
              key={manager.id ?? "none"}
              title={manager.name}
              titleStyle={{ color: "#003366" }}
              style={{
                backgroundColor:
                  form.manager?.id === manager.id ? "#FFF6CC" : "#fefbf2",
              }}
              onPress={() => {
                setForm((prev) => ({ ...prev, manager }));
                handlePress();
              }}
            />
          ))}
        </List.Accordion>
      </List.Section>
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
      style={{
        flexDirection: "row",
        gap: 10,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <BasicInputs
        value={search}
        onChangeText={(text) => setSearch(text)}
        leftIcon={<Icons.magnifyingGlass size={16} color={"#FFD700"} />}
        placeholder={"Ej: Taladro percutor"}
        label={"Buscar herramientas..."}
        style={{ flex: 1, height: 50 }}
      />

      <Menu
        visible={toolsExpanded}
        onDismiss={() => setToolsExpanded(false)}
        anchor={
          <Button
            mode="outlined"
            icon={() => <Icons.filter size={16} color={"#FFD700"} />}
            style={{
              borderColor: "#c7b75b",
              backgroundColor: "#fff",
              borderRadius: 12,
              height: 50,
              justifyContent: "center",
              gap: 15,
            }}
            textColor="#003366"
            onPress={() => setToolsExpanded(true)}
          >
            {filter || "Filtrar"}
          </Button>
        }
        style={{
          marginTop: -50,
        }}
      >
        {filters.map((item) => (
          <Menu.Item
            key={item.id}
            onPress={() => {
              setFilter(item.label);
              setSearch("");
              setToolsExpanded(false);
            }}
            title={item.label}
          />
        ))}
      </Menu>
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
