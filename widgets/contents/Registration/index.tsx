import React from "react";
import { UpperTabBack } from "features/UpperTabs/ui";
import { SafeAreaView, View, Text } from "react-native";
import { useForm, UseFormReturn, Controller } from "react-hook-form";
import { globalStyles } from "shared/styles/global";
import { Input } from "shared/ui/Input";
import { MainHeading } from "shared/ui/MainHeading";
import { PasswordInput } from "shared/ui/PasswordInput";
import { styles } from "./styles/styles";
import { CustomButton } from "shared/ui/Button";
import useSignUp, { UserData } from "shared/lib/hooks/useSignUp";
import { setUsername } from "redux/slices/userSlice";

export const RegistrationContent = () => {
  const { control, handleSubmit, watch, formState } = useForm<UserData>();
  const { signUp } = useSignUp();
  const { errors } = formState;

  const onSubmit = (data: UserData) => {
    signUp(data);
  };

  const renderErrorMessage = (error: any) => {
    if (error) {
      return <Text style={styles.errorText}>{error.message || "Error"}</Text>;
    }
    return null;
  };

  const password = watch("password");

  return (
    <SafeAreaView style={globalStyles.container}>
      <UpperTabBack
        backNavigation="Onboarding"
        headingTitle="Создайте аккаунт"
      />
      <Controller
        control={control}
        name="firstname"
        rules={{ required: "Имя обязательное поле для ввода!" }}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} placeholder="Ваше имя" />
        )}
        defaultValue=""
      />
      {renderErrorMessage(errors.firstname)}
      <Controller
        control={control}
        name="lastname"
        rules={{ required: "Фамилия обязательное поле для ввода!" }}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            value={value}
            placeholder="Ваша фамилия"
            marginTop={32}
          />
        )}
      />
      {renderErrorMessage(errors.lastname)}
      <Controller
        control={control}
        name="email"
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
      {renderErrorMessage(errors.email)}
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
      <Controller
        control={control}
        name="confirm_password"
        rules={{
          required: "Подтверждение пароля обязательно!",
          validate: (value) => value === password || "Пароли не совпадают",
        }}
        render={({ field: { onChange, value } }) => (
          <PasswordInput
            placeholder="Подтвердите пароль"
            marginTop={32}
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {renderErrorMessage(errors.confirm_password)}
      <CustomButton
        title="Зарегистрироваться"
        onPress={handleSubmit(onSubmit)}
        marginTop={48}
      />
    </SafeAreaView>
  );
};
