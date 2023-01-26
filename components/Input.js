import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function Input({change}) {
  return (
      <View style = {{padding: 10}}>
        <TextInput onChangeText={(changedText)=>{change(changedText)}}/>
        <View style = {{backgroundColor: 'purple', width: 250, height: 2 }} />
      </View>
  )
}