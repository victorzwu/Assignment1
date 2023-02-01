import { View, Button, StyleSheet } from "react-native";
import React from "react";

export default function SignUpButton({ pressed }) {
  return (
    <View style={styles.button}>
      <Button onPress={() => pressed()} title="Sign Up" color="purple" />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderColor: "purple",
    borderWidth: 2,
    padding: 1,
  },
});
