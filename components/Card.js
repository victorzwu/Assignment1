import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

export default function Card(props) {
  return (
    <View style = {cardStyles.card}>
      {props.children}
    </View >
  )
}

const cardStyles = StyleSheet.create({
  card: {
    width: '90%',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    borderRadius: 4,
  },
});