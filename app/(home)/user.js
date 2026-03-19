import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Avatar, Surface } from "react-native-paper";
import { router, Stack } from "expo-router";

import ScreenLayout from "../../components/layout/ScreenLayout";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";

import Divider from "../../components/Divider/Divider";
import CustomButton from "../../components/Button/CustomButton";
import CardEmployee from "../../components/postLogin/cardEmployee/CardEmployee";

import KeyboardLayout from "../../components/layout/KeyboardLayout";

export default function PostLogin({ name }) {
  return (
    <ScreenLayout>
      <KeyboardLayout>
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: "#225599",
              color: "#fff",
            },
            headerLeft: () => (
              <View className="my-2">
                <Text className="text-[#ffd700] text-lg">Bienvenido 👋</Text>
                <Text className="text-white text-3xl font-bold">
                  Hola, {!name ? "Juan" : name}
                </Text>
              </View>
            ),
            headerRight: () => (
              <Surface style={style.surface} elevation={4} className="my-2">
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
          <View style={style.content}>
            <Text style={style.title}>
              ¿Sos dueño o administrador de una empresa?
            </Text>
            <Text style={style.text}>
              Si gestiona un negocio, registralo y empezá a administrarlo desde
              la app.
            </Text>

            <CustomButton
              onPress={() => router.navigate("/admin/create-company")}
              bgIcon={"#e5c60b"}
              bgBtn={"#FFD600"}
              colorTitle={"#225599"}
              titleBtn={"Soy administrador"}
              textBtn={"Registrá o gestioná tu empresa"}
              icon={
                <MaterialCommunityIcons
                  name="office-building-outline"
                  size={20}
                  color="#225599"
                />
              }
            />
          </View>

          {/* lineas separadoras */}
          <Divider text={"o si sos empleado"} />

          {/*Tarjeta de empleados */}
          <CardEmployee />

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
          onPress={() => router.push("/")}
          textBtnCenter={"Cerrar sesión"}
          btnCenter={true}
          iconBtnCenter={<Feather name="log-out" size={24} color="black" />}
        />
      </KeyboardLayout>
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
  content: {
    gap: 5,
    alignSelf: "strech",
    paddingVertical: 10,
  },
  title: {
    fontSize: 16,
    color: "#225599",
    textAlign: "center",
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 12,
    textAlign: "center",
    paddingHorizontal: 10,
    marginBottom: 15,
  },
});

function CardInfo() {
  return (
    <View style={styleCardInfo.card}>
      <View style={styleCardInfo.contentOne}>
        <MaterialCommunityIcons
          name="office-building-outline"
          size={20}
          color="#225599"
          style={styleCardInfo.icon}
        />
        <View style={styleCardInfo.contentOneText}>
          <Text style={styleCardInfo.title}>Sin empresa asociada</Text>
          <Text style={styleCardInfo.text}>
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
        <View style={styleCardInfo.contentTwo} />
        <Text style={styleCardInfo.text}>
          Podés unirte o registrar una empresa propia
        </Text>
      </View>
    </View>
  );
}

const styleCardInfo = StyleSheet.create({
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
