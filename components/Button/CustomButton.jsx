import { StyleSheet, Text, View, Pressable, Animated } from "react-native";
import { useRef } from "react";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function CustomButton({
  bgIcon,
  bgBtn,
  colorTitle,
  titleBtn,
  textBtn,
  icon,
  btnCenter,
  textBtnCenter,
  iconBtnCenter,
  onPress,
}) {
  //animaciones de boton
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.spring(scale, {
      toValue: 0.96,
      friction: 6,
      tension: 100,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 6,
      tension: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      style={{ alignSelf: "stretch" }}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
    >
      {btnCenter ? (
        <Animated.View style={[style.button, { transform: [{ scale }] }]}>
          <View style={style.contentBtnCenter}>
            {iconBtnCenter}
            <Text style={style.title}>{textBtnCenter}</Text>
          </View>
        </Animated.View>
      ) : (
        <Animated.View
          style={[
            style.button,
            { transform: [{ scale }], backgroundColor: bgBtn },
          ]}
        >
          <View style={style.left}>
            <View style={[style.iconBox, { backgroundColor: bgIcon }]}>
              {icon}
            </View>
            <View>
              <Text style={[style.title, { color: colorTitle }]}>
                {titleBtn}
              </Text>
              <Text style={style.subtitle}>{textBtn}</Text>
            </View>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={24}
            color={"#225599"}
          />
        </Animated.View>
      )}
    </Pressable>
  );
}

const style = StyleSheet.create({
  button: {
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 0.1,
    borderColor: "#f3d73e",
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconBox: {
    padding: 10,
    borderRadius: 15,
    marginRight: 12,
  },
  title: {
    fontSize: 16,
  },
  subtitle: {
    fontSize: 12,
    opacity: 0.7,
  },

  contentBtnCenter: {
    padding: 10,
    gap: 5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
