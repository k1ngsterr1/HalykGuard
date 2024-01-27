import { Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const OnboardingContent = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={{ width: "100%", backgroundColor: "red" }}>
      <Text>Onboarding Screen</Text>
      <Button title="Домой" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};
