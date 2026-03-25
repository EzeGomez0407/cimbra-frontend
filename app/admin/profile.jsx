import { router, Stack } from "expo-router";
import { Surface } from "react-native-paper";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";

import CustomButton from "../../components/Button/CustomButton";
import KeyboardLayout from "../../components/layout/KeyboardLayout";



import { Icons } from "../../assets/icons";

export default function Profile() {
  return (
    <KeyboardLayout>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        {/* contenido */}
        <View>
          <View
            style={{
              backgroundColor: "#0a3a6b",
              paddingTop: 60,
              paddingBottom: 30,
            }}
          >
            <ProfileHeader />
          </View>

          {/* Main */}
          <PersonalDataCard />
          <CompanyCard />
          <View style={{ paddingHorizontal: 20 }}>
            <EmployeesCard />
          </View>
        </View>

        {/* Bottom log out */}

        <CustomButton
          onPress={() => router.push("/")}
          textBtnCenter={"Cerrar sesión"}
          btnCenter={true}
          iconBtnCenter={<Icons.logOut size={24} color="black" />}
        />
      </View>
    </KeyboardLayout>
  );
}

/* Profile header and styles */
function ProfileHeader() {
  return (
    <View style={stylesProfileHeader.container}>
      {/* Avatar */}
      <View style={stylesProfileHeader.avatarContainer}>
        <Avatar.Text
          size={80}
          label="JR"
          style={{ backgroundColor: "#FFD600" }}
          labelStyle={{ color: "#003366" }}
        />

        {/* Botón cámara */}
        <TouchableOpacity style={stylesProfileHeader.camera}>
          <Icons.camera size={14} color="#003366" />
        </TouchableOpacity>
      </View>

      {/* Nombre */}
      <Text style={stylesProfileHeader.name}>Juan Rodríguez</Text>

      {/* Rol */}
      <Text style={stylesProfileHeader.role}>Administrador</Text>
    </View>
  );
}

const stylesProfileHeader = {
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },

  avatarContainer: {
    position: "relative",
    marginBottom: 10,
  },

  camera: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#FFD600",
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  role: {
    color: "#FFD600",
    fontSize: 14,
  },
};

/* Personal Data Card and styles */
function PersonalDataCard() {
  return (
    <View style={stylesUserInfo.container}>
      {/* Header */}
      <View style={stylesUserInfo.header}>
        <Text style={stylesUserInfo.title}>Datos personales</Text>

        <TouchableOpacity style={stylesUserInfo.editBtn}>
          <Icons.pencil size={14} color="#fff" />
          <Text style={stylesUserInfo.editText}>Editar</Text>
        </TouchableOpacity>
      </View>

      {/* Card */}
      <Surface style={stylesUserInfo.card} elevation={3}>
        {/* Item */}
        <View style={stylesUserInfo.item}>
          <View style={stylesUserInfo.iconBox}>
            <Icons.user size={18} color="#003366" />
          </View>

          <View style={stylesUserInfo.textContainer}>
            <Text style={stylesUserInfo.label}>Nombre completo</Text>
            <Text style={stylesUserInfo.value}>Juan Rodríguez</Text>
          </View>
        </View>

        {/* Divider */}
        <View style={stylesUserInfo.divider} />

        {/* Item */}
        <View style={stylesUserInfo.item}>
          <View style={stylesUserInfo.iconBox}>
            <Icons.mail size={18} color="#003366" />
          </View>

          <View style={stylesUserInfo.textContainer}>
            <Text style={stylesUserInfo.label}>Correo electrónico</Text>
            <Text style={stylesUserInfo.value}>admin@admin.com</Text>
          </View>
        </View>
      </Surface>
    </View>
  );
}

const stylesUserInfo = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#003366",
  },

  editBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#003366",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
  },

  editText: {
    color: "#fff",
    fontSize: 12,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#f2f4f7",
    alignItems: "center",
    justifyContent: "center",
  },

  textContainer: {
    flex: 1,
  },

  label: {
    fontSize: 12,
    color: "#6b7280",
  },

  value: {
    fontSize: 14,
    color: "#003366",
    fontWeight: "500",
  },

  divider: {
    height: 1,
    backgroundColor: "#e5e7eb",
    marginVertical: 12,
  },
});

/* company card and styles */

function CompanyCard() {
  return (
    <View style={stylesCardCompany.container}>
      <Text style={stylesCardCompany.sectionTitle}>Mi empresa</Text>

      <Surface style={stylesCardCompany.companyCard} elevation={4}>
        <View style={stylesCardCompany.row}>
          {/* Icono */}
          <View style={stylesCardCompany.iconBoxYellow}>
            <Icons.building size={20} color="#FFD700" />
          </View>

          {/* Texto */}
          <View style={{ flex: 1 }}>
            <Text style={stylesCardCompany.labelYellow}>Empresa</Text>
            <Text style={stylesCardCompany.companyName}>
              Ferreteria el pepe
            </Text>

            <View style={stylesCardCompany.locationRow}>
              <Icons.mapMarker size={14} color="#003366" />

              <Text style={stylesCardCompany.locationText}>
                Esquina Corrientes
              </Text>
            </View>
          </View>
        </View>
      </Surface>
    </View>
  );
}

const stylesCardCompany = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  companyCard: {
    backgroundColor: "#FFD600",
    borderRadius: 20,
    padding: 20,
  },

  iconBoxYellow: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: "#003366",
    alignItems: "center",
    justifyContent: "center",
  },

  labelYellow: {
    fontSize: 12,
    color: "#7a5c00",
  },

  companyName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#003366",
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 5,
  },

  locationText: {
    fontSize: 12,
    color: "#003366",
  },
});

/* Employees Card and styles  */
function EmployeesCard() {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <Surface style={stylesEmployess.employeeCard} elevation={3}>
        <View style={stylesEmployess.row}>
          {/* Icono */}
          <View style={stylesEmployess.iconBoxGreen}>
            <Icons.users size={20} color="#fff" />
          </View>

          {/* Texto */}
          <View style={{ flex: 1 }}>
            <Text style={stylesEmployess.employeeTitle}>
              Lista de empleados
            </Text>
            <Text style={stylesEmployess.employeeSubtitle}>
              Ver tu equipo de trabajo
            </Text>
          </View>

          {/* Badge */}
          <View style={stylesEmployess.badge}>
            <Text style={stylesEmployess.badgeText}>12</Text>
          </View>
        </View>
      </Surface>
    </TouchableOpacity>
  );
}

const stylesEmployess = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  employeeCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginTop: 15,
  },

  iconBoxGreen: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: "#3f5f4f",
    alignItems: "center",
    justifyContent: "center",
  },

  employeeTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#003366",
  },

  employeeSubtitle: {
    fontSize: 12,
    color: "#6b7280",
  },

  badge: {
    backgroundColor: "#f3efe0",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },

  badgeText: {
    fontWeight: "bold",
    color: "#003366",
  },
});
