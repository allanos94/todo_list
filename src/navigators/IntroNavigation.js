// Navigation for Introduction Screens
import { createStackNavigator } from "@react-navigation/stack";


// IntroScreens - Introduction Screens
import CreateScreen from "../screens/intro/Create";
import ManageScreen from "../screens/intro/Manage";
import OrganizeScreen from "../screens/intro/Organize";
import WelcomeScreen from "../screens/intro/Welcome";



// IntroStack - Stack Navigator for Introduction Screens
const Intro = createStackNavigator();
export default function IntroStack() {
    return (
        <Intro.Navigator screenOptions={{ headerShown: false }}>
            <Intro.Screen name="Manage" component={ManageScreen} />
            <Intro.Screen name="Create" component={CreateScreen} />
            <Intro.Screen name="Organize" component={OrganizeScreen} />
            <Intro.Screen name="Welcome" component={WelcomeScreen} />
        </Intro.Navigator>
    );
}