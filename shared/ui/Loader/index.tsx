import React from "react";
import { View, Text, SafeAreaView } from "react-native";
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
    <SafeAreaView style={styles.loader}>
      <View style={styles.contentContainer}>
        <Text style={styles.text}>Halyk Guard</Text>
        <View style={styles.indicatorContainer}>
          <PulseIndicator color="white" size={64} />
        </View>
      </View>
    </SafeAreaView>
  );
};
