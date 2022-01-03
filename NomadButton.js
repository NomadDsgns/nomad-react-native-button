import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default function({ style, text, onPress, disabled }) {
    return (
        <View style={style}>
            <TouchableOpacity style={disabled ? styles.buttonDisabled : styles.button}
                              onPress={disabled ? () => {} : onPress}>
              <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
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
  buttonDisabled: {
      backgroundColor: "grey",
  },
  text: {
    textAlign: "center",
    color:  "white",
    fontWeight: "bold",
    paddingTop: 5,
    paddingBottom: 5
  }
})
