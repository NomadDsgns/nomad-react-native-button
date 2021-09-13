import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default function({ title, onPress }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}
                              onPress={onPress}>
              <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
  container: {
    width: 250
  },
  button: {
    backgroundColor: "#474747",
    borderRadius: 10,
    borderWidth: 1,  
    borderColor: "#757575",
    fontSize: 14,
    fontWeight: "bold",
    paddingTop: 6,
    paddingBottom: 6,
  },
  text: {
    textAlign: "center",
    color:  "white",
    fontWeight: "bold",
    paddingTop: 5,
    paddingBottom: 5
  }
})
