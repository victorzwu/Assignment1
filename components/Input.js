import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function Input({change}) {
  return (
      <View style = {{padding: 5}}>
        <TextInput style={{padding: 5}} onChangeText={(changedText)=>{change(changedText)}}/>
        <View style = {{backgroundColor: 'purple', width: 270, height: 2 }} />
      </View>
  )
}