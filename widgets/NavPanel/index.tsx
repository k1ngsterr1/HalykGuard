import { InfoSvg } from "assets/svg/Info";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Fonts } from "shared/styles/theme";

const NavPanel = () => {
  return (
    <View>
        <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.buttonContainer}>
        <InfoSvg/>
        <View style={styles.buttonTextContainer}>
          <Text style={styles.titleText}>Информация</Text>
          <Text style={styles.text}>Краткая информация о продукте</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer}>
        <InfoSvg/>
        <View style={styles.buttonTextContainer}>
          <Text style={styles.titleText}>Информация</Text>
          <Text style={styles.text}>Краткая информация о продукте</Text>
        </View>
      </TouchableOpacity>
    </View>
        <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.buttonContainer}>
        <InfoSvg/>
        <View style={styles.buttonTextContainer}>
          <Text style={styles.titleText}>Информация</Text>
          <Text style={styles.text}>Краткая информация о продукте</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer}>
        <InfoSvg/>
        <View style={styles.buttonTextContainer}>
          <Text style={styles.titleText}>Информация</Text>
          <Text style={styles.text}>Краткая информация о продукте</Text>
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
    backgroundColor: "#FFFFFF",
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginVertical: 5,
    flex: 1,
    maxWidth: "48%",
    
  },
  buttonTextContainer: {
    flexDirection: "column",
    paddingLeft: 7
  },
  titleText: {
    color: '#01B071',
    fontFamily: Fonts.medium, 
    fontSize: 12, 
    fontStyle: 'normal',  
  },
  text: {
    color: '#404040', 
    fontFamily: Fonts.light, 
    fontSize: 9,
    fontStyle: 'normal', 
  },
});

export default NavPanel;
