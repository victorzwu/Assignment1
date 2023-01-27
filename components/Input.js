import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function Input({change}) {
  return (
      <View style = {{paddingHorizontal: 10}}>
        <TextInput style = {{fontSize: 20, paddingBottom: 5}} textAlign ={'center'} onChangeText={(changedText)=>{change(changedText)}}/>
        <View style = {{backgroundColor: 'purple', width: 250, height: 2 }} />
      </View>
  )
}