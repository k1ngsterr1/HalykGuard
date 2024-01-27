import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { OnboardingContent } from "widgets/contents/Onboarding";
import { globalStyles } from "shared/styles/global";

export const Onboarding = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={globalStyles.container}>
      <OnboardingContent />
    </View>
  );
};
