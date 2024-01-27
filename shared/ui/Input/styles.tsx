import { StyleSheet } from "react-native";
import { Colors, Fonts } from "shared/styles/theme";

export const styles = StyleSheet.create({
  input: {
    width: "80%",
    fontSize: 16,
    paddingBottom: 8,
    paddingLeft: 6,
    borderBottomWidth: 2,
    borderBottomColor: Colors.light_gray,
  },

  focusedInput: {
    color: Colors.primary_green,
    borderBottomColor: Colors.primary_green,
  },
});
