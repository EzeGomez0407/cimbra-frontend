import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { Divider, TextInput } from 'react-native-paper';
import Fontisto from '@expo/vector-icons/Fontisto';
import { Button } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ gap: 5, marginTop: 30 }}>
        <View style={styles.iconUser} >
          <Feather name="user" size={24} color="#FFD700" />
        </View>
        <Text style={{ color: '#225599', fontSize: 30 }}>Crear cuenta</Text>
        <Text style={{ color: '#225599', fontSize: 15 }}>Completa tus datos para registrarte</Text>
      </View>

      <View style={styles.form}>
        {/* INPUT NAMES */}
        <TextInput
          mode="outlined"
          label=<Text style={styles.labelInputs}><Feather name="user" size={20} color="#FFD700" />   Nombre</Text>
          placeholder="Tu nombre"
          placeholderTextColor="#9e9e9e"
          outlineColor="#c7b75b"
          activeOutlineColor="#FFD700"
          outlineStyle={{borderRadius: 14}}
          value=''
          onChangeText={() => { }}
        />

        {/* INPUT LASTNAMES */}
        <TextInput
          mode="outlined"
          label=<Text style={styles.labelInputs}><Feather name="user" size={20} color="#FFD700" />   Apellido</Text>
          placeholder="Tu apellido"
          placeholderTextColor="#9e9e9e"
          outlineColor="#c7b75b"
          activeOutlineColor="#FFD700"
          outlineStyle={{borderRadius: 14}}
          value=''
          onChangeText={() => { }}
        />

        {/* INPUT EMAIL */}
        <TextInput
          mode="outlined"
          label=<Text style={styles.labelInputs}><Fontisto name="email" size={20} color="#FFD700" />   Correo electrónico</Text>
          placeholder="tucorreo@mail.com"
          placeholderTextColor="#9e9e9e"
          outlineColor="#c7b75b"
          activeOutlineColor="#FFD700"
          outlineStyle={{borderRadius: 14}}
          value=''
          onChangeText={() => { }}
        />

        {/* INPUT PASSWORD */}
        <TextInput
          mode="outlined"
          label=<Text style={styles.labelInputs}><Feather name="lock" size={20} color="#FFD700" />   Contraseña</Text>
          placeholder="Mínimo 8 caracteres"
          placeholderTextColor="#9e9e9e"
          outlineColor="#c7b75b"
          activeOutlineColor="#FFD700"
          outlineStyle={{borderRadius: 14}}
          value=''
          onChangeText={() => { }}
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
        />
      </View>
      <View style={styles.viewTextTerminosUso}>
        <Text style={styles.viewTextTerminosUso.text}>Al registrarte aceptas nuestros </Text>
        <Text style={styles.viewTextTerminosUso.links}>Términos de uso </Text><Text style={styles.viewTextTerminosUso.text}>y</Text>
        <Text style={styles.viewTextTerminosUso.links}>Política de privacidad</Text>
      </View>

      <Button 
        mode='contained'
        buttonColor="#FFD700"
        textColor="#225599"
        labelStyle={{fontSize: 16}}
        contentStyle={{height:50}}
        style={{borderRadius:15}}
        >
        Crear Cuenta   {`>`}
      </Button>

      <View style={styles.contentDivider}>
        <View style={styles.contentDivider.view}>
          <Text style={styles.contentDivider.text}>  o continúa con  </Text>
        </View>
        <Divider/>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopWidth: 35,
    borderTopColor: '#FFD700',
    paddingTop: 10,
    paddingHorizontal: 30
  },
  iconUser: {
    alignSelf: 'flex-start',
    padding: 12,
    borderRadius: 17,
    backgroundColor: '#225599',
    marginBottom: 15,
    elevation: 10
  },
  form: {
    gap: 20,
    marginTop: 30
  },
  labelInputs: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    color: "#908c9d"
  },
  viewTextTerminosUso: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 20,
    color: "#908c9d",
    links: {
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        textDecorationColor: '#FFD700',
        color: '#33d',
        borderBottomWidth: 0.6,
        borderBottomColor: '#33d'
      },
    text: {
      color: "#908c9d",
    },
  },
  contentDivider: {
    marginVertical: 15,
    view: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      transform: [{translateY: 7}],
      zIndex: 1500
    },
    text: {
      zIndex: 2000,
      backgroundColor: 'white',
      alignSelf: "flex-start",
      color: "#908c9d",
    }
  }
});
