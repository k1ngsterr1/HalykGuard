import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "redux/store";
import { useFonts } from "expo-font";
import { Fonts } from "shared/styles/theme";
import AppStack from "screens";

export default function App() {
  let [fontsLoaded] = useFonts({
    [Fonts.regular]: require("assets/fonts/OpenSans/OpenSans-Regular.ttf"),
    [Fonts.medium]: require("assets/fonts/OpenSans/OpenSans-Medium.ttf"),
    [Fonts.semiBold]: require("assets/fonts/OpenSans/OpenSans-SemiBold.ttf"),
    [Fonts.bold]: require("assets/fonts/OpenSans/OpenSans-Bold.ttf"),
    [Fonts.extraBold]: require("assets/fonts/OpenSans/OpenSans-ExtraBold.ttf"),

    // Italic
    [Fonts.lightItalic]: require("assets/fonts/OpenSans/OpenSans-LightItalic.ttf"),
    [Fonts.italic]: require("assets/fonts/OpenSans/OpenSans-Italic.ttf"),
    [Fonts.italicMedium]: require("assets/fonts/OpenSans/OpenSans-MediumItalic.ttf"),
    [Fonts.italicSemiBold]: require("assets/fonts/OpenSans/OpenSans-SemiBold.ttf"),
    [Fonts.italicBold]: require("assets/fonts/OpenSans/OpenSans-Bold.ttf"),
  });

  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
      </View>
    </Provider>
  );
}
