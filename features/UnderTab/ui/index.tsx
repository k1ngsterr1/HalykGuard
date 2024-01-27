import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Fonts } from "shared/styles/theme";

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
          {/* <NotificationSvg /> */}
          <Text style={styles.tabText}>Button 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeId === 2 && styles.activeTabButton]}
        >
          {/* <NotificationSvg /> */}
          <Text style={styles.tabText}>Button 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeId === 3 && styles.activeTabButton]}
        >
          {/* <NotificationSvg /> */}
          <Text style={styles.tabText}>Button 3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeId === 4 && styles.activeTabButton]}
        >
          {/* <NotificationSvg /> */}
          <Text style={styles.tabText}>Button 4</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    position: "absolute",
    bottom: 0,
    width: "111%",
    borderTopColor: "#DDDDDD",
    left: -20,
  },
  tabInner: {
    paddingVertical: 20,
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
    borderBottomWidth: 2,
    borderBottomColor: "blue", // Цвет активной вкладки
  },

  tabText: {
    color: "#646464",
    textAlign: "center",
    fontFamily: Fonts.medium,
    fontSize: 10,
    fontStyle: "normal",
  },
});

export default UnderTab;
