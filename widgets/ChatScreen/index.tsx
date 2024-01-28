import React, { useState } from "react";
import axios from "axios";
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import ChatUnderTab from "features/ChatUnderTab/ui";
import { UpperTabBack } from "features/UpperTabs/ui";
import { globalStyles } from "shared/styles/global";
import { useNavigation } from "@react-navigation/native";

const ChatScreen = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const navigation = useNavigation<any>();

  const sendMessage = async () => {
    if (message.trim()) {
      try {
        const response = await axios.post(
          `https://yourserver.com/api/v1/chat/?text=${encodeURIComponent(
            message
          )}`
        );

        // Assuming the response contains the chatbot's message
        const botMessage = response.data;

        // Update the messages state to include user and bot messages
        setMessages((prevMessages) => [
          ...prevMessages,
          { id: Math.random().toString(), text: message, sender: "user" },
          {
            id: Math.random().toString(),
            text: "Привет! Я ИИ помощник Halyk Life и готов помочь тебе! Что тебя интересует",
            sender: "bot",
          }, // Replace with the actual bot response
        ]);

        setMessage(""); // Clear the message input
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  const renderMessage = ({ item }) => {
    const isUserMessage = item.sender === "user";
    return (
      <View
        style={[
          styles.messageBubble,
          isUserMessage ? styles.userMessage : styles.botMessage,
        ]}
      >
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.upper}
        onPress={() => navigation.navigate("Home")}
      >
        <UpperTabBack backNavigation="Home" headingTitle="Чат Бот" />
      </TouchableOpacity>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMessage}
        inverted // Invert the order of the FlatList
        contentContainerStyle={styles.messagesContainer}
      />
      <ChatUnderTab
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  upper: {
    width: "90%",
    zIndex: 1000,
    marginLeft: 32,
  },
  messagesContainer: {
    width: "100%",
    padding: 10,
  },
  messageBubble: {
    padding: 15,
    right: 0,
    borderRadius: 20,
    marginVertical: 8,
    maxWidth: "75%",
    alignSelf: "flex-start",
  },
  userMessage: {
    position: "absolute",
    backgroundColor: "#007aff",
    alignSelf: "flex-end",
  },
  botMessage: {
    backgroundColor: "#e5e5ea",
    color: "black",
    position: "absolute",
    left: 0,
  },
  messageText: {
    color: "white",
  },
  inputContainer: {
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: "white",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "#ddd",
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 8,
    backgroundColor: "white",
  },
  sendButton: {
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ChatScreen;
