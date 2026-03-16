import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import ScreenLayout from "../../components/ScreenLayout";
import { Avatar, Surface } from "react-native-paper";
import { Link, router, Stack } from "expo-router";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";

import AdminSection from "../../components/postLogin/AdminSection/AdminSection";

import CardEmployee from "../../components/postLogin/cardEmployee/CardEmployee";
import CustomButton from "../../components/Button/CustomButton";
import WelcomeCard from "../../components/employee/welcomeCard/WelcomeCard";

export default function mandated() {
  return (
    <ScrollView>
      <ScreenLayout>
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: "#225599",
            },
            headerLeft: () => (
              <View className="my-5 mt-14">
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
              <Surface
                style={style.surface}
                elevation={4}
                className="my-5 mt-14"
              >
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
          <WelcomeCard />
          <View>
            <Text>Acceso rápido</Text>
            <CustomButton
              bgIcon={"#003466"}
              bgBtn={"#FFF"}
              colorTitle={"#225599"}
              titleBtn={"Mi perfil"}
              textBtn={"Ver y editar tu información"}
              icon={
                <FontAwesome6 name="user-circle" size={20} color="#e5c60b" />
              }
            />
            <CustomButton
              bgIcon={"#003466"}
              bgBtn={"#FFF"}
              colorTitle={"#225599"}
              titleBtn={"Mi perfil"}
              textBtn={"Ver y editar tu información"}
              icon={
                <FontAwesome6 name="user-circle" size={20} color="#e5c60b" />
              }
            />
          </View>
        </View>
        <CustomButton
          onPress={() => router.push("/")}
          textBtnCenter={"Cerrar sesión"}
          btnCenter={true}
          iconBtnCenter={<Feather name="log-out" size={24} color="black" />}
        />
      </ScreenLayout>
    </ScrollView>
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
