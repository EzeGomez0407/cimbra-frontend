import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import ScreenLayout from "../../components/layout/ScreenLayout";
import { Avatar, Surface } from "react-native-paper";
import { router, Stack } from "expo-router";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import CustomButton from "../../components/Button/CustomButton";
import Divider from "../../components/Divider/Divider";

export default function mandated() {
  return (
    <ScreenLayout>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#225599",
          },
          headerLeft: () => (
            <View className="my-3">
              <Text style={{ color: "#ffd700", fontSize: 16 }}>Encargado</Text>
              <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>
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

      <View style={style.sectionContent} className="mt-5">
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

function WelcomeCard() {
  return (
    <View style={styleWelcomeCard.card}>
      <View style={styleWelcomeCard.contentOne}>
        <MaterialCommunityIcons
          name="office-building-outline"
          size={20}
          color="#ffd700"
          style={styleWelcomeCard.icon}
        />
        <View style={styleWelcomeCard.contentOneText}>
          <Text style={styleWelcomeCard.title}>¡Bienvenido al equipo!</Text>
          <Text style={styleWelcomeCard.text}>
            Tenés acceso a las obras y herramientas de Constructora Demo
          </Text>
        </View>
      </View>
    </View>
  );
}

const styleWelcomeCard = StyleSheet.create({
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
