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
import { Loader } from "shared/ui/Loader";

const CalculatorContent: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
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
      insurance_coverage_duration_years: "10",
      premium_payment_period_years: "50",
      premium_payment_frequency: paymentFrequency,
      tt_insurance_sum: insuranceAmount,
      total_insurance_sum: "100000",
      insurance_premium: "500000",
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
    <>
      {step == 0 ? (
        <SafeAreaView style={styles.container}>
          <UpperTabBack backNavigation="Home" headingTitle="Калькулятор" />
          <Text style={styles.title}>{getStepText()}</Text>
          <DataPicker setDate={setDate} />
          <View style={{ alignItems: "center" }}>
            <CustomButton
              title="Дальше"
              onPress={() => {
                setStep(1);
              }}
            />
          </View>
        </SafeAreaView>
      ) : (
        ""
      )}
      {step == 1 ? (
        <SafeAreaView style={styles.container}>
          <UpperTabBack backNavigation="Home" headingTitle="Калькулятор" />
          <Text style={styles.title}>{getStepText()}</Text>
          <PickerSex setGender={setGender} />
          <View style={{ alignItems: "center" }}>
            <CustomButton
              title="Дальше"
              onPress={() => {
                setStep(2);
              }}
            />
          </View>
        </SafeAreaView>
      ) : (
        ""
      )}
      {step == 2 ? (
        <SafeAreaView style={styles.container}>
          <UpperTabBack backNavigation="Home" headingTitle="Калькулятор" />
          <Text style={styles.title}>{getStepText()}</Text>
          <PickerPayments setPaymentFrequency={setPaymentFrequency} />
          <View style={{ alignItems: "center" }}>
            <CustomButton
              title="Дальше"
              onPress={() => {
                setStep(3);
              }}
            />
          </View>
        </SafeAreaView>
      ) : (
        ""
      )}
      {step == 3 ? (
        <SafeAreaView style={styles.container}>
          <UpperTabBack backNavigation="Home" headingTitle="Калькулятор" />
          <Text style={styles.title}>{getStepText()}</Text>
          <PickerAmount setInsuranceAmount={setInsuranceAmount} />
          <View style={{ alignItems: "center" }}>
            <CustomButton
              marginTop={20}
              title="Подать заявку!"
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </SafeAreaView>
      ) : (
        ""
      )}
      {step == 5 ? (
        <>
          {Object.keys(formattedParams).length === 0 ? (
            <Loader />
          ) : (
            <SafeAreaView style={styles.container}>
              <UpperTabBack backNavigation="Home" headingTitle="Калькулятор" />
              <Text style={styles.title}>
                {getStepText()}
                <Text>{formattedParams}</Text>
              </Text>
            </SafeAreaView>
          )}
        </>
      ) : (
        ""
      )}
    </>
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
