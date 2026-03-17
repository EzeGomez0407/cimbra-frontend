import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";

export default function CardEmployee() {
  const [key, setKey] = useState("");

  const handleLogin = () => {
    console.log(key);
    router.navigate("/employee/mandated");
  };

  return (
    <View style={style.card}>
      <View style={style.contentOne}>
        <Feather name="key" size={20} color="#fff" style={style.icon} />
        <View style={style.contentOneText}>
          <Text style={style.title}>Unirse a una empresa</Text>
          <Text style={style.text}>Ingresá tu clave de acceso</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", gap: 10 }}>
        <TextInput
          placeholder="Clave de acceso"
          value={key}
          onChangeText={setKey}
          mode="outlined"
          placeholderTextColor="#9e9e9e"
          outlineColor="#c7b75b"
          activeOutlineColor="#FFD700"
          style={{ flex: 1 }}
          outlineStyle={{ borderRadius: 15 }}
        />

        <Button
          onPress={handleLogin}
          contentStyle={{ flexDirection: "row-reverse", height: 50 }}
          textColor={"#fff"}
          style={{
            borderRadius: 12,
            backgroundColor: "#225599",
            borderRadius: 15,
            justifyContent: "center",
          }}
          icon="arrow-right"
        >
          Entrar
        </Button>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  card: {
    flex: 1,
    borderWidth: 0.1,
    borderColor: "#f3d73e",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    elevation: 5,
    alignSelf: "stretch",
  },
  contentOne: {
    flexDirection: "row",
    gap: 15,
    paddingBottom: 15,
  },
  icon: {
    padding: 10,
    backgroundColor: "#405c4e",
    borderRadius: 15,
    height: 40,
    width: 40,
    textAlign: "center",
  },
  contentOneText: {
    flex: 1,
    gap: 5,
  },

  title: {
    fontSize: 16,
    color: "#225599",
    fontWeight: "light",
  },

  text: {
    fontSize: 12,
  },
  contentTwo: {
    flex: 1,
    gap: 5,
  },
});
