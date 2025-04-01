import React from 'react'
import { View, StyleSheet } from 'react-native'
import Button from '@/components/Button'

const PreloginScreen = () => {
  return (
    <View style={styles.container}>
      <Button 
        text="Inicia Sesión"
        onPress={() => alert('Sesión iniciada')}
      />
    </View>
  )
}   

export default PreloginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  }
})