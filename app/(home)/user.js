import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import ScreenLayout from "../../components/ScreenLayout";

import { Avatar, Surface } from "react-native-paper";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import Feather from "@expo/vector-icons/Feather";
import CardInfo from "../../components/postLogin/CardInfo/CardInfo";
import AdminSection from "../../components/postLogin/AdminSection/AdminSection";
import Divider from "../../components/Divider/Divider";
import CustomButton from "../../components/Button/CustomButton";
import { Stack } from "expo-router";

export default function PostLogin({ name }) {
  //saca iniciales de un nombre
  /* const initials = name
    .split(" ")
    .map((n) => n[0])
    .join(""); */

  return (
    <ScreenLayout>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#225599",
          },
          headerLeft: () => (
            <View style={{ paddingVertical: 40 }}>
              <Text style={{ color: "#ffd700", fontSize: 16 }}>
                Bienvenido 👋
              </Text>
              <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>
                Hola, {!name ? "Juan" : name}
              </Text>
            </View>
          ),
          headerRight: () => (
            <Surface style={style.surface} elevation={4}>
              <TouchableOpacity>
                <Avatar.Text
                  size={45}
                  label={"JR"}
                  style={{ backgroundColor: "#ffd600" }}
                />
              </TouchableOpacity>
            </Surface>
          ),
        }}
      />

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
    </ScreenLayout>
  );
}

const style = StyleSheet.create({
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
