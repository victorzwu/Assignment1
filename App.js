import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useState} from 'react';
import Starting from './screens/Starting'
import Confirm from './screens/Confirm'
import Finish from './screens/Finish'

export default function App() {
  const [validValues, setValidValues] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
  const [later, setLater] = useState(false)
    if(!validValues)
    {
      return <Starting valid={validValues}/>;

    }
    else if()
    {

    }
    else{
      return <Finish confirmSelected = {confirmed} laterSelected={later}/>;
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
