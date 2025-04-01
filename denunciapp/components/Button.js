import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const Button = (props) => {
    const { text, onPress } = props

    return(
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#007AFF',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})