import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Dropdown({
  styleContent,
  style,
  iconLeft,
  iconRight,
  label,
  lists,
  list,
  setList,
  positionLeft,
  positionRigth,
}) {
  const [open, setOpen] = useState(false);

  return (
    <View style={styleContent} className="relative">
      <TouchableOpacity
        style={style}
        className="flex-row px-3 py-3 bg-white border border-[#E7D77B] rounded-xl text-[#003366] focus:outline-none focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/30"
        onPress={() => setOpen(!open)}
      >
        {iconLeft}
        <Text style={{ color: "#003366", fontWeight: "500", fontSize: 16 }}>
          {list === "todos" ? label : list}
        </Text>
        {iconRight}
      </TouchableOpacity>

      {open && (
        <View
          style={{
            position: "absolute",
            top: 45,
            left: positionLeft, //ajustar posicion cuando el contenedor padre sea chico a su contenido
            right: positionRigth,
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: "#E7D77B",
            borderRadius: 8,
            zIndex: 1000,
            elevation: 5, // Android
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setList("todos");
              setOpen(false);
            }}
          >
            <Text
              style={{
                padding: 10,
                color: "#003366",
                backgroundColor: list === "todos" ? "#FFF6CC" : "#fefbf2",
                fontSize: 16,
              }}
            >
              Filtrar Todos
            </Text>
          </TouchableOpacity>
          {lists.map((l, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setList(l);
                setOpen(false);
              }}
            >
              <Text
                style={{
                  padding: 10,
                  color: "#003366",
                  backgroundColor: list === l ? "#FFF6CC" : "#fefbf2",
                  fontSize: 16,
                }}
              >
                {l}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}
