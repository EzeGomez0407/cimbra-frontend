import { Text } from "react-native";
import { TextInput } from "react-native-paper";

// https://gemini.google.com/share/b96854eb556c
export default function BasicInputs({
  leftIcon,
  placeholder,
  label,
  ...props
}) {
  return (
    <TextInput
      {...props}
      mode="outlined"
      label={
        <Text className="flex-row items-center text-[#908c9d]">
          {leftIcon} {label}
        </Text>
      }
      placeholder={placeholder}
      placeholderTextColor="#9e9e9e"
      outlineColor="#c7b75b"
      activeOutlineColor="#FFD700"
      outlineStyle={{ borderRadius: 14 }}
      style={{ backgroundColor: "white", width: "100%" }}
    />
  );
}
