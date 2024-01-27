import { faMedrt } from "@fortawesome/free-brands-svg-icons";
import { faCalculator, faFileLines, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Colors, Fonts } from "shared/styles/theme";
import { useNavigation } from "@react-navigation/native";

const NavPanel = () => {
  const navigation = useNavigation<any>();
  return (
    <View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Insurance')} style={styles.buttonContainer}>
          <FontAwesomeIcon
            icon={faFileLines}
            style={{ color: Colors.primary_green}}
          />
          <View style={styles.buttonTextContainer}>
            <Text style={styles.titleText}>Страхование</Text>
            <Text style={styles.text}>Мой активные страховки</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Calculator')} style={styles.buttonContainer}>
          <FontAwesomeIcon
            icon={faCalculator}
            style={{ color: Colors.primary_green}}
          />
          <View style={styles.buttonTextContainer}>
            <Text style={styles.titleText}>Калькулятор</Text>
            <Text style={styles.text}>Узнайте как сосать хуй</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Med')} style={styles.buttonContainer}>
          <FontAwesomeIcon
            icon={faMedrt}
            style={{ color: Colors.primary_green}}
          />
          <View style={styles.buttonTextContainer}>
            <Text style={styles.titleText}>Медецинская</Text>
            <Text style={styles.text}>Ера чорт</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Info')} style={styles.buttonContainer}>
          <FontAwesomeIcon
            icon={faInfoCircle}
            style={{ color: Colors.primary_green}}
          />
          <View style={styles.buttonTextContainer}>
            <Text style={styles.titleText}>Информация</Text>
            <Text style={styles.text}>Краткая информация</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 5,
  },
  buttonContainer: {
    borderRadius: 12,
    backgroundColor: Colors.white,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    flex: 1,
    maxWidth: "48%",
  },
  buttonTextContainer: {
    flexDirection: "column",
    marginLeft: 10,
  },
  titleText: {
    color:Colors.text_gray,
    fontFamily: Fonts.medium,
    fontSize: 15,
    fontStyle: "normal",
  },
  text: {
    color: Colors.secondary_gray,
    fontFamily: Fonts.light,
    fontSize: 10,
    fontStyle: "normal",
  },
});

export default NavPanel;
