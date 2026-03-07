import { Alert, StyleSheet, Text, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { Surface, TextInput } from 'react-native-paper';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Button } from 'react-native-paper';

import Svg, { Path } from 'react-native-svg';
import DividerCustomer from './DividerCustomer';
import { router } from 'expo-router';

const GoogleIcon = ({ size = 20 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <Path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <Path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      fill="#FBBC05"
    />
    <Path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z"
      fill="#EA4335"
    />
  </Svg>
);

export default function Register() {

  const onPressCreateAccount = ()=>{
    console.log("asdas");
    router.navigate('/user')
  }
  return (
    <>
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

      <Surface style={{borderRadius:15, shadowColor: "#c7b75b"}}>
          <Button 
            mode='contained'
            icon={()=><MaterialIcons name="arrow-forward-ios" size={16} color="#225599" />}
            buttonColor="#FFD700"
            textColor="#225599"
            labelStyle={{fontSize: 16}}
            contentStyle={{height:50, flexDirection: "row-reverse"}}
            style={{borderRadius:15}}
            onPress={onPressCreateAccount}
            >
            Crear Cuenta   
          </Button>
      </Surface>

      <DividerCustomer label="o continúa con"/>

      <Surface style={{borderRadius:15, shadowColor: "#c7b75b", marginTop: 10}}>
        <Button 
          mode='contained'
          icon={()=> <GoogleIcon size={22}/>}
          buttonColor="#fff"
          textColor="#225599"
          labelStyle={{fontSize: 16}}
          contentStyle={{height:50}}
          style={{borderRadius:15, borderWidth: 1, borderColor: "#c7b75b"}}
          >
            Registrarse con Google
        </Button>
      </Surface>

      <View style={[{...styles.viewTextTerminosUso, marginTop: 30}]}>
        <Text style={styles.viewTextTerminosUso.text}>¿Ya tienes cuenta? </Text>
        <Text style={styles.viewTextTerminosUso.links}>Inicia sesión</Text>
      </View>
    </>
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
  });