import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import { UpperTabBack } from "features/UpperTabs/ui";
import { Fonts } from "shared/styles/theme";
import DataPicker from "shared/ui/DataPicker";
import { CustomButton } from "shared/ui/Button";
import PickerSex from "features/InsuranceForm/ui/PickerSex";
import PickerPayments from "features/InsuranceForm/ui/PickerPayments";
import PickerAmount from "features/InsuranceForm/ui/PickerAmount";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { Input } from "shared/ui/Input";

const CalculatorContent: React.FC = () => {
  const [step, setStep] = useState(0);
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [paymentFrequency, setPaymentFrequency] = useState("");
  const [insuranceAmount, setInsuranceAmount] = useState("");

  const navigation = useNavigation<any>();

  const getStepText = () => {
    let result = "";
    switch (step) {
      case 0:
        result = "Ваша дата рождения?";
        break;
      case 1:
        result = "Ваш пол?";
        break;
      case 2:
        result = "Периодичность уплаты страховых взносов";
        break;
      case 3:
        result = "Страховая сумма по ТТ	";
        break;
      case 4:
        result = "Вот последнее заполните :)";
        break;
    }
    return result;
  };
  const { control, handleSubmit, formState } = useForm();

  return (
    <SafeAreaView style={styles.container}>
      <UpperTabBack backNavigation="Home" headingTitle="Калькулятор" />
      <Text style={styles.title}>{getStepText()}</Text>
      {step == 0 ? (
        <>
          <DataPicker setDate={setDate} />
          <View style={{ alignItems: "center" }}>
            <CustomButton
              title="Дальше"
              onPress={() => {
                setStep(1);
              }}
            />
          </View>
        </>
      ) : (
        ""
      )}
      {step == 1 ? (
        <>
          <PickerSex setGender={setGender} />
          <View style={{ alignItems: "center" }}>
            <CustomButton
              title="Дальше"
              onPress={() => {
                setStep(2);
                console.log(gender);
              }}
            />
          </View>
        </>
      ) : (
        ""
      )}
      {step == 2 ? (
        <>
          <PickerPayments setPaymentFrequency={setPaymentFrequency} />
          <View style={{ alignItems: "center" }}>
            <CustomButton
              title="Дальше"
              onPress={() => {
                setStep(3);
                console.log(paymentFrequency);
              }}
            />
          </View>
        </>
      ) : (
        ""
      )}
      {step == 3 ? (
        <>
          <PickerAmount setInsuranceAmount={setInsuranceAmount} />
          <View style={{ alignItems: "center" }}>
            <CustomButton
              title="Дальше"
              onPress={() => {
                setStep(4);
                console.log(insuranceAmount);
              }}
            />
          </View>
        </>
      ) : (
        ""
      )}
      {step == 4 ? (
        <>
          <Controller
            control={control}
            name="f1"
            rules={{
              required: "Введите Срок действия страховой защиты (лет)",
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Срок действия страховой защиты (лет)"
                onChangeText={onChange}
                value={value}
                marginTop={32}
              />
            )}
          />
          <Controller
            control={control}
            name="f2"
            rules={{
              required: "Введите Период уплаты страховых взносов",
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Период уплаты страховых взносов (лет)"
                onChangeText={onChange}
                value={value}
                marginTop={32}
              />
            )}
          />
          <Controller
            control={control}
            name="f3"
            rules={{
              required: "Введите Страховую сумму",
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Страховая сумма"
                onChangeText={onChange}
                value={value}
                marginTop={32}
              />
            )}
          />
          <Controller
            control={control}
            name="f4"
            rules={{
              required: "Введите Страховую премию",
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Страховая премия"
                onChangeText={onChange}
                value={value}
                marginTop={32}
              />
            )}
          />

          <View style={{ alignItems: "center" }}>
            <CustomButton
              title="Подать заявку!"
              onPress={() => {
                navigation.navigation("Home");
              }}
            />
          </View>
        </>
      ) : (
        ""
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginRight: 20,
    marginLeft: 20,
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontFamily: Fonts.medium,
    marginTop: 105,
  },
});

export default CalculatorContent;
