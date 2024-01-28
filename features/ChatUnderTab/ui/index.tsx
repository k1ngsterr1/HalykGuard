import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  TextInput,
  View,
  StyleSheet,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Colors } from "shared/styles/theme"; // Make sure this path is correct
import { styles } from "./styles";

export const ChatUnderTab = () => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
    >
      <View style={styles.chatLower}>
        <TextInput
          style={styles.lowerInput}
          placeholder="Напишите сообщение..."
        />
        <FontAwesomeIcon icon={faPaperPlane} size={32} style={styles.icon} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatUnderTab;
