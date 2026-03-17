import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import ScreenLayout from "../../components/ScreenLayout";
import { Avatar, Surface } from "react-native-paper";
import { router, Stack } from "expo-router";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import CustomButton from "../../components/Button/CustomButton";
import WelcomeCard from "../../components/employee/welcomeCard/WelcomeCard";
import Divider from "../../components/Divider/Divider";
import SafeLayout from "../../components/layout/SafeLayout";

export default function mandated() {
  return (
    <SafeLayout withHeader={true}>
      <ScreenLayout>
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: "#225599",
            },
            headerLeft: () => (
              <View className="my-3">
                <Text style={{ color: "#ffd700", fontSize: 16 }}>
                  Encargado
                </Text>
                <Text
                  style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}
                >
                  Constructora Demo
                </Text>
              </View>
            ),
            headerRight: () => (
              <Surface style={style.surface} elevation={4} className="my-3">
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

        <View style={style.sectionContent}>
          {/* tarjeta de vienvenida */}
          <WelcomeCard />
          {/* contenido de botones */}
          <View style={{ alignSelf: "strech", gap: 10 }}>
            <Text style={style.title}>Acceso rápido</Text>

            {/* btn obras */}
            <CustomButton
              bgIcon={"#003466"}
              bgBtn={"#FFF"}
              colorTitle={"#225599"}
              titleBtn={"Obras"}
              textBtn={"Ver obras asignandas"}
              icon={
                <MaterialCommunityIcons
                  name="office-building-outline"
                  size={20}
                  color="#ffd700"
                  style={style.icon}
                />
              }
            />

            {/* btn herramientas */}
            <CustomButton
              bgIcon={"#e5c60b"}
              bgBtn={"#FFF"}
              colorTitle={"#225599"}
              titleBtn={"Herramientas"}
              textBtn={"Ver inventario disponible"}
              icon={<Feather name="tool" size={24} color="#003466" />}
            />
          </View>

          {/* divider  */}
          <Divider text={"mi cuenta"} />

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
        <CustomButton
          onPress={() => router.push("/")}
          textBtnCenter={"Cerrar sesión"}
          btnCenter={true}
          iconBtnCenter={<Feather name="log-out" size={24} color="black" />}
        />
      </ScreenLayout>
    </SafeLayout>
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
  section: {
    flex: 1,
    alignContent: "space-between",
    justifyContent: "space-between",
  },
  sectionContent: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,

    gap: 20,
  },
  title: {
    fontSize: 16,
    color: "#225599",
  },
});
