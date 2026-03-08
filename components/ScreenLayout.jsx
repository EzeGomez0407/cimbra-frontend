import { StyleSheet, View } from "react-native";

export default function ScreenLayout({children}){
    return <View className="px-7">
        {children}
    </View>
}