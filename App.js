import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Controls my font
import AppLoading from 'expo-app-loading';
import { useFonts, Ovo_400Regular } from '@expo-google-fonts/ovo';

import PlantCard from './Components/PlantCard';
import testPlant from './testPlant';

export default function App() {
  
  let [fontsLoaded] = useFonts({
    Ovo_400Regular,
  });

  let fontSize = 24;
  let paddingVertical = 6;
  
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
      <Text style={{fontFamily: 'Ovo_400Regular'}} >Hello</Text>
      <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-around'}}>
      <PlantCard props={testPlant}/>
      <PlantCard props={testPlant}/>
      </View>
    </View>
    );
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
