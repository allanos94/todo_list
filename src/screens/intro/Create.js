import React from "react";
import { StyleSheet } from "react-native";
import CreateIcon from "../../icons/intro/Create";
import BaseScreen from "./Base";

export default function CreateScreen() {
    return (
        <BaseScreen
            title="Create daily routine"
            text="In Uptodo  you can create your personalized routine to stay productive"
            nextScreen="Organize"
            previousScreen="Manage"
        >
            <CreateIcon style={styles.image} />
        </BaseScreen>
    );

}
const styles = StyleSheet.create({
    image: {
        width: 280,
        height: 300,
        bottom: 100,
    },
});