import { StyleSheet } from "react-native";
import { Colors, Fonts } from "shared/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  title: {
    color: "black",
    textAlign: "center",
    fontFamily: Fonts.semiBold,
    fontSize: 22,
    fontStyle: "normal",
    marginTop: 5,
  },
  profileContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  detailsContainer: {
    flexDirection: "row",
  },
  name: {
    fontSize: 20,
    fontFamily: Fonts.bold,
    marginBottom: 3,
  },
  time: {
    color: Colors.secondary_gray,
    fontFamily: Fonts.medium,
    fontSize: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  nav: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 10,
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  divider: {
    paddingTop: 20,
    width: "240%",
    borderBottomWidth: 1,
    borderColor: Colors.light_gray,
    marginLeft: 17,
  },
  titleText: {
    color: Colors.text_gray,
    fontFamily: Fonts.bold,
    fontSize: 16,
    fontStyle: "normal",
    marginLeft: 15,
  },
  col: {
    flexDirection: "column",
  },
  leaves: {
    color: Colors.text_gray,
    fontFamily: Fonts.bold,
    fontSize: 16,
    fontStyle: "normal",
    marginLeft: 15,
  },
  copyright: {
    color: Colors.secondary_gray,
    textAlign: "center",
    fontFamily: Fonts.italicMedium,
    fontSize: 12,
    fontStyle: "normal",
    marginTop: 20,
  },
});
