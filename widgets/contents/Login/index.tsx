import React from "react";
import { useNavigation } from "@react-navigation/native";
import { UpperTabBack } from "features/UpperTabs/ui";
import { Controller, useForm } from "react-hook-form";
import { SafeAreaView, Text } from "react-native";
import { globalStyles } from "shared/styles/global";
import { styles } from "./styles/styles";
import { Input } from "shared/ui/Input";
import { PasswordInput } from "shared/ui/PasswordInput";
import { CustomButton } from "shared/ui/Button";
import useSignIn, { LoginData } from "shared/lib/hooks/useLogin";

export const LoginContent = () => {
  const navigation = useNavigation<any>();
  const { control, handleSubmit, formState } = useForm<LoginData>();
  const { errors } = formState;
  const { signIn } = useSignIn();

  const onSubmit = (data: LoginData) => {
    signIn(data);
  };

  const renderErrorMessage = (error: any) => {
    if (error) {
      return <Text style={styles.errorText}>{error.message || "Error"}</Text>;
    }
    return null;
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <UpperTabBack
        backNavigation="Onboarding"
        headingTitle="Войдите в аккаунт"
      />
      <Controller
        control={control}
        name="username"
        rules={{
          required: "Почта обязательное поле для ввода!",
          pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Неверный формат электронной почты",
          },
        }}
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder="Email"
            onChangeText={onChange}
            value={value}
            marginTop={32}
          />
        )}
      />
      {renderErrorMessage(errors.username)}
      <Controller
        control={control}
        name="password"
        rules={{ required: "Пароль обязательное поле для ввода!" }}
        render={({ field: { onChange, value } }) => (
          <PasswordInput
            placeholder="Пароль"
            marginTop={32}
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {renderErrorMessage(errors.password)}
      <CustomButton
        title="Войти"
        onPress={handleSubmit(onSubmit)}
        marginTop={48}
      />
      <Text
        onPress={() => navigation.navigate("Registration")}
        style={styles.lowerText}
      >
        Еще не создали аккаунт?{" "}
        <Text style={styles.signUp}>Зарегистрироваться</Text>
      </Text>
    </SafeAreaView>
  );
};
