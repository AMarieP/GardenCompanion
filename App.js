import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Controls my font
import AppLoading from 'expo-app-loading';
import { useFonts, Ovo_400Regular } from '@expo-google-fonts/ovo';

//Imports

import PlantCard from './Components/PlantCard';
import testPlant from './testPlant';
import Fieldset from './Components/Fieldset';

//Form
import NewPlantForm from './Components/NewPlantForm';

//buttonSVG
import { CustomStatus } from './Components/SVGIcons/CustomStatus';
import { FertEffect } from './Components/SVGIcons/FertEffect';
import { WaterEffect } from './Components/SVGIcons/WaterEffect';
import { EditButton } from './Components/SVGIcons/EditButton';
import { AddButton } from './Components/SVGIcons/AddButton';

export default function App() {
  
  let [fontsLoaded] = useFonts({
    Ovo_400Regular,
  });

  
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
      {/* <Text style={{fontFamily: 'Ovo_400Regular'}} >Hello</Text>
      <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-around'}}>
      <PlantCard props={testPlant}/>
      <PlantCard props={testPlant}/>
      </View> */}
        <NewPlantForm />
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
