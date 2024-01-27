import { UpperTabBack } from "features/UpperTabs/ui";
import React from "react";
import { SafeAreaView, View } from "react-native";
import { Text } from "react-native-svg";
import { globalStyles } from "shared/styles/global";
import { Input } from "shared/ui/Input";
import { MainHeading } from "shared/ui/MainHeading";
import { PasswordInput } from "shared/ui/PasswordInput";
import { styles } from "./styles/styles";

export const RegistrationContent = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <UpperTabBack
        backNavigation="Onboarding"
        headingTitle="Создайте аккаунт"
      />
      <View style={styles.inputsContainer}></View>
      <Input placeholder="Ваше имя" />
      <Input placeholder="Ваша Фамилия" marginTop={32} />
      <Input placeholder="Email" marginTop={32} />
      <PasswordInput placeholder="Пароль" marginTop={32} />
    </SafeAreaView>
  );
};
