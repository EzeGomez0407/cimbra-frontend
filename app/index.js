import { Stack } from "expo-router";
import Register from "../components/Register";
import ScreenLayout from "../components/ScreenLayout";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index(){
    const insets = useSafeAreaInsets()
    return (
        <ScreenLayout>
                <Stack.Screen  

                    options={{
                        headerLeft: () => (<Text className="text-[24px] font-semibold color-[#225599]">
                            Bienvenido a Cimbra
                            </Text>)
                    }}
                />
                <Register />
            </ScreenLayout>
    )
}