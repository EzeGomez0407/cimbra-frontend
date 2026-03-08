import "../global.css"
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

export default function RootLayout() {
  return (<>
        <Stack screenOptions={{
          headerStyle: {backgroundColor: "#FFD700"},
          headerTitle: "",
          headerLeft: ()=>{}
        }}/>
        <StatusBar style="auto" />
        </>
  );
}