import React from "react";
import { View, Text } from "react-native";
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from "react-native-indicators";
import { styles } from "./styles";

export const Loader = () => {
  return (
    <View style={styles.loader}>
      <Text style={styles.text}>Halyk Guard</Text>
    </View>
  );
};
