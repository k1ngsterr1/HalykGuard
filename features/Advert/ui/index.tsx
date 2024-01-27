import React from "react";
import { View, Image, StyleSheet, Dimensions, Text } from "react-native";
import Carousel from "react-native-snap-carousel";
import HalykImg from "assets/images/home/advert.png";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Fonts } from "shared/styles/theme";

const { width } = Dimensions.get("window");
const SLIDE_WIDTH = Math.round(width / 2) - 10;
const SLIDE_MARGIN = 10; // Margin for each side of a slide

const AdvertaHomeSwiper = () => {
  const images = [HalykImg, HalykImg, HalykImg]; // Repeat or use different images

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <View style={styles.slideItem}>
          <Image source={item} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.textTitle}>Halyk 1000</Text>
            <Text style={styles.textSupTitle}>ебать</Text>
          </View>
        </View>
        <View style={styles.slideItem}>
          <Image source={item} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.textTitle}>Halyk 1000</Text>
            <Text style={styles.textSupTitle}>ебать</Text>
          </View>
        </View>
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
        showsPagination={false}
        contentContainerCustomStyle={styles.carouselContentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    width: "100%",
    marginTop: 20,
    marginBottom: 32,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20
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
    width: 100,
    height: 40,
    resizeMode: "contain",
  },
  slideItem: {
    flexDirection: 'row',
    marginVertical: 5
  },
  textContainer: {
    flexDirection: 'column'
  }, 
  textTitle: {
    color: Colors.text_gray,
    fontFamily: Fonts.medium,
    fontSize: 16,
    fontStyle: "normal",
  },
  textSupTitle: {
    color: Colors.secondary_gray,
    fontFamily: Fonts.light,
    fontSize: 12,
    fontStyle: "normal",
  },
});

export default AdvertaHomeSwiper;
