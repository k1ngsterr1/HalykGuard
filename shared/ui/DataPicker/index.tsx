import React from 'react';
import { View, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

interface DataPickerProps {
  setDate: (date: Date) => void;
}

const DataPicker: React.FC<DataPickerProps> = ({ setDate }) => {
  const [date, setDateState] = React.useState(new Date());

  const onChange = (event: Event, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setDateState(currentDate);
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <DateTimePicker
        value={date}
        mode="date"
        display="spinner"
        onChange={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DataPicker;
