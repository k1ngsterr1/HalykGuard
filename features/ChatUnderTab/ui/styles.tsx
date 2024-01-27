import { StyleSheet } from "react-native";
import { Colors, Fonts } from "shared/styles/theme";

export const styles = StyleSheet.create({
  chatLower: {
    width: "100%",
    height: 90,
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
    backgroundColor: "white",
  },
  lowerInput: {
    width: "80%",
    height: 50,
    padding: 4,
    backgroundColor: "#EDEDED",
    margin: "auto",
  },
  icon: {
    fontSize: 32,
    color: Colors.primary_green,
  },
});
