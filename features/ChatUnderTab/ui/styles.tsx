import { StyleSheet } from "react-native";
import { Colors, Fonts } from "shared/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1, // Use flex 1 to make the KeyboardAvoidingView fill the screen
    justifyContent: "flex-end", // Align children to the bottom
  },
  chatLower: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Use space-between to align TextInput and Icon
    backgroundColor: "white",
    padding: 10, // Add some padding around the input area
  },
  lowerInput: {
    height: 50,
    flex: 1, // TextInput should fill the available space
    marginRight: 10, // Add margin to the right of TextInput
    backgroundColor: "#EDEDED",
    borderRadius: 20, // Optional: round the corners of the TextInput
    padding: 15, // Padding inside the TextInput
  },
  icon: {
    color: Colors.primary_green,
  },
});
