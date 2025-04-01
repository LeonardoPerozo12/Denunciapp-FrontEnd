import React from "react";
import { View, styles, text } from 'react-native'


const Button = () => {
    return(
        <View style = { styles.buttonContainer }>
            <Text style ={styles.buttonText}> Iniciar Sesión</Text>
        </View>
    )
}

export default Button;