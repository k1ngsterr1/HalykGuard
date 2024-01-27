import {
  faBars,
  faComment,
  faFileLines,
  faHomeAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Colors, Fonts } from "shared/styles/theme";

interface Props {
  activeId: number;
}

const UnderTab: React.FC<Props> = ({ activeId }) => {
  return (
    <View style={styles.tabContainer}>
      <View style={styles.tabInner}>
        <TouchableOpacity
          style={[styles.tabButton, activeId === 1 && styles.activeTabButton]}
        >
          <FontAwesomeIcon
            style={[activeId === 1 && styles.activeTabButton]}
            icon={faHomeAlt}
          />
          <Text
            style={[styles.tabText, activeId === 1 && styles.activeTabButton]}
          >
            Главная
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeId === 2 && styles.activeTabButton]}
        >
          <FontAwesomeIcon
            style={[activeId === 2 && styles.activeTabButton]}
            icon={faFileLines}
          />
          <Text
            style={[styles.tabText, activeId === 2 && styles.activeTabButton]}
          >
            Страховка
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeId === 3 && styles.activeTabButton]}
        >
          <FontAwesomeIcon
            style={[activeId === 3 && styles.activeTabButton]}
            icon={faComment}
          />
          <Text
            style={[styles.tabText, activeId === 3 && styles.activeTabButton]}
          >
            Чат бот
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabButton, activeId === 4 && styles.activeTabButton]}>
          <FontAwesomeIcon
            style={[activeId === 4 && styles.activeTabButton]}
            icon={faBars}
          />
          <Text
            style={[styles.tabText, activeId === 4 && styles.activeTabButton]}
          >
            Сервисы
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    flex: 1,
    alignItems: "center",
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
