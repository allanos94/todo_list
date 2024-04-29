import React from "react";
import { Text, StyleSheet } from "react-native";
import ManageIcon from "../../icons/intro/Manage";
import BaseScreen from "./Base";

export default function ManageScreen() {
    return (
        <BaseScreen
            text="You can easily manage all of your daily tasks in DoMe for free"
            title="Manage your tasks"
            nextScreen="Create"
            previousScreen="Splash"
        >
            <ManageIcon style={styles.image} />
        </BaseScreen>
    );

}
const styles = StyleSheet.create({
    image: {
        width: 208,
        height: 280,
        bottom: 100,
    },
});