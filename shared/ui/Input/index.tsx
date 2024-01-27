import React, { useState, useRef } from "react";
import { Animated, TextInputProps, TextInput, ViewStyle } from "react-native";
import { styles } from "./styles";
import { Colors } from "react-native/Libraries/NewAppScreen";

export interface InputProps extends TextInputProps {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

export const Input: React.FC<InputProps> = ({
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
  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(colorAnimation, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
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
    <TextInput
      style={inputStyle}
      placeholder={placeholder}
      value={value}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...rest}
    />
  );
};
