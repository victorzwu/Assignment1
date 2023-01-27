import { View, Text, StyleSheet, Button } from "react-native";
import { useState } from "react";
import React from "react";
import Card from "../components/Card";
import Input from "../components/Input";
import SignUpButton from "../components/SignUpButton";

export default function Starting({ styles, changePage, setInformation }) {
  const [validEmail, setValidEmail] = useState(false);
  const [validPhone, setValidPhone] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [signUp, setSignUp] = useState(false);

  function signUpPressed() {
    setSignUp(true); //this might take awhile
      if (validEmail && validPhone) {
        setInformation(email, phone);
        changePage("Confirm");
      }
  }
  function changedEmailText(changedText) {
    if (signUp) {
      setSignUp(false);
    }
    setEmail(changedText);
    const em = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    em.test(changedText) ? setValidEmail(true) : setValidEmail(false);
  }
  function changedPhoneText(changedText) {
    if (signUp) {
      setSignUp(false);
    }
    setPhone(changedText);
    changedText.length == 10 && !isNaN(changedText)
      ? setValidPhone(true)
      : setValidPhone(false);
  }
  return (
    <View style={styles.container}>
      <View style={{ padding: 30 }}>
        <SignUpButton pressed={signUpPressed} />
      </View>
      <View>
        <Card>
          <Text style={styles.largeText}>Email Address</Text>
          <Input change={changedEmailText}/>
          {signUp && !validEmail && (
            <Text style={styles.smallText}>Please enter a valid email.</Text>
          )}
          <Text style={styles.largeText}>Phone Number</Text>
          <Input change={changedPhoneText}/>
          {signUp && !validPhone && (
            <Text style={styles.smallText}>
              Please enter a valid phone number.
            </Text>
          )}
          <View style={styles.buttonPair}>
            <View style={{ padding: 20 }}>
              <Button onPress={() => resetText()} title="Reset" color="red" />
            </View>
            <View style={{ padding: 20 }}>
              <Button
                onPress={() => signUpPressed()}
                title="Sign Up"
                color="blue"
              />
            </View>
          </View>
        </Card>
      </View>
    </View>
  );
}
