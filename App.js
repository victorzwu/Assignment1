import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useState} from 'react';
import { LinearGradient } from 'expo-linear-gradient'
import Starting from './screens/Starting'
import Confirm from './screens/Confirm'
import Finish from './screens/Finish'


export default function App() {
  //const [validValues, setValidValues] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
  const [later, setLater] = useState(false)


  return (
    //conditional operators
    
    <View style={styles.container}>
      <LinearGradient
        colors={['lightblue', 'lightskyblue', 'darkslateblue']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Starting />
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
