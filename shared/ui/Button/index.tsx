import { Button } from "react-native";

interface ButtonProps {
  title: string;
}

export const CustomButton: React.FC<ButtonProps> = ({ title }) => {
  return <Button title={title} />;
};
