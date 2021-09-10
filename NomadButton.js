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

    }
})