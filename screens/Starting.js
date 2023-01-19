import { View, Text } from 'react-native'
import React from 'react'

export default function Starting() {
  return (
    <View>
      <Text>Email Address</Text>
      <TextInput />
      <Text>Phone Number</Text>
      <TextInput />
    </View>
  )
}