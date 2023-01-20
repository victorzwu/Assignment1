import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Card from '../components/Card'

export default function Starting() {
  return (
    <View>
      <Text>Email Address</Text>
      <TextInput />
      <Text>Phone Number</Text>
      <TextInput />
      <Card />
    </View>
  )
}