import { Text, View, Button, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LoginSVG } from "assets/svg/Login";
import { CustomButton } from "shared/ui/Button";
import { globalStyles } from "shared/styles/global";

// import WelcomeSVG from "assets/login.svg";

export const OnboardingContent = () => {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={globalStyles.container}>
      <LoginSVG />
      <Text style={[globalStyles.bold, globalStyles.text5]}>
        Добро пожаловать в Halyk Guard
      </Text>
      <Text
        style={[
          globalStyles.regular,
          globalStyles.text3,
          globalStyles.black_text,
          globalStyles.textCenter,
          globalStyles.w85,
          globalStyles.mt2,
        ]}
      >
        Защитите свое завтра уже сегодня. С приложением Halyk Guard, ваша
        безопасность и спокойствие находятся в надежных руках. .
      </Text>
      <CustomButton
        title="Зарегистрироваться"
        marginTop={32}
        onPress={() => navigation.navigate("Home")}
      />
      <Text
        style={[
          globalStyles.bold,
          globalStyles.mt4,
          globalStyles.text4,
          globalStyles.primary_green,
        ]}
      >
        Войти
      </Text>
      <Text
        style={[
          globalStyles.bold,
          globalStyles.mt4,
          globalStyles.text4,
          globalStyles.primary_green,
        ]}
        onPress={() => navigation.navigate("Home")}
      >
        Для Диаса
      </Text>
    </SafeAreaView>
  );
};
