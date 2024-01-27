import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "redux/store";

import AppStack from "screens";

export default function App() {
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
