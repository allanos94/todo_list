import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/intro/Splash";

// SplashStack - Stack Navigator for SplashScreen
const Stack = createStackNavigator();
export default function SplashStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
        </Stack.Navigator>
    );
}