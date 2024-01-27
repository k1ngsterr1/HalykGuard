import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./Home";
import { Onboarding } from "./Onboarding";

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
}

export default AppStack;
