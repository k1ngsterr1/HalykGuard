import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Colors, Fonts } from "shared/styles/theme";
import { useNavigation } from "@react-navigation/native";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBars,
  faComment,
  faEarthAsia,
  faFileLines,
  faHomeAlt,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  activeId: number;
}

const UnderTab: React.FC<Props> = ({ activeId }) => {
  const navigation = useNavigation<any>();

  const renderTabButton = (
    id: number,
    label: string,
    icon: IconDefinition,
    name: string
  ) => {
    return (
      <TouchableOpacity
        style={styles.touchableContainer}
        key={id}
        onPress={() => navigation.navigate(name)}
      >
        <FontAwesomeIcon
          style={[activeId === id ? styles.activeTabButton : ""]}
          icon={icon}
          size={20}
        />
        <Text
          style={[styles.tabText, activeId === id && styles.activeTabButton]}
        >
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.tabContainer}>
      <View style={styles.tabInner}>
        {renderTabButton(1, "Главная", faHomeAlt, "Home")}
        {renderTabButton(2, "Землетрясение", faEarthAsia, "Earthquake")}
        {renderTabButton(3, "Чат Бот", faComment, "ChatBot")}
        {renderTabButton(4, "Сервисы", faBars, "Services")}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  touchableContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  tabContainer: {
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    position: "absolute",
    bottom: 0,
    width: "111%",
    borderTopColor: "#DDDDDD",
    left: -20,
  },
  tabInner: {
    paddingBottom: 25,
    paddingTop: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  tabButton: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    paddingVertical: 10,
  },
  activeTabButton: {
    color: Colors.primary_green,
  },
  tabText: {
    color: "black",
    textAlign: "center",
    fontFamily: Fonts.medium,
    fontSize: 10,
    fontStyle: "normal",
    marginTop: 5,
  },
});

export default UnderTab;
