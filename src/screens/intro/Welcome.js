import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import NextIntroButton from "../../buttons/NextIntro";

export default function SplashScreen() {
    return (
        <View>
            <Text> Welcome </Text>
            <StatusBar style="auto" />
            <NextIntroButton screen="Organize" />
        </View>
    );
}