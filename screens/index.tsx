import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./Home";
import { Onboarding } from "./Onboarding";

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        options={{ headerShown: true }}
        component={Onboarding}
      ></Stack.Screen>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default AppStack;
