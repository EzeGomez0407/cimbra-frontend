import { StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-paper";

export default function DividerCustomer({label}){
    return (
        <View style={styles.contentDivider}>
            <View style={styles.contentDivider.view}>
                <Text style={styles.contentDivider.text}>  {label}  </Text>
            </View>
            <Divider/>
        </View>
    )
}

const styles = StyleSheet.create({
    contentDivider: {
        marginVertical: 20,
        view: {
          flexDirection: "row",
          justifyContent: "center",
          transform: [{translateY: 7}],
          zIndex: 1500
        },
        text: {
          zIndex: 3000,
          backgroundColor: 'white',
          alignSelf: "flex-start",
          color: "#908c9d",
        }
    }
})