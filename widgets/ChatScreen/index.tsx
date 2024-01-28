import React, { useState, useEffect } from "react";
import { View, TextInput, Button, FlatList, Text } from "react-native";
import axios from "axios";
import ChatUnderTab from "features/ChatUnderTab/ui";

const ChatScreen = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // Call fetchMessages when the component mounts
  useEffect(() => {}, []);

  // Function to handle sending messages
  const sendMessage = async () => {
    if (message.trim()) {
      try {
        const response = await axios.post(
          "https://halyk-production.up.railway.app/api/v1/chat/",
          {
            message: message,
            // Add other message properties if needed, like sender ID, timestamp, etc.
          }
        );
        setMessage("");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <View>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.message}</Text>
            {/* Render other message properties if needed */}
          </View>
        )}
      />
      {/* Input to type the message */}
      <ChatUnderTab />
    </View>
  );
};

export default ChatScreen;
