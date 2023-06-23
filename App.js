import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import PlantCard from './Components/PlantCard';
import testPlant from './testPlant';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-around'}}>
      <PlantCard props={testPlant}/>
      <PlantCard props={testPlant}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
