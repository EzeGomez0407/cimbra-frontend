import { router, Stack } from "expo-router";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import React from "react";

import CustomButton, {
  CallToActionButton,
  QuickCard,
} from "../../components/Button/CustomButton";
import HeaderIcon from "../../components/Button/HeaderIcon";
import KeyboardLayout from "../../components/layout/KeyboardLayout";

import { Icons } from "../../assets/icons";
import ScreenLayout from "../../components/layout/ScreenLayout";

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
    <ScreenLayout>
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
                icon={<Icons.notification size={20} color="#FFD700" />}
                bgIcon={"#2c5c8a"}
              />

              {/* Configuración */}
              <HeaderIcon
                icon={<Icons.settings size={20} color="#FFD700" />}
                bgIcon={"#2c5c8a"}
              />
            </View>
          ),
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-1 px-6 py-6 flex flex-col gap-5 overflow-y-auto">
          {/* Company card */}
          <View
            style={styles.companyCard}
            className="rounded-3xl p-5 shadow-lg"
          >
            <View className="flex-row gap-5 items-center">
              <View className="items-center bg-[#225599] p-3 rounded-2xl">
                <Icons.building size={28} color="#f9d72d" />
              </View>
              <View style={{ flex: 1, alignItems: "flex-start" }}>
                <Text className="text-base text-placeholder">Tu empresa</Text>
                <Text className="text-3xl font-semibold text-blue-primary">
                  3Dverse
                </Text>
                <Text className="text-base text-placeholder">
                  Administrador
                </Text>
              </View>
            </View>
          </View>

          {/* Quick access */}
          <View className="text-blue-primary gap-3">
            <Text style={{ color: "#225599" }}>Acceso rápido</Text>
            <View className="flex flex-row flex-wrap justify-between gap-y-4">
              <View className="w-[48%] h-[170px]">
                <QuickCard
                  onPress={() => router.navigate("/admin/works-view")}
                  title="Obras"
                  icon={<Icons.building size={24} color="#ffd600" />}
                  bg="#225599"
                />
              </View>
              <View className="w-[48%] h-[170px]">
                <QuickCard
                  title="Empleados"
                  icon={<Icons.users size={24} color="#fff" />}
                  bg="#4b6658"
                />
              </View>
              <View className="w-[48%] h-[170px]">
                <QuickCard
                  onPress={() => router.navigate("/admin/tools-view")}
                  title="Herramientas"
                  icon={<Icons.frenchKey size={24} color="#225599" />}
                  bg="#d6c27a"
                />
              </View>
              <View className="w-[48%] h-[170px]">
                <QuickCard
                  onPress={() => router.navigate("/admin/profile")}
                  title="Mi perfil"
                  icon={<Icons.userCircle size={24} color="#225599" />}
                  bg="#ffd600"
                />
              </View>
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
          iconBtnCenter={<Icons.logOut size={24} color="black" />}
        />
      </ScrollView>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  companyCard: {
    backgroundColor: "#FFD700",
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
