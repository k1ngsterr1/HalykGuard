import React from "react";
import { View } from "react-native";
import { globalStyles } from "shared/styles/global";
import { LoginContent } from "widgets/contents/Login";

export const Login = () => {
  return (
    <View style={globalStyles.container}>
      <LoginContent />
    </View>
  );
};
