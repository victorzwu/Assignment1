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
  const [confirmed, setConfirmed] = useState(false)
  function changePage(pageText)
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
  function changeConfirm(change)
  {
    setConfirmed(change)
  }
  return (
    //conditional operators
    <LinearGradient
      style={styles.container}
      colors={["lightblue", "lightskyblue", "darkslateblue"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      {page == 'Starting' && <Starting styles = {styles} changePage = {changePage} setInformation = {setInformation}/>}
      {page == 'Confirm' && <Confirm styles = {styles} changePage = {changePage} email = {email} phone = {phone} changeConfirm= {changeConfirm}/>}
      {page == 'Finish' && <Finish styles = {styles} changePage = {changePage} confirmed={confirmed} phone = {phone} setInformation = {setInformation}/>}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  largeText: {
    color: "purple",
    padding: 10,
    fontSize: 20,
  },
  smallText: {
    color: "black",
    paddingHorizontal: 10,
    fontSize: 15,
  },
  buttonPair: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

