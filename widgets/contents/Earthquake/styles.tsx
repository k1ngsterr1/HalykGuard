import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Fonts } from "shared/styles/theme";

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
        marginBottom: 30,
      },
      buttonsContainer: {
        flexDirection: "row",
        marginTop: 5,
      },
      buttonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginTop: 2,
        backgroundColor: Colors.white,
      },
      titleText: {
        color: Colors.text_gray,
        fontFamily: Fonts.bold,
        fontSize: 15,
        fontStyle: "normal",
        marginLeft: 15,
      },
      text: {
        color: Colors.secondary_gray,
        fontFamily: Fonts.medium,
        fontSize: 13,
        fontStyle: "normal",
        marginLeft: 15,
      },
      col: {
        flexDirection: "column",
      },
});
