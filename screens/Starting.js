import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import React from "react";
import Card from "../components/Card";
import Input from "../components/Input";
import SignUpButton from "../components/SignUpButton";

export default function Starting({ changePage, setInformation }) {
  const [validEmail, setValidEmail] = useState(false);
  const [validPhone, setValidPhone] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [signUp, setSignUp] = useState(false);
  function signUpPressed() {
    setSignUp(true);
    {
      signUp &&
        validEmail &&
        validPhone &&
        changePage("Confirm") &&
        setInformation(email, phone);
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
    <View style = {styles.container}>
      <View style = {{padding: 10}}>
        <SignUpButton pressed={signUpPressed} />
      </View>
      <View>
        <Card>
          <Text style={styles.text}>Email Address</Text>
          {signUp && !validEmail && <Text>Please enter a valid email.</Text>}
          <Input change={changedEmailText} />
          <Text style={styles.text}>Phone Number</Text>
          {signUp && !validPhone && (
            <Text>Please enter a valid phone number.</Text>
          )}
          <Input change={changedPhoneText} />
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text:
  {
    color: 'purple',
    padding: 10
  }
});
