import { StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function CardInfo() {
  return (
    <View style={style.card}>
      <View style={style.contentOne}>
        <MaterialCommunityIcons
          name="office-building-outline"
          size={20}
          color="#225599"
          style={style.icon}
        />
        <View style={style.contentOneText}>
          <Text style={style.title}>Sin empresa asociada</Text>
          <Text style={style.text}>
            Todavía no estás registrado en ninguna empresa. ¡Configurá tu
            espacio para comenzar!
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingTop: 10,
        }}
      >
        <View style={style.contentTwo} />
        <Text style={style.text}>
          Podés unirte o registrar una empresa propia
        </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  card: {
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
    borderColor: "#f3d73e",
    borderBottomWidth: 1,
  },
  icon: {
    padding: 10,
    backgroundColor: "#ebeef3",
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
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#f3d73e",
    marginRight: 8,
  },
});
