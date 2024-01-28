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
import { TouchableOpacity } from "react-native-gesture-handler";
import { UpperTabBack } from "features/UpperTabs/ui";

interface ChatUnderProps {
  message: any;
  setMessage: any;
  sendMessage: () => void;
}

export const ChatUnderTab: React.FC<ChatUnderProps> = ({
  sendMessage,
  setMessage,
  message,
}) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={0}
    >
      <View style={styles.chatLower}>
        <TextInput
          value={message}
          onChangeText={setMessage}
          style={styles.lowerInput}
          placeholder="Напишите сообщение..."
          onSubmitEditing={sendMessage} //
        />
        <TouchableOpacity onPress={sendMessage}>
          <FontAwesomeIcon icon={faPaperPlane} size={32} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatUnderTab;
