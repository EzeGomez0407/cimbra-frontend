import ScreenLayout from "../../components/layout/ScreenLayout";
import KeyboardLayout from "../../components/layout/KeyboardLayout";
import BasicInputs from "../../components/to-forms/BasicInputs";

import { Link, router, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import BasicMsgError from "../../components/to-forms/BasicMsgError";
import { Button, Surface, TextInput } from "react-native-paper";

import DividerCustomer from "../../components/DividerCustomer";
import { GoogleIcon } from "../../logos/logos";
import { Icons } from "../../assets/icons";

export default function Index() {
  return (
    <ScreenLayout>
      <Stack.Screen
        options={{
          headerLeft: () => (
            <Text className="text-[24px] font-semibold color-[#225599]">
              Bienvenido a Cimbra
            </Text>
          ),
        }}
      />
      <KeyboardLayout>
        <View>
          {/* ------HEADER DE PÁGINA-------- */}

          <View className=" my-8">
            <View style={styles.iconUser}>
              <Icons.user size={24} color="#FFD700" />
            </View>
            <Text className="text-[#225599] text-3xl">Iniciar sesión</Text>
            <Text className="text-[#225599] text-base">
              Ingresá tus credenciales para continuar
            </Text>
          </View>

          {/* ------------FORMULARIO DE INICIO DE SESION----------- */}
          <View className="mt-3xl gap-0">
            {/* INPUT EMAIL */}
            <BasicInputs
              label={"Correo electrónico"}
              leftIcon={<Icons.mail size={20} color="#FFD700" />}
              placeholder={"tucorreo@mail.com"}
            />
            <BasicMsgError msg={""} />

            {/* INPUT PASSWORD */}
            <BasicInputs
              label={"Contraseña"}
              leftIcon={<Icons.padlockClose size={20} color="#FFD700" />}
              placeholder={"Mínimo 8 caracteres"}
              right={<TextInput.Icon icon="eye" />}
            />
            <BasicMsgError msg={""} />
          </View>

          {/* --------BOTON DE INICIAR SESION------- */}

          <Text className="text-[#225599] text-base text-right mb-6 mt-2 underline">
            ¿Olvidaste tu contraseña?
          </Text>
          <View>
            <Surface style={{ borderRadius: 15, shadowColor: "#c7b75b" }}>
              <Button
                mode="contained"
                icon={() => <Icons.arrowRight size={18} color="#225599" />}
                buttonColor="#FFD700"
                textColor="#225599"
                labelStyle={{ fontSize: 16 }}
                contentStyle={{ height: 50, flexDirection: "row-reverse" }}
                style={{ borderRadius: 15 }}
                onPress={() => router.navigate("/admin/panel")}
              >
                Iniciar sesión
              </Button>
            </Surface>

            {/* ---------BOTON DE INICIO CON GOOGLE------- */}
            <DividerCustomer label="o continúa con" />

            <Surface
              style={{
                borderRadius: 15,
                shadowColor: "#c7b75b",
                marginTop: 10,
              }}
            >
              <Button
                mode="contained"
                icon={() => <GoogleIcon size={22} />}
                buttonColor="#fff"
                textColor="#225599"
                labelStyle={{ fontSize: 16 }}
                contentStyle={{ height: 50 }}
                style={{
                  borderRadius: 15,
                  borderWidth: 1,
                  borderColor: "#c7b75b",
                }}
                onPress={() => router.navigate("/admin/panel")}
              >
                Inicia con Google
              </Button>
            </Surface>
          </View>

          {/* -------IR A CREAR CUENTA------- */}
          <View style={[{ ...styles.viewTextTerminosUso, marginTop: 200 }]}>
            <Text style={styles.viewTextTerminosUso.text}>
              ¿No tenés cuenta?{" "}
            </Text>
            <Link href={"/register"}>
              <Text style={styles.viewTextTerminosUso.links}>Crear cuenta</Text>
            </Link>
          </View>
        </View>
      </KeyboardLayout>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  iconUser: {
    alignSelf: "flex-start",
    padding: 12,
    borderRadius: 17,
    backgroundColor: "#225599",
    marginBottom: 15,
    elevation: 10,
  },
  viewTextTerminosUso: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 20,
    color: "#908c9d",
    links: {
      textDecorationLine: "underline",
      textDecorationStyle: "solid",
      textDecorationColor: "#FFD700",
      color: "#33d",
      borderBottomWidth: 0.6,
      borderBottomColor: "#33d",
    },
    text: {
      color: "#908c9d",
    },
  },
});
