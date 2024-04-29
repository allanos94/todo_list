import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const StatusIndicator = () => {
const route = useRoute();

// Asume que las pantallas de introducción se llaman 'Intro1', 'Intro2' y 'Intro3'
const currentScreen = route.name;

return (
    <View style={styles.container}>
        <View style={[styles.rectangle, currentScreen === 'Manage' ? styles.active : styles.inactive]} />
        <View style={[styles.rectangle, currentScreen === 'Create' ? styles.active : styles.inactive]} />
        <View style={[styles.rectangle, currentScreen === 'Organize' ? styles.active : styles.inactive]} />
    </View>
);
};

const styles = StyleSheet.create({
container: {
    flexDirection: 'row', // Esto asegura que los rectángulos estén en una fila horizontal
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    bottom: 50,
},
rectangle: {
    width: 30,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: '#AFAFAF',
},
active: {
    backgroundColor: '#FFFFFF',
},
inactive: {
    backgroundColor: '#AFAFAF',
},
});

export default StatusIndicator;
