import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{gap:5, marginTop: 30}}> 
        <View style={styles.iconUser} >
        <Feather name="user" size={24} color="#FFD700" />
        </View>
        <Text style={{color: '#225599', fontSize: 30}}>Crear cuenta</Text>
        <Text style={{color: '#225599', fontSize: 15}}>Completa tus datos para registrarte</Text>
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
  }
});
