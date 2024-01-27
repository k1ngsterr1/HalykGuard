import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import HalykImg from "assets/images/home/advert.png";

const { width } = Dimensions.get("window");

const HomeSwiper = () => {
  return (
    <View style={styles.swiperContainer}>
      <Swiper
        style={styles.wrapper}
        showsPagination={false}
        loop={false}
        showsButtons={false}
      >
        {/* Each slide will be a single View containing three images */}
        <View style={styles.slide}>
          <Image source={HalykImg} style={styles.image} />
          <Image source={HalykImg} style={styles.image} />
          <Image source={HalykImg} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <Image source={HalykImg} style={styles.image} />
          <Image source={HalykImg} style={styles.image} />
          <Image source={HalykImg} style={styles.image} />
        </View>
        {/* Repeat the above View for each set of three images */}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  swiperContainer: {
    flex: 1,
    marginTop: 0,
    height: 200,
    borderWidth: 1,
    marginBottom: 32,
  },
  wrapper: {
    height: 200,
  },
  slide: {
    flex: 1,
    flexDirection: "row", // Layout images in a row
    justifyContent: "center", // Center the images
    alignItems: "center", // Align items in the center of the slide
  },
  image: {
    width: width / 3 - 10, // Divide the width by 3 and subtract some margin
    height: 90,
    marginHorizontal: 5, // Margin between images
  },
});

export default HomeSwiper;
