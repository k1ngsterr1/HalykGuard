import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./Home";
import { Onboarding } from "./Onboarding";
import { Registration } from "./Registration";
import { ChatBot } from "./ChatBot";
import { Insurance } from "./Insurance";
import { Services } from "./Services";
import { Calculator } from "./Calculator";
import { Earthquake } from "./Earthquake";
import { Info } from "./Info";
import { Med } from "./Med";

const Stack = createStackNavigator();
function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        animationEnabled: false,
      }}
    >
      <Stack.Screen
        name="Onboarding"
        options={{ headerShown: false }}
        component={Onboarding}
      />
      <Stack.Screen
        name="Registration"
        options={{ headerShown: false }}
        component={Registration}
      />
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="ChatBot"
        options={{ headerShown: false }}
        component={ChatBot}
      />
      <Stack.Screen
        name="Insurance"
        options={{ headerShown: false }}
        component={Insurance}
      />
      <Stack.Screen
        name="Services"
        options={{ headerShown: false }}
        component={Services}
      />
      <Stack.Screen
        name="Calculator"
        options={{ headerShown: false }}
        component={Calculator}
      />
      <Stack.Screen
        name="Earthquake"
        options={{ headerShown: false }}
        component={Earthquake}
      />
      <Stack.Screen
        name="Info"
        options={{ headerShown: false }}
        component={Info}
      />
      <Stack.Screen
        name="Med"
        options={{ headerShown: false }}
        component={Med}
      />
    </Stack.Navigator>
  );
}

export default AppStack;
