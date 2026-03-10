import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { Avatar, Surface } from "react-native-paper";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import CustomButton from "../Button/CustomButton";
import Divider from "../Divider/Divider";
import AdminSection from "./AdminSection/AdminSection";
import CardInfo from "./CardInfo/CardInfo";

import Feather from "@expo/vector-icons/Feather";

export default function PostLogin({ name }) {
  //saca iniciales de un nombre
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <View style={style.containerOne}>
      {/* header */}
      <View style={style.sectionHeader}>
        <View>
          <Text style={{ color: "#ffd700", fontSize: 16 }}>Bienvenido 👋</Text>
          <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>
            Hola, {!name ? "Juan" : name}
          </Text>
        </View>
        <Surface style={style.surface} elevation={4}>
          <TouchableOpacity>
            <Avatar.Text
              size={45}
              label={!initials ? "JR" : initials}
              style={{ backgroundColor: "#ffd600" }}
            />
          </TouchableOpacity>
        </Surface>
      </View>
      {/* Content */}
      <View style={style.sectionContent}>
        {/* Info Card  */}
        <CardInfo />

        {/* Admin Section */}
        <AdminSection />

        {/* lineas separadoras */}
        <Divider text={"también podés"} />

        {/*user button */}
        <CustomButton
          bgIcon={"#003466"}
          bgBtn={"#FFF"}
          colorTitle={"#225599"}
          titleBtn={"Mi perfil"}
          textBtn={"Ver y editar tu información"}
          icon={<FontAwesome6 name="user-circle" size={20} color="#e5c60b" />}
        />
      </View>
      {/* btn cerrar sesión */}
      <CustomButton
        textBtnCenter={"Cerrar sesión"}
        btnCenter={true}
        iconBtnCenter={<Feather name="log-out" size={24} color="black" />}
      />
    </View>
  );
}

const style = StyleSheet.create({
  containerOne: {
    flex: 1,
    backgroundColor: "#faf7f0",
  },

  sectionHeader: {
    flexDirection: "row",
    backgroundColor: "#225599",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingVertical: 45,
    alignContent: "center",
  },
  surface: {
    borderRadius: 100,
    height: 45,
    width: 45,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  sectionContent: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    gap: 20,
  },
});
