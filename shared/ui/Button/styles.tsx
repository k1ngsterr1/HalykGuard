import { StyleSheet } from "react-native";
import { Colors, Fonts } from "shared/styles/theme";

export const styles = StyleSheet.create({
  regularButton: {
    width: 260,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: Colors.primary_green,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: Fonts.semiBold,
    color: "white",
  },
});
