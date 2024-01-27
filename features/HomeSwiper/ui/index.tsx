import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import HalykImg from "assets/images/home/advert.png";

const HomeSwiper = () => {
  return (
    <Swiper
      style={styles.wrapper}
      height={100}
      showsPagination={false}
      loop={false}
      showsButtons={false}
    >
        <Image source={HalykImg} style={styles.image} />
        <Image source={HalykImg} style={styles.image} />
        <Image source={HalykImg} style={styles.image} />
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 30,
    marginBottom: 30,
    height: 100,
  },
  slide: {
    marginRight: 20,
  },

  image: {
    width: 160,
    height: 90,
  },
});

export default HomeSwiper;
