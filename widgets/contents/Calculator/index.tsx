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
import axios from "axios";

const CalculatorContent: React.FC = () => {
  const [step, setStep] = useState(0);
  const [date, setDate] = useState("02.04.2006");
  const [gender, setGender] = useState("1");
  const [paymentFrequency, setPaymentFrequency] = useState("1");
  const [insuranceAmount, setInsuranceAmount] = useState("200000");

  const [resp, setResp] = useState({});
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
      case 5:
        result = "Ваш результат:";
        break;
    }
    return result;
  };
  const { control, handleSubmit } = useForm();
  const sendDataToServer = async (formData: any) => {
    const data = {
      date_of_birth: "04.02.2005",
      gender: gender,
      insurance_coverage_duration_years: formData.f1,
      premium_payment_period_years: formData.f2,
      premium_payment_frequency: paymentFrequency,
      tt_insurance_sum: insuranceAmount,
      total_insurance_sum: formData.f3,
      insurance_premium: formData.f4,
    };
    try {
      const url = "https://halyk-production.up.railway.app/api/v1/calculator/";
      const response = await axios.post(url, data);
      setResp(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Ошибка при отправке данных формы:", error);
    }
  };

  const formattedParams = Object.entries(resp).map(([key, value]) => (
    <Text key={key} style={styles.item}>
      {`${key}: ${value}`} {"\n"}
    </Text>
  ));

  const onSubmit = (data: any) => {
    sendDataToServer(data);
    setStep(5);
  };

  

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
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Срок действия страховой защиты (лет)"
                onChangeText={onChange}
                value={value}
                marginTop={40}
              />
            )}
          />
          <Controller
            control={control}
            name="f2"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Период уплаты страховых взносов (лет)"
                onChangeText={onChange}
                value={value}
                marginTop={40}
              />
            )}
          />
          <Controller
            control={control}
            name="f3"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Страховая сумма"
                onChangeText={onChange}
                value={value}
                marginTop={40}
              />
            )}
          />
          <Controller
            control={control}
            name="f4"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Страховая премия"
                onChangeText={onChange}
                value={value}
                marginTop={40}
              />
            )}
          />

          <View style={{ alignItems: "center" }}>
            <CustomButton
              marginTop={20}
              title="Подать заявку!"
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </>
      ) : (
        ""
      )}
      {step == 5 ? (
        <>
          <Text>{formattedParams}</Text>

          <View style={{ alignItems: "center" }}>
            <CustomButton
              marginTop={20}
              title="Получить страховку!"
              onPress={() => {
                navigation.navigate('Home')
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
  item: {
    marginBottom: 10,
    fontSize: 16,
  },
});

export default CalculatorContent;
