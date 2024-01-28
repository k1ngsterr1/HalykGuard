import { StyleSheet } from "react-native";
import { Colors, Fonts } from "shared/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  profileContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  detailsContainer: {
    flexDirection: "row",
  },

  name: {
    fontSize: 18,
    fontFamily: Fonts.medium,
    marginBottom: 3,
  },
  time: {
    color: Colors.secondary_gray,
    fontFamily: Fonts.medium,
    fontSize: 12,
  },
  icon: {
    fontSize: 44,
  },
});
