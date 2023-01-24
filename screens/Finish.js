import { View, Text } from 'react-native'
import React from 'react'
import Card from '../components/Card'

export default function Finish({later}) {
  return (
    <Card>
      <Text style={{ color: "purple" }}>Thank you for signing up. Here's a picture for you (based on the last digit of your phone number).</Text>
    </Card>
  )
}