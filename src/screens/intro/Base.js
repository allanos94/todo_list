import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";
import NextIntroButton from "../../buttons/NextIntro";
import BackIntroButton from "../../buttons/BackIntro";
import StatusIndicator from "../../icons/intro/StatusIndicator";


export default function BaseScreen({ title, text, nextScreen, previousScreen, children }) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.imageContainer}>
            {children}
            </View>
            <View style={styles.statusIndicator}>
                <StatusIndicator />
            </View>
            <Text style={styles.title}> {title} </Text>
            <Text style={styles.text}> {text} </Text>
            <NextIntroButton nextScreen={nextScreen} />
            <BackIntroButton previousScreen={previousScreen} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#ffffff',
        padding: 20,
        textAlign: 'center',
        position: 'absolute',
        top: '55%',
    },
    text: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: 'regular',
        padding: 20,
        textAlign: 'center',
        position: 'absolute',
        top: '65%',
    },
    statusIndicator: {
        position: 'absolute',
        top: '57%',
    },
    imageContainer: {
        position: 'absolute',
        top: '25%',
    },
});