import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, View} from "react-native";
import { useNavigation } from "@react-navigation/native";



export default function BackIntro({ previousScreen }) {
    const navigation = useNavigation();
    return (
        <View style={styles.button}>
            <TouchableOpacity
            onPress={() => navigation.navigate(previousScreen)}
            hitSlop={{
                top: 20,
                bottom: 20,
                left: 50,
                right: 50,
            }}
        >
                <Text style={styles.text}>BACK</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = {
    button: {
        backgroundColor: "#000",
        padding: 15,
        borderRadius: 4,
        width: 80,
        left: 25,
        bottom: 80,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
    },
    text: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "regular",
        opacity: 0.44,
    },
}
