import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Starting from "./screens/Starting";
import Confirm from "./screens/Confirm";
import Finish from "./screens/Finish";

export default function App() {
  const [page, setPage] = useState('Starting')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  function pageCheck(pageText)
  {
    if(pageText == 'Starting')
    {
      setPage('Starting')
    }
    if(pageText == 'Confirm')
    {
      setPage('Confirm')
    }
    if(pageText == 'Finish')
    {
      setPage('Finish')
    }
  }
  function setInformation(email, phone)
  {
    setEmail(email)
    setPhone(phone)
  }

  return (
    //conditional operators
    <LinearGradient
      style={styles.container}
      colors={["lightblue", "lightskyblue", "darkslateblue"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      {page == 'Starting' && <Starting changePage = {pageCheck} setInformation = {setInformation}/>}
      {page == 'Confirm' && <Confirm changePage = {pageCheck} email = {email} phone = {phone}/>}
      {page == 'Finish' && <Finish changePage = {pageCheck}/>}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
