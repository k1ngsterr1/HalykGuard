import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import HomeSwiper from "features/HomeSwiper/ui";
import NavPanel from "widgets/NavPanel";
import { Colors, Fonts } from "shared/styles/theme";
import HomeAdvertSwipe from "features/Advert/ui";
import UnderTab from "features/UnderTab/ui";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { styles } from "./styles/styles";
import { InsuranceCard } from "entities/InsuranceCard/ui";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeContent: React.FC = () => {
  const today = new Date();
  const firstName = useSelector((state: RootState) => state.firstName.username);

  const formatter = new Intl.DateTimeFormat("ru-RU", {
    weekday: "short",
    day: "numeric",
    month: "long",
  });

  const formattedDate = formatter.format(today);


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.detailsContainer}>
          <View>
            <Text style={styles.name}>{`Привет  ${firstName}!`}</Text>
            <Text style={styles.time}>{formattedDate}</Text>
          </View>
        </View>
        <FontAwesomeIcon size={22} color={Colors.primary_green} icon={faBell} />
      </View>
      <InsuranceCard price="1.000.000₸" />
      <HomeSwiper />
      <NavPanel />
      <HomeAdvertSwipe />
      <View style={{ height: 250 }}></View>
      <UnderTab activeId={1} />
    </SafeAreaView>
  );
};

export default HomeContent;
