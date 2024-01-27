import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import UnderTab from "features/UnderTab/ui";


const ChatBotContent: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: 250}}></View>
      <UnderTab activeId={3}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginRight: 20,
    marginLeft: 20,
  },

});

export default ChatBotContent;
