import { StyleSheet } from "react-native";
import { Colors, Fonts } from "shared/styles/theme";

export const styles = StyleSheet.create({
  loader: {
    flex: 1,
    backgroundColor: Colors.primary_green,
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  indicatorContainer: {
    marginTop: 20, // Adjust the margin as needed
    width: 80, // Set width for the indicator container
    height: 80, // Set height for the indicator container
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 48,
    color: Colors.white,
    fontFamily: Fonts.bold,
  },
});
