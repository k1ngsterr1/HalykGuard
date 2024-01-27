import React from "react";
import { View } from "react-native";
import { Text } from "react-native-svg";
import { globalStyles } from "shared/styles/global";
import { RegistrationContent } from "widgets/contents/Registration";

export const Registration = () => {
  return (
    <View style={globalStyles.container}>
      <RegistrationContent />
    </View>
  );
};
