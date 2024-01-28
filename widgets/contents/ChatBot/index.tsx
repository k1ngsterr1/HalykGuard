import React from "react";
import { View, StyleSheet, SafeAreaView, Text, Touchable } from "react-native";
import UnderTab from "features/UnderTab/ui";
import { globalStyles } from "shared/styles/global";
import { styles } from "./styles";
import { UpperTabBack } from "features/UpperTabs/ui";
import { ChatUnderTab } from "features/ChatUnderTab/ui";
import ChatScreen from "widgets/ChatScreen";
import { TouchableOpacity } from "react-native-gesture-handler";

export const ChatBotContent: React.FC = () => {
  return (
    <View style={globalStyles.container}>
      <ChatScreen />
    </View>
  );
};
