import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles/styles";

interface InsuranceCard {
  price: string;
}

export const InsuranceCard: React.FC<InsuranceCard> = ({ price }) => {
  return (
    <View style={styles.insuranceCard}>
      <Text style={styles.text}>Ваша основная страховка</Text>
      <Text style={styles.smallText}>Страховка на жизнь</Text>
      <Text style={styles.priceText}>{price}</Text>
    </View>
  );
};
