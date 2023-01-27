import { View, Text, TextInput } from 'react-native'
import { useState } from 'react'
import React from 'react'

export default function Input({change}) {
  const [value, setValue] = useState('')
  
  return (
      <View style = {{paddingHorizontal: 10}}>
        <TextInput value = {value} style = {{fontSize: 20, paddingBottom: 5}} textAlign ={'center'} onChangeText={(changedText)=>{change(changedText), setValue(changedText)}}/>
        <View style = {{backgroundColor: 'purple', width: 250, height: 2 }} />
      </View>
  )
}