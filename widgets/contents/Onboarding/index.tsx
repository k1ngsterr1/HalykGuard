import { Text, View, Button, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LoginSVG } from "assets/svg/Login";

// import WelcomeSVG from "assets/login.svg";

export const OnboardingContent = () => {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView>
      <LoginSVG />
      <Text>Onboarding Screen</Text>
      <Button title="Домой" onPress={() => navigation.navigate("Home")} />
    </SafeAreaView>
  );
};
