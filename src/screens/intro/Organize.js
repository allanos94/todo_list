import React from "react";
import { StyleSheet } from "react-native";
import OrganizeIcon from "../../icons/intro/Organize";
import BaseScreen from "./Base";

export default function OrganizeScreen() {
    return (
        <BaseScreen
            title="Organize your tasks"
            text="You can organize your daily tasks by adding your tasks into separate categories"
            nextScreen="Welcome"
            previousScreen="Create"
        >
            <OrganizeIcon style={styles.image} />
        </BaseScreen>
    );

}
const styles = StyleSheet.create({
    image: {
        width: 260,
        height: 250,
        bottom: 100,
    },
});