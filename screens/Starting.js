import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Card from '../components/Card'
import Input from '../components/Input'

export default function Starting() {
  return (
    <Card textFirst>
      <Text style={{color: 'black'}}>Email Address</Text>
      <TextInput style={{rowGap: 10, columnGap: 10}}/>
      <Input />
      <Text>Phone Number</Text>
      <TextInput />
    </Card>
  )
}