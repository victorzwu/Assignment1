import { View, Text, Button } from "react-native";
import React from "react";
import Card from "../components/Card";

export default function Finish({ styles, changePage, confirmed, phone }) {
  const lastNum = parseInt(phone) % 10;
  return (
    <View style={styles.container}>
      <Card>
        {{confirmed} && <Text style={styles.largeText}>
            Thank you for signing up. Here's a picture for you (based on the
            last digit of your phone number).
          </Text>}
      </Card>
      <Button onPress = {()=> changePage('Starting')} title={'Start Again'} color = {'blue'}></Button>
    </View>
  );
}
