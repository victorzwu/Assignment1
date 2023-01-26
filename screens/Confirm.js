import { View, Text, Modal, StyleSheet } from 'react-native'
import React from 'react'
import Card from '../components/Card'

export default function Confirm({styles, changePage, email, phone}) {
  return (
    <View style={styles.container}>
      <Card>
        <Text style = {styles.largeText}>You have entered:</Text>
        <Text style = {styles.largeText}>{email}</Text>
        <Text style = {styles.largeText}>{phone}</Text>
        <Text style = {styles.largeText}>Please confirm they are correct.</Text>
      </Card>
    </View>
  )
}