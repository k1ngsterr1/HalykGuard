import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import UnderTab from "features/UnderTab/ui";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCalculator,
  faChevronRight,
  faDoorOpen,
  faFileLines,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Colors, Fonts } from "shared/styles/theme";
import { faMedrt } from "@fortawesome/free-brands-svg-icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles/styles";
import { useLogOut } from "shared/lib/hooks/useLogout";

const ServicesContent: React.FC = () => {
  const navigation = useNavigation<any>();
  const { logOut } = useLogOut();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Сервисы</Text>
      <View style={styles.profileContainer}>
        <View style={styles.detailsContainer}>
          <View>
            <Text style={styles.name}>Диас А.</Text>
            <Text style={styles.time}>Настройка</Text>
          </View>
        </View>
        <FontAwesomeIcon icon={faChevronRight} />
      </View>
      <View style={styles.nav}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Insurance")}
            style={styles.buttonContainer}
          >
            <FontAwesomeIcon
              icon={faFileLines}
              style={{ color: Colors.primary_green, marginBottom: 20 }}
              size={30}
            />
            <View style={styles.col}>
              <Text style={styles.titleText}>Страхование</Text>
              <View style={styles.divider}></View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Calculator")}
            style={styles.buttonContainer}
          >
            <FontAwesomeIcon
              icon={faCalculator}
              style={{ color: Colors.primary_green, marginBottom: 20 }}
              size={30}
            />
            <View style={styles.col}>
              <Text style={styles.titleText}>Калькулятор</Text>
              <View style={styles.divider}></View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Med")}
            style={styles.buttonContainer}
          >
            <FontAwesomeIcon
              icon={faMedrt}
              style={{ color: Colors.primary_green, marginBottom: 20 }}
              size={30}
            />
            <View style={styles.col}>
              <Text style={styles.titleText}>Медецинские показатели</Text>
              <View style={styles.divider}></View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Info")}
            style={styles.buttonContainer}
          >
            <FontAwesomeIcon
              icon={faInfoCircle}
              style={{ color: Colors.primary_green, marginBottom: 20 }}
              size={30}
            />
            <View style={styles.col}>
              <Text style={styles.titleText}>Информация</Text>
              <View style={styles.divider}></View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.nav}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => logOut()}
            style={styles.buttonContainer}
          >
            <FontAwesomeIcon
              icon={faDoorOpen}
              style={{ color: "#FF0055" }}
              size={30}
            />
            <View style={styles.col}>
              <Text style={styles.leaves}>Выйти</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.copyright}>Develop by P2P corp. </Text>
      <UnderTab activeId={4} />
    </SafeAreaView>
  );
};

<<<<<<< HEAD
=======
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  title: {
    color: "black",
    textAlign: "center",
    fontFamily: Fonts.semiBold,
    fontSize: 22,
    fontStyle: "normal",
    marginTop: 5,
  },
  profileContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  detailsContainer: {
    flexDirection: "row",
  },
  name: {
    fontSize: 20,
    fontFamily: Fonts.bold,
    marginBottom: 3,
  },
  time: {
    color: Colors.secondary_gray,
    fontFamily: Fonts.medium,
    fontSize: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  nav: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 10,
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  divider: {
    paddingTop: 20,
    width: 270,
    borderBottomWidth: 1,
    borderColor: Colors.light_gray,
    marginLeft: 17,
  },
  titleText: {
    color: Colors.text_gray,
    fontFamily: Fonts.bold,
    fontSize: 16,
    fontStyle: "normal",
    marginLeft: 15,
  },
  col: {
    flexDirection: "column",
  },
  leaves: {
    color: Colors.text_gray,
    fontFamily: Fonts.bold,
    fontSize: 16,
    fontStyle: "normal",
    marginLeft: 15,
  },
  copyright: {
    color: Colors.secondary_gray,
    textAlign: "center",
    fontFamily: Fonts.italicMedium,
    fontSize: 12,
    fontStyle: "normal",
    marginTop: 20,
  },
});

>>>>>>> c90887a4cd56124aa7bbc2f467437aea87798736
export default ServicesContent;
