import { StyleSheet } from "react-native";
import { Colors, Fonts } from "shared/styles/theme";

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    width: "80%",
  },

  input: {
    width: "90%",
    flex: 1,
    fontSize: 16,
    zIndex: 0,
    paddingBottom: 6,
    paddingLeft: 8,
    borderBottomWidth: 2,
    borderBottomColor: Colors.light_gray,
  },

  focusedInput: {
    color: Colors.primary_green,
    borderBottomColor: Colors.primary_green,
  },

  eyeButton: {
    right: 8,
    zIndex: 100,
    position: "absolute",
  },

  eyeIcon: {
    zIndex: 100,
    fontSize: 34,
    padding: 10,
    color: Colors.text_gray,
  },

  eyeIconActive: {
    zIndex: 100,
    fontSize: 34,
    padding: 10,
    color: Colors.primary_green,
  },
});
