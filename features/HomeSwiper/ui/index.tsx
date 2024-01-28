import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import HalykImg from "assets/images/home/advert.png";
import HalykImg2 from "assets/images/home/adverta2.png";
import HalykImg3 from "assets/images/home/adverta3.png";

const { width } = Dimensions.get("window");
const SLIDE_WIDTH = Math.round(width / 3) - 10;
const SLIDE_MARGIN = 10; // Margin for each side of a slide

const HomeCarousel = () => {
  const images = [HalykImg, HalykImg2, HalykImg3]; // Repeat or use different images

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item} style={styles.image} />
      </View>
    );
  };

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        data={images}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={SLIDE_WIDTH + SLIDE_MARGIN * 2} // Adjust for margins
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        loop={true}
        autoplay={false}
        contentContainerCustomStyle={styles.carouselContentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    width: "100%",
    marginTop: 0,
    marginBottom: 32,
  },
  carouselContentContainer: {
    paddingHorizontal: SLIDE_MARGIN / 2,
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
    width: SLIDE_WIDTH,
    marginHorizontal: SLIDE_MARGIN,
  },
  image: {
    width: "100%",
    height: 90,
    resizeMode: "contain",
  },
});

export default HomeCarousel;
