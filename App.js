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
  return (
    <View style={styles.container}>
      <Starting />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
