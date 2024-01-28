import { StyleSheet } from "react-native";
import { Colors, Fonts } from "shared/styles/theme";

export const styles = StyleSheet.create({
  errorText: {
    width: "80%",
    fontSize: 14,
    textAlign: "left",
    color: Colors.red,
    marginTop: 8,
  },

  lowerText: {
    color: Colors.text_gray,
    fontFamily: Fonts.regular,
    position: "absolute",
    bottom: 40,
  },
  signUp: {
    fontFamily: Fonts.bold,
    color: Colors.primary_green,
    marginLeft: 8,
  },
});
