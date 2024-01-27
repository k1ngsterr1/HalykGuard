import { TouchableOpacity, Text, ViewStyle } from "react-native";

import { styles } from "./styles";

interface ButtonProps {
  title: string;
  onPress: () => void;
  type?: string;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

export const CustomButton: React.FC<ButtonProps> = ({
  title,
  onPress,
  type,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}) => {
  const buttonStyle: ViewStyle = {
    ...styles.regularButton,
    marginTop: marginTop || 0,
    marginBottom: marginBottom || 0,
    marginLeft: marginLeft || 0,
    marginRight: marginRight || 0,
  };

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
