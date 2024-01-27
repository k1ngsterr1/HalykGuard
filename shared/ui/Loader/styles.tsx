import { StyleSheet } from "react-native";
import { Colors, Fonts } from "shared/styles/theme";

export const styles = StyleSheet.create({
  loader: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: Colors.primary_green,
    position: "absolute",
  },
  text: {
    fontSize: 48,
    color: Colors.white,
    fontFamily: Fonts.bold,
  },
});
