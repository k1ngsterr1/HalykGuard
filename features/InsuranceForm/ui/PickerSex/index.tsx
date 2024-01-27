import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Picker, PickerProps } from '@react-native-picker/picker';

interface PickerSexProps {
  setGender: (gender: string) => void;
}

const PickerSex: React.FC<PickerSexProps> = ({ setGender }) => {
  return (
    <View style={styles.container}>
      <Picker
        style={styles.picker}
        onValueChange={(itemValue: string, itemIndex: number) => setGender(itemValue)}
      >
        <Picker.Item label="Муж" value="1" />
        <Picker.Item label="Жен" value="2" />
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

export default PickerSex;
