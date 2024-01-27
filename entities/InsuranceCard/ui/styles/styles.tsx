import { StyleSheet } from "react-native";
import { Colors, Fonts } from "shared/styles/theme";

export const styles = StyleSheet.create({
  insuranceCard: {
    width: "100%",
    height: 130,
    borderRadius: 16,
    marginTop: 32,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  text: {
    fontSize: 19,
    fontFamily: Fonts.medium,
    color: Colors.text_gray,
  },
  priceText: {
    fontSize: 32,
    fontFamily: Fonts.bold,
    color: Colors.primary_green,
    marginTop: 12,
  },
  smallText: {
    fontSize: 12,
    marginTop: 4,
    fontFamily: Fonts.regular,
  },
});
