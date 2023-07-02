//MUST be top import
import 'react-native-gesture-handler';

import * as MediaLibrary from 'expo-media-library';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


// Controls my font
import AppLoading from 'expo-app-loading';
import { useFonts, Ovo_400Regular } from '@expo-google-fonts/ovo';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

//Screens
import Landing from './Screens/Landing';
import MyGardens from './Screens/MyGardens';
import AllPlants from './Screens/AllPlants'



//Imports

import PlantCard from './Components/PlantCard';
import testPlant from './testPlant';
import Fieldset from './Components/Fieldset';
import CameraDemo from './Components/Camera';

//buttonSVG
import { CustomStatus } from './Components/SVGIcons/CustomStatus';
import { FertEffect } from './Components/SVGIcons/FertEffect';
import { WaterEffect } from './Components/SVGIcons/WaterEffect';
import { EditButton } from './Components/SVGIcons/EditButton';
import { AddButton } from './Components/SVGIcons/AddButton';
import NewPlantForm from './Screens/NewPlantForm';
import NewGardenForm from './Screens/NewGardenForm';

export default function App() {
  
  let [fontsLoaded] = useFonts({
    Ovo_400Regular,
  });

  
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Landing' 
                          screenOptions={{ 
                            headerTitleStyle: { fontFamily: 'Ovo_400Regular' },
                            headerTitleAlign: 'center' }}>
          <Drawer.Screen name='Garden Companion' component={Landing} />
          <Drawer.Screen name='All Plants' component={AllPlants} />
          <Drawer.Screen name='New Plant' component={NewPlantForm} />
          <Drawer.Screen name='New Garden' component={NewGardenForm} />
          <Drawer.Screen name='My Gardens' component={MyGardens} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%'
  },
});
