import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, View} from "react-native";
import { useNavigation } from "@react-navigation/native";



export default function NextIntro({ nextScreen }) {
    const navigation = useNavigation();
    return (
        <View style={styles.button}>
            <TouchableOpacity
            onPress={() => navigation.navigate(nextScreen)}
            hitSlop={{
                top: 20,
                bottom: 20,
                left: 50,
                right: 50,
            }}
        >
                <Text style={styles.text}>NEXT</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = {
    button: {
        backgroundColor: "#8875FF",
        padding: 15,
        borderRadius: 4,
        width: 80,
        right: 25,
        bottom: 80,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
    },
    text: {
        color: "#ffffff",
        fontSize: 16,
    },
}
