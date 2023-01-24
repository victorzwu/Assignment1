import { View, Text, Button } from 'react-native'
import React from 'react'

export default function SignUpButton({pressed}) {
  return (
    <View style = {{borderColor : 'purple', borderWidth : '2', height: 50, width: 100}}>
      <Button onPress={pressed} title="Sign Up" color = 'purple'>Sign Up</Button>
    </View>
  )
}