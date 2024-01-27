import React from "react";
import { View, Image, Text, StyleSheet, SafeAreaView, TouchableOpacity, ImageSourcePropType } from "react-native";
import { Colors, Fonts } from "shared/styles/theme";
import UnderTab from "features/UnderTab/ui";



const InsuranceContent: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: 250}}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  image: {
    width: 44,
    height: 44,
    borderRadius: 10,
    marginRight: 20,
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
    fontSize: 44
  }
});

export default InsuranceContent;
