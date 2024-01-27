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
    "OpenSans-Light": require("../assets/fonts/OpenSans/OpenSans-Light.ttf"),
    "OpenSans-Regular": require("../assets/fonts/OpenSans/OpenSans-Regular.ttf"),
    "OpenSans-Medium": require("../assets/fonts/OpenSans/OpenSans-Medium.ttf"),
    "OpenSans-SemiBold": require("../assets/fonts/OpenSans/OpenSans-SemiBold.ttf"),
    "OpenSans-Bold": require("../assets/fonts/OpenSans/OpenSans-Bold.ttf"),
    "OpenSans-ExtraBold": require("../assets/fonts/OpenSans/OpenSans-ExtraBold.ttf"),
    "OpenSans-LightItalic": require("../assets/fonts/OpenSans/OpenSans-LightItalic.ttf"),
    "OpenSans-Italic": require("../assets/fonts/OpenSans/OpenSans-Italic.ttf"),
    "OpenSans-MediumItalic": require("../assets/fonts/OpenSans/OpenSans-MediumItalic.ttf"),
    "OpenSans-BoldItalic": require("../assets/fonts/OpenSans/OpenSans-BoldItalic.ttf"),
  });

  if (!fontsLoaded) {
    return;
  }

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
