import React, { useState, useRef } from "react";
import {
  Animated,
  TextInputProps,
  TextInput,
  ViewStyle,
  View,
} from "react-native";
import { styles } from "./styles";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { InputProps } from "../Input";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export const PasswordInput: React.FC<InputProps> = ({
  placeholder,
  value,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const colorAnimation = useRef(new Animated.Value(0)).current;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(colorAnimation, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleBlur = () => {
    setIsFocused(false);
    Animated.timing(colorAnimation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const animatedColor = colorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [Colors.default_text, Colors.focused_text],
  });

  const inputStyle: ViewStyle = {
    ...styles.input,
    marginTop: marginTop || 0,
    marginBottom: marginBottom || 0,
    marginLeft: marginLeft || 0,
    marginRight: marginRight || 0,
    ...(isFocused ? styles.focusedInput : null),
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={inputStyle}
        placeholder={placeholder}
        value={value}
        secureTextEntry={!isPasswordVisible}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />
      <TouchableOpacity
        style={styles.eyeButton}
        onPress={togglePasswordVisibility}
        hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
      >
        <FontAwesomeIcon
          style={isFocused ? styles.eyeIconActive : styles.eyeIcon}
          icon={isPasswordVisible ? faEye : faEyeSlash}
        />
      </TouchableOpacity>
    </View>
  );
};
