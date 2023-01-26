import { View, Text, TextInput } from "react-native";
import { useState } from "react";
import React from "react";
import Card from "../components/Card";
import Input from "../components/Input";
import SignUpButton from "../components/SignUpButton";

export default function Starting({changePage, setInformation}) {
  const [validEmail, setValidEmail] = useState(false);
  const [validPhone, setValidPhone] = useState(false);
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [signUp, setSignUp] = useState(false);
  function signUpPressed() {
    setSignUp(true);
    {signUp && validEmail && validPhone && changePage('Confirm') && setInformation(email, phone)}
  }
  function changedEmailText(changedText) {
    if (signUp) {
      setSignUp(false);
    }
    email = changedText;
    const em = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    em.test(changedText) ? setValidEmail(true) : setValidEmail(false);
  }
  function changedPhoneText(changedText) {
    if (signUp) {
      setSignUp(false);
    }
    phone = changedText;
    changedText.length == 10 && !isNaN(changedText)
      ? setValidPhone(true)
      : setValidPhone(false);
  }
  return (
    <View style = {{alignItems : 'center'}}>
      <SignUpButton pressed={signUpPressed} />
      <Card>
        <Text style={{ color: "purple" }}>Email Address</Text>
        {signUp && !validEmail && <Text>Please enter a valid email.</Text>}
        <Input change={changedEmailText} />
        <Text style={{ color: "purple" }}>Phone Number</Text>
        {signUp && !validPhone && (
          <Text>Please enter a valid phone number.</Text>
        )}
        <Input change={changedPhoneText} />
      </Card>
    </View>
  );
}
