import { UpperTabBack } from "features/UpperTabs/ui";
import React from "react";
import { SafeAreaView, View } from "react-native";
import { globalStyles } from "shared/styles/global";

export const RegistrationContent = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <UpperTabBack backNavigation="Onboarding" />
    </SafeAreaView>
  );
};
