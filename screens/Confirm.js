import { View, Text, Button } from "react-native";
import React from "react";
import Card from "../components/Card";

export default function Confirm({ styles, changePage, email, phone, changeConfirm }) {
  function goBack(){
    changePage('Starting')
  }
  function confirm(){
    changePage('Finish')
    changeConfirm(true)
  }
  function finishLater()
  {
    changePage('Finish')
    changeConfirm(false)
  }

  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.largeText}>You have entered:</Text>
        <Text style={styles.largeText}>{email}</Text>
        <Text style={styles.largeText}>{phone}</Text>
        <Text style={styles.largeText}>Please confirm they are correct.</Text>
        <View style={{ padding: 5 }}>
          <Button
            onPress={() => goBack()}
            title="Go Back"
            color="red"
          />
        </View>
        <View style={{ padding: 5 }}>
          <Button
            onPress={() => confirm()}
            title="Confirm"
            color="blue"
          />
        </View>
        <View style={{ padding: 5 }}>
          <Button
            onPress={() => finishLater()}
            title="Finish Later"
            color="blue"
          />
        </View>
      </Card>
    </View>
  );
}
