import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Avatar, Surface } from "react-native-paper";
import { router, Stack } from "expo-router";

import ScreenLayout from "../../components/layout/ScreenLayout";

import Divider from "../../components/Divider/Divider";
import CustomButton from "../../components/Button/CustomButton";
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
                    style={{ backgroundColor: "#ffd700" }}
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
              bgIcon={"#c7b75b"}
              bgBtn={"#FFD700"}
              colorTitle={"#225599"}
              titleBtn={"Soy administrador"}
              textBtn={"Registrá o gestioná tu empresa"}
              icon={<Icons.building size={20} color="#225599" />}
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
            onPress={() => router.navigate("/user-profile")}
            bgIcon={"#225599"}
            bgBtn={"#FFF"}
            colorTitle={"#225599"}
            titleBtn={"Mi perfil"}
            textBtn={"Ver y editar tu información"}

icon={<Icons.userCircle size={20} color="#e5c60b" />}
          />
        </View>
        {/* btn cerrar sesión */}

        <CustomButton
          onPress={() => router.push("/")}
          textBtnCenter={"Cerrar sesión"}
          btnCenter={true}
          iconBtnCenter={<Icons.logOut size={24} color="black" />}
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
        <Icons.building size={20} color="#225599" style={styleCardInfo.icon} />
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
    borderColor: "#FFD700",
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
    borderColor: "#FFD700",
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
    backgroundColor: "#FFD700",
    marginRight: 8,
  },
});

/*===============Tarjeta de ingreso de clave de acceso de empleado============*/
import { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { Icons } from "../../assets/icons";

function CardEmployee() {
  const [key, setKey] = useState("");

  const handleLogin = () => {
    console.log(key);
    router.navigate("/employee/mandated");
  };

  return (
    <View style={cardEmployeeStyle.card}>
      <View style={cardEmployeeStyle.contentOne}>
        <Icons.key size={20} color="#fff" style={cardEmployeeStyle.icon} />
        <View style={cardEmployeeStyle.contentOneText}>
          <Text style={cardEmployeeStyle.title}>Unirse a una empresa</Text>
          <Text style={cardEmployeeStyle.text}>Ingresá tu clave de acceso</Text>
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
// Estilos de CardEmployee
const cardEmployeeStyle = StyleSheet.create({
  card: {
    borderWidth: 0.1,
    borderColor: "#FFD700",
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
