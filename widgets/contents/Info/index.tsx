import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import UnderTab from "features/UnderTab/ui";
import { globalStyles } from "shared/styles/global";

const InfoContent: React.FC = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={{ height: 250 }}></View>
    </SafeAreaView>
  );
};

export default InfoContent;
