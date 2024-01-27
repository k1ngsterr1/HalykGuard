import { StyleSheet } from "react-native";
import { Fonts, Colors } from "./theme";

export const globalStyles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },

  primary_green: {
    color: Colors.primary_green,
  },
  secondary_gray: {
    color: Colors.secondary_gray,
  },
  secondary_text: {
    color: Colors.secondary_gray,
  },
  black_text: {
    color: Colors.text_gray,
  },
  light: {
    fontFamily: Fonts.light,
  },
  regular: {
    fontFamily: Fonts.regular,
  },
  medium: {
    fontFamily: Fonts.medium,
  },
  semibold: {
    fontFamily: Fonts.semiBold,
  },
  bold: {
    fontFamily: Fonts.bold,
  },

  mt2: {
    marginTop: 8,
  },
  mt4: {
    marginTop: 16,
  },
  mt8: {
    marginTop: 32,
  },
  mt16: {
    marginTop: 64,
  },

  mb2: {
    marginBottom: 8,
  },
  mb4: {
    marginBottom: 16,
  },
  mb8: {
    marginBottom: 32,
  },
  mb16: {
    marginBottom: 64,
  },

  text3: {
    fontSize: 12,
  },

  text4: {
    fontSize: 16,
  },

  text5: {
    fontSize: 20,
  },
  text8: {
    fontSize: 32,
  },

  textCenter: {
    textAlign: "center",
  },

  w85: {
    width: "85%",
  },

  main_heading: {
    fontSize: 24,
    fontFamily: Fonts.bold,
    color: "#282828",
    marginTop: 32,
  },
});
