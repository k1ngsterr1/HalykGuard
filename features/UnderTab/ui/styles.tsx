import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Fonts } from "shared/styles/theme";

export const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    position: "absolute",
    bottom: 0,
    width: "111%",
    borderTopColor: "#DDDDDD",
    left: -20,
  },
  tabInner: {
    paddingBottom: 25,
    paddingTop: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  tabButton: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    paddingVertical: 10,
  },
  activeTabButton: {
    color: Colors.primary_green,
  },
  tabText: {
    color: "black",
    textAlign: "center",
    fontFamily: Fonts.medium,
    fontSize: 10,
    fontStyle: "normal",
    marginTop: 5,
  },
});
