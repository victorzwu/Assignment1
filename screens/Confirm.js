import { View, Text } from 'react-native'
import React from 'react'
import Card from '../components/Card'

export default function Confirm({changePage, email, phone}) {
  return (
    <View>
      <Card>
        <Text>You have entered:</Text>
        <Text>{email}</Text>
        <Text>{phone}</Text>
        <Text>Please confirm they are correct.</Text>
      </Card>
    </View>
  )
}