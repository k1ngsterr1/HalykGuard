import { StyleSheet } from "react-native";
import { Colors, Fonts } from "shared/styles/theme";

export const styles = StyleSheet.create({
  backButton: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    color: Colors.primary_green,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: Fonts.semiBold,
    color: Colors.primary_green,
    paddingLeft: 6,
  },
});
