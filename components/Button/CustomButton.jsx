import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Animated,
  TouchableOpacity,
} from "react-native";
import { useRef } from "react";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Button, Surface } from "react-native-paper";

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
  ...props
}) {
  //animaciones de boton
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = (e) => {
    Animated.spring(scale, {
      toValue: 0.96,
      friction: 6,
      tension: 100,
      useNativeDriver: true,
    }).start();

    // IMPORTANTE: Si el usuario pasó un onPressIn por fuera, lo ejecutamos también
    if (props.onPressIn) props.onPressIn(e);
  };

  const onPressOut = (e) => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 6,
      tension: 100,
      useNativeDriver: true,
    }).start();

    if (props.onPressOut) props.onPressOut(e);
  };

  return (
    <Pressable
      style={{ alignSelf: "stretch" }}
      {...props}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
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

/* Call To Action */
export function CallToActionButton({
  title,
  icon,
  bgBtn,
  onPress,
  iconTwo,
  ...props
}) {
  //animaciones de boton
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = (e) => {
    Animated.spring(scale, {
      toValue: 0.96,
      friction: 6,
      tension: 100,
      useNativeDriver: true,
    }).start();

    // IMPORTANTE: Si el usuario pasó un onPressIn por fuera, lo ejecutamos también
    if (props.onPressIn) props.onPressIn(e);
  };

  const onPressOut = (e) => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 6,
      tension: 100,
      useNativeDriver: true,
    }).start();

    if (props.onPressOut) props.onPressOut(e);
  };
  return (
    <Pressable
      {...props}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={[{ alignSelf: "stretch" }]}
    >
      <Animated.View
        style={[
          {
            backgroundColor: bgBtn,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: 15,
            borderRadius: 15,
            gap: 10,
            transform: [{ scale }],
          },
        ]}
      >
        {icon}
        <Text style={{ color: "#fff", fontWeight: "bold" }}>{title}</Text>
        {iconTwo}
      </Animated.View>
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

export function QuickCard({ title, icon, bg, color, ...props }) {
  return (
    <Surface
      style={{
        borderRadius: 15,
        backgroundColor: "white",
        width: "100%",
        alignItems: "center",
      }}
    >
      <Button
        {...props}
        mode="contained"
        textColor="black"
        buttonColor="white"
        contentStyle={{
          width: "100%",
          height: "100%",
        }}
        style={{ borderRadius: 15, width: "100%", height: "100%" }}
      >
        <View className="-translate-x-1 h-full w-full flex-column justify-center items-center gap-2">
          <View
            style={{ backgroundColor: bg, borderRadius: 15 }}
            className="self p-4"
          >
            {icon}
          </View>
          <Text className="text-[#225599] text-lg font-medium">{title}</Text>
        </View>
      </Button>
    </Surface>
  );
}
