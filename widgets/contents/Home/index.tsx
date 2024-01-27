import React from "react";
import { View, Image, Text, StyleSheet, SafeAreaView, TouchableOpacity, ImageSourcePropType } from "react-native";
import Ava from "assets/images/home/ava.png";
import HomeSwiper from "features/HomeSwiper/ui";
import NavPanel from "widgets/NavPanel";
import { NotificationSvg } from "assets/svg/Notification";



const HomeContent: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.detailsContainer}>
          <Image source={Ava} style={styles.image} />
          <View>
            <Text style={styles.name}>Привет Диас!</Text>
            <Text style={styles.time}>Вт. 20 апреля</Text>
          </View>
        </View>
        <NotificationSvg />
      </View>
      {/* <HomeSwiper /> */}
      <NavPanel/>
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
    fontFamily: "Open Sans",
    fontWeight: "600",
    marginBottom: 3,
  },
  time: {
    color: "#646464",
    fontFamily: "Open Sans",
    fontSize: 12,
    fontWeight: "600",
  },
  notificationContainer: {
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
  },
  notificationText: {
    fontSize: 16,
  },
});

export default HomeContent;
