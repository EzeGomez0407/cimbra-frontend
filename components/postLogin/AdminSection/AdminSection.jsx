import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../../Button/CustomButton";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
export default function AdminSection() {
  return (
    <View style={style.content}>
      <Text style={style.title}>
        ¿Sos dueño o administrador de una empresa?
      </Text>
      <Text style={style.text}>
        Si gestiona un negocio, registralo y empezá a administrarlo desde la
        app.
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
  );
}

const style = StyleSheet.create({
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
