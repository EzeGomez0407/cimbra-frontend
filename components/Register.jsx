import { ScrollView, StyleSheet, Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { Surface, TextInput } from "react-native-paper";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Button } from "react-native-paper";
import DividerCustomer from "./DividerCustomer";
import { router } from "expo-router";
import { GoogleIcon } from "../logos/logos";
import { useState } from "react";
import { validateUserRegister } from "../utils/validations";
import BasicInputs from "./to-forms/BasicInputs";
import BasicMsgError from "./to-forms/BasicMsgError";

export default function Register() {
  const [userData, setUserData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [errorDataUser, setErrorDataUser] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const onChange = (propName, value) => {
    setUserData((data) => ({
      ...data,
      [propName]: value,
    }));
  };

  const onPressCreateAccount = () => {
    // Para Desarrollo
    return router.navigate("/user");
    // ==========================
    setErrorDataUser({
      name: "",
      lastname: "",
      email: "",
      password: "",
    });
    const result = validateUserRegister(userData);

    if (result?.errors) {
      return result.errors.map((error) =>
        setErrorDataUser((err) => ({
          ...err,
          [error.name]: error.message,
        })),
      );
    } else {
      return router.navigate("/user");
    }
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ gap: 5, marginTop: 30 }}>
        <View style={styles.iconUser}>
          <Feather name="user" size={24} color="#FFD700" />
        </View>
        <Text className="text-[#225599] text-3xl">Crear cuenta</Text>
        <Text className="text-[#225599] text-base">
          Completa tus datos para registrarte
        </Text>
      </View>

      <View className="mt-3xl gap-0">
        {/* INPUT NAMES */}
        <BasicInputs
          onChangeText={(value) => onChange("name", value)}
          label={"Nombre"}
          leftIcon={<Feather name="user" size={20} color="#FFD700" />}
          placeholder={"Tu nombre"}
        />
        <BasicMsgError msg={errorDataUser.name} />

        {/* INPUT LASTNAMES */}
        <BasicInputs
          onChangeText={(value) => onChange("lastname", value)}
          label={"Apellido"}
          leftIcon={<Feather name="user" size={20} color="#FFD700" />}
          placeholder={"Tu apellido"}
        />
        <BasicMsgError msg={errorDataUser.lastname} />

        {/* INPUT EMAIL */}
        <BasicInputs
          onChangeText={(value) => onChange("email", value)}
          label={"Correo electrónico"}
          leftIcon={<Fontisto name="email" size={20} color="#FFD700" />}
          placeholder={"tucorreo@mail.com"}
        />
        <BasicMsgError msg={errorDataUser.email} />

        {/* INPUT PASSWORD */}
        <BasicInputs
          onChangeText={(value) => onChange("password", value)}
          label={"Contraseña"}
          leftIcon={<Feather name="lock" size={20} color="#FFD700" />}
          placeholder={"Mínimo 8 caracteres"}
          right={<TextInput.Icon icon="eye" />}
        />
        <BasicMsgError msg={errorDataUser.password} />
      </View>
      <View style={styles.viewTextTerminosUso}>
        <Text style={styles.viewTextTerminosUso.text}>
          Al registrarte aceptas nuestros{" "}
        </Text>
        <Text style={styles.viewTextTerminosUso.links}>Términos de uso </Text>
        <Text style={styles.viewTextTerminosUso.text}>y</Text>
        <Text style={styles.viewTextTerminosUso.links}>
          Política de privacidad
        </Text>
      </View>

      <Surface style={{ borderRadius: 15, shadowColor: "#c7b75b" }}>
        <Button
          mode="contained"
          icon={() => (
            <MaterialIcons name="arrow-forward-ios" size={16} color="#225599" />
          )}
          buttonColor="#FFD700"
          textColor="#225599"
          labelStyle={{ fontSize: 16 }}
          contentStyle={{ height: 50, flexDirection: "row-reverse" }}
          style={{ borderRadius: 15 }}
          onPress={onPressCreateAccount}
        >
          Crear Cuenta
        </Button>
      </Surface>

      <DividerCustomer label="o continúa con" />

      <Surface
        style={{ borderRadius: 15, shadowColor: "#c7b75b", marginTop: 10 }}
      >
        <Button
          mode="contained"
          icon={() => <GoogleIcon size={22} />}
          buttonColor="#fff"
          textColor="#225599"
          labelStyle={{ fontSize: 16 }}
          contentStyle={{ height: 50 }}
          style={{ borderRadius: 15, borderWidth: 1, borderColor: "#c7b75b" }}
          onPress={() => router.push("/first-login")}
        >
          Registrarse con Google
        </Button>
      </Surface>

      <View style={[{ ...styles.viewTextTerminosUso, marginTop: 20 }]}>
        <Text style={styles.viewTextTerminosUso.text}>¿Ya tienes cuenta? </Text>
        <Text style={styles.viewTextTerminosUso.links}>Inicia sesión</Text>
      </View>
    </ScrollView>
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
  labelInputs: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    color: "#908c9d",
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
