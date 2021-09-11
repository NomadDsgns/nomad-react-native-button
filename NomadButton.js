import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

export default function NomadButton({ title, onPress }) {
    return (
        <View style={styles.container}>
            <Button style={styles.button}
                    onPress={onPress}>{title}</Button>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {

    },
    button: {
        backgroundColor: "#ffec64",
        borderRadius: 27,
        borderWidth: 1,  
        borderColor: "#ffaa22",
        color:  "#333",
        fontSize: 14,
        fontWeight: "bold",
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 24,
        paddingRight: 24
    }
})
