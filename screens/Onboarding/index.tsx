import React from "react";
import { Button, Image, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { OnboardingContent } from "widgets/contents/Onboarding";

export const Onboarding = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <OnboardingContent />
    </View>
  );
};
