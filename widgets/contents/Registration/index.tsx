import React from "react";
import { UpperTabBack } from "features/UpperTabs/ui";
import { SafeAreaView, View, Text } from "react-native";
import { useForm, UseFormReturn, Controller } from "react-hook-form";
import { globalStyles } from "shared/styles/global";
import { Input } from "shared/ui/Input";
import { MainHeading } from "shared/ui/MainHeading";
import { PasswordInput } from "shared/ui/PasswordInput";
import { styles } from "./styles/styles";

export const RegistrationContent = () => {
  const { control, handleSubmit, formState } = useForm();
  const { errors } = formState;

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
        headingTitle="Создайте аккаунт"
      />
      <Controller
        control={control}
        name="firstName"
        rules={{ required: "Имя обязательно поле для ввода!" }}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} placeholder="Ваше имя" />
        )}
        defaultValue=""
      />
      {renderErrorMessage(errors.firstName)}

      <Input placeholder="Ваша Фамилия" marginTop={32} />
      <Input placeholder="Email" marginTop={32} />
      <PasswordInput placeholder="Пароль" marginTop={32} />
    </SafeAreaView>
  );
};
