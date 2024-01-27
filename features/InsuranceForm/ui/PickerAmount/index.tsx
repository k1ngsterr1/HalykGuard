import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Picker, PickerProps } from '@react-native-picker/picker';

interface PickerAmountProps {
  setInsuranceAmount: (insuranceAmount: string) => void;
}

const PickerAmount: React.FC<PickerAmountProps> = ({ setInsuranceAmount }) => {
  return (
    <View style={styles.container}>
      <Picker
        style={styles.picker}
        onValueChange={(itemValue: string, itemIndex: number) => setInsuranceAmount(itemValue)}
      >
        <Picker.Item label="200 000" value="200000" />
        <Picker.Item label="500 000" value="500000" />
        <Picker.Item label="700 000" value="700000" />
        <Picker.Item label="1 000 000" value="1000000" />
        <Picker.Item label="1 500 000" value="1500000" />
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

export default PickerAmount;
