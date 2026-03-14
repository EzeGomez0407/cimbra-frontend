import "../global.css"
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (<>
        <Stack screenOptions={{
          headerStyle: {backgroundColor: "#FFD700"},
          headerTitle: "",
          headerLeft: ()=>{}
        }}/>
        <StatusBar backgroundColor="#FFD700" />
        </>
  );
}