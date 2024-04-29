import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LogoIcon from "../../icons/Logo";
import { StatusBar } from "expo-status-bar";


export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <LogoIcon style={styles.logo} />
            <Text style={styles.title}> UpToDo </Text>
            <StatusBar style="auto" />
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
        fontSize: 40,
        fontWeight: 'bold',
        color: '#ffffff',
        padding: 20,
    },
    logo: {
        width: 100,
        height: 100,
    },
    });