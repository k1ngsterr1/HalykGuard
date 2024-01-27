import React from "react";
import { View, Image, Text, StyleSheet, SafeAreaView, TouchableOpacity, ImageSourcePropType } from "react-native";
import HomeSwiper from "features/HomeSwiper/ui";
import NavPanel from "widgets/NavPanel";
import { Colors, Fonts } from "shared/styles/theme";
import HomeAdvertSwipe from "features/Advert/ui";
import UnderTab from "features/UnderTab/ui";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";


const HomeContent: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.detailsContainer}>
          <View>
            <Text style={styles.name}>Привет Диас!</Text>
            <Text style={styles.time}>Вт. 20 апреля</Text>
          </View>
        </View>
        <FontAwesomeIcon size={22} icon={faBell}/>
      </View>
      <HomeSwiper />
      <NavPanel/>
      <HomeAdvertSwipe/>
      <View style={{height: 250}}></View>
      <UnderTab activeId={1}/>
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

export default HomeContent;
