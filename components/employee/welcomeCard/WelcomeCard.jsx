import { StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function WelcomeCard() {
  return (
    <View style={style.card}>
      <View style={style.contentOne}>
        <MaterialCommunityIcons
          name="office-building-outline"
          size={20}
          color="#ffd700"
          style={style.icon}
        />
        <View style={style.contentOneText}>
          <Text style={style.title}>¡Bienvenido al equipo!</Text>
          <Text style={style.text}>
            Tenés acceso a las obras y herramientas de Constructora Demo
          </Text>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  card: {
    borderWidth: 0.1,
    borderColor: "#f3d73e",
    backgroundColor: "#ffd700",
    borderRadius: 20,
    padding: 20,
    elevation: 5,
    alignSelf: "stretch",
  },
  contentOne: {
    flexDirection: "row",
    gap: 15,
  },
  icon: {
    padding: 10,
    backgroundColor: "#225599",
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
});
