import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Picker, PickerProps } from '@react-native-picker/picker';

interface PickerPaymentsProps {
  setPaymentFrequency: (paymentFrequency: string) => void;
}

const PickerPayments: React.FC<PickerPaymentsProps> = ({ setPaymentFrequency }) => {
  return (
    <View style={styles.container}>
      <Picker
        style={styles.picker}
        onValueChange={(itemValue: string, itemIndex: number) => setPaymentFrequency(itemValue)}
      >
        <Picker.Item label="Единовременно" value="1" />
        <Picker.Item label="Ежегодно" value="2" />
        <Picker.Item label="Раз в полгода" value="3" />
        <Picker.Item label="Ежеквартально" value="4" />
        <Picker.Item label="Ежемесячно" value="5" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginBottom: 250
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
  },
  picker: {
    width: '100%',
    height: 50,
  },
  selectedValue: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default PickerPayments;
