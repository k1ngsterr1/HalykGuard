import { View, Text } from "react-native";
import { globalStyles } from "shared/styles/global";

interface HeadingProps {
  title: string;
}

export const MainHeading: React.FC<HeadingProps> = ({ title }) => {
  return <Text style={globalStyles.main_heading}>{title}</Text>;
};
