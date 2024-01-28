import { StyleSheet } from "react-native";
import { Colors, Fonts } from "shared/styles/theme";

export const styles = StyleSheet.create({
  title: {
    color: Colors.text_gray,
    textAlign: "center",
    fontFamily: Fonts.semiBold,
    fontSize: 22,
    fontStyle: "normal",
    marginTop: 5,
    marginBottom: 30,
  },
  errorText: {
    width: "80%",
    fontSize: 14,
    textAlign: "left",
    color: Colors.red,
    marginTop: 8,
  },
});
