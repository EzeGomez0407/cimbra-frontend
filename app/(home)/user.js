import { Link } from "expo-router";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function User(){
    return <View className="mt-20">
        <Link href={"/"}>
            <Button mode="container" buttonColor="green" textColor="white">{"<"}Atras</Button>
        </Link>
        <Text className="mt-10">Ruta Usuario</Text>
    </View>
}