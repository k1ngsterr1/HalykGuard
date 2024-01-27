import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { KeyboardAvoidingView, Platform, TextInput, View } from "react-native";
import { styles } from "./styles";

export const ChatUnderTab = () => {
  return (
    <KeyboardAvoidingView
      style={styles.chatLower}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TextInput
        style={styles.lowerInput}
        placeholder="Напишите сообщение..."
      />
      <FontAwesomeIcon icon={faPaperPlane} size={32} style={styles.icon} />
    </KeyboardAvoidingView>
  );
};
