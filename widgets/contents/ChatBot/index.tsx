import React from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import UnderTab from "features/UnderTab/ui";
import { globalStyles } from "shared/styles/global";
import { styles } from "./styles";
import { UpperTabBack } from "features/UpperTabs/ui";
import { ChatUnderTab } from "features/ChatUnderTab/ui";

export const ChatBotContent: React.FC = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <UpperTabBack headingTitle="Чат Бот" />
      <ChatUnderTab />
    </SafeAreaView>
  );
};
