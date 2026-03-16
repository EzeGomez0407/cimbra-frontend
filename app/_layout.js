import "../global.css"
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
        <Stack 
        screenOptions={{
          headerStyle: {backgroundColor: "#FFD700"},
            headerTitle: "",
            headerLeft: ()=>{}
          }}
          />
  );
}