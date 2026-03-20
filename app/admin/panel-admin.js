import { router, Stack } from "expo-router";

import { Text, View } from "react-native";

import CustomButton, {
  CTAButton,
  QuickCard,
} from "../../components/Button/CustomButton";

import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { StyleSheet } from "react-native";
import HeaderIcon from "../../components/Button/HeaderIcon";
import React from "react";
import KeyboardLayout from "../../components/layout/KeyboardLayout";

export default function panelAdmin() {
  const data = [
    { number: 5, label: "Obras activas" },
    { number: 12, label: "Empleados" },
    { number: 45, label: "Herramientas" },
  ];

  const activities = [
    { text: "Nueva obra registrada", time: "Hoy", color: "#FFD700" },
    { text: "2 empleados agregados", time: "Ayer", color: "#e6d89c" },
    { text: "Herramienta asignada", time: "2d", color: "#405c4e" },
  ];
  return (
     
      <KeyboardLayout>
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: "#225599",
            },
            headerLeft: () => (
              <View className="my-3">
                <Text
                  className="text-[#FFD700] text-xs mb-0.5"
                  style={{ color: "#ffd700", fontSize: 16 }}
                >
                  Bienvenido de vuelta 👋
                </Text>
                <Text
                  className="text-white"
                  style={{ fontSize: 24, fontWeight: "bold" }}
                >
                  Juan Rodríguez
                </Text>
              </View>
            ),
            headerRight: () => (
              <View style={{ flexDirection: "row", gap: 10, marginRight: 10 }}>
                {/* Notificaciones */}
                <HeaderIcon
                  icon={<Feather name="bell" size={20} color="#FFD700" />}
                  bgIcon={"#2c5c8a"}
                />

                {/* Configuración */}
                <HeaderIcon
                  icon={<Feather name="settings" size={20} color="#FFD700" />}
                  bgIcon={"#2c5c8a"}
                />
              </View>
            ),
          }}
        />

        <View className="flex-1 px-6 py-6 flex flex-col gap-5 overflow-y-auto">
          {/* Company card */}
          <View
            style={styles.companyCard}
            className="rounded-3xl p-5 shadow-lg"
          >
            <View style={{ flexDirection: "row", gap: 15 }} className="mb-4">
              <Text
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: "#225599",
                  borderRadius: 20,
                  textAlign: "center",
                  textAlignVertical: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="office-building-outline"
                  size={28}
                  color="#f9d72d"
                />
              </Text>
              <View style={{ flex: 1, alignItems: "flex-start" }}>
                <Text style={styles.text}>Tu empresa</Text>
                <Text style={styles.title}>Chorizo</Text>
                <Text style={styles.text}>Administrador</Text>
              </View>
            </View>

            <CTAButton
              title={"Ver panel completo"}
              icon={<AntDesign name="bar-chart" size={24} color="#fff" />}
              bgBtn={"#0a3a6b"}
              iconTwo={
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={24}
                  color={"#fff"}
                />
              }
            />
          </View>

          {/* Quick access */}
          <View style={{ color: "#003366", gap: 10 }}>
            <Text style={{ color: "#003366" }}>Acceso rápido</Text>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: 10,
              }}
            >
              <QuickCard
                title="Obras"
                icon={
                  <FontAwesome name="building-o" size={24} color="#ffd600" />
                }
                bg="#0a3a6b"
              />
              <QuickCard
                title="Empleados"
                icon={<Feather name="users" size={24} color="#fff" />}
                bg="#4b6658"
              />
              <QuickCard
                title="Herramientas"
                icon={<Feather name="tool" size={24} color="#0a3a6b" />}
                bg="#d6c27a"
              />
              <QuickCard
                title="Mi perfil"
                icon={
                  <FontAwesome5 name="user-circle" size={24} color="#0a3a6b" />
                }
                bg="#ffd600"
              />
            </View>
          </View>
          {/* Stats card */}
          <View style={styles.statsCard}>
            <Text style={styles.titleCard}>Resumen de hoy</Text>
            <View style={styles.rowCard}>
              {data.map((item, index) => (
                <React.Fragment key={index}>
                  <SummaryItem {...item} />
                  {index < data.length - 1 && <DividerVertical />}
                </React.Fragment>
              ))}
            </View>
          </View>

          {/* Recent activity */}
          <View style={styles.activityCard}>
            <Text style={styles.activitytitle}>Actividad reciente</Text>
            {activities.map((item, index) => (
              <ActivityItem key={index} {...item} />
            ))}
          </View>
        </View>

        {/* Bottom bar */}
        <CustomButton
          onPress={() => router.push("/")}
          textBtnCenter={"Cerrar sesión"}
          btnCenter={true}
          iconBtnCenter={<Feather name="log-out" size={24} color="black" />}
        />
      </KeyboardLayout>
    
  );
}

const styles = StyleSheet.create({
  companyCard: {
    backgroundColor: "#f9d72d",
  },
  titleCard: {
    color: "#fff",
  },
  title: {
    fontSize: 16,
    color: "#225599",
    textAlign: "center",
  },
  text: {
    fontSize: 12,
    textAlign: "center",
  },
  statsCard: {
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#e6d89c",
    padding: 20,
  },
  titleCard: {
    color: "#003366",
    fontWeight: "500",
    marginBottom: 15,
  },
  rowCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  activityCard: {
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#e6d89c",
    padding: 20,
    gap: 15,
  },
  activitytitle: {
    color: "#003366",
    fontWeight: "500",
  },
});

function SummaryItem({ number, label }) {
  return (
    <View style={stylesSumaryAndDivider.item}>
      <Text style={stylesSumaryAndDivider.number}>{number}</Text>
      <Text style={stylesSumaryAndDivider.label}>{label}</Text>
    </View>
  );
}

function DividerVertical() {
  return <View style={stylesSumaryAndDivider.divider} />;
}

const stylesSumaryAndDivider = {
  item: {
    flex: 1,
    alignItems: "center",
  },

  number: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#003366",
  },

  label: {
    fontSize: 12,
    color: "#555",
    marginTop: 5,
    textAlign: "center",
  },

  divider: {
    width: 1,
    height: 40,
    backgroundColor: "#e6d89c",
  },
};

function ActivityItem({ color, text, time }) {
  return (
    <View style={activityStyles.itemRow}>
      {/* izquierda */}
      <View style={activityStyles.left}>
        <View style={[activityStyles.dot, { backgroundColor: color }]} />
        <Text style={activityStyles.text}>{text}</Text>
      </View>

      {/* derecha */}
      <Text style={activityStyles.time}>{time}</Text>
    </View>
  );
}

const activityStyles = {
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },

  text: {
    color: "#003366",
    fontSize: 13,
  },

  time: {
    color: "#555",
    fontSize: 12,
  },
};
