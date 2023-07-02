import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {DefaultTheme, Provider} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colours from '../colours';
import { useContext } from 'react';
import { GardenContext } from '../Context/SelectedGardenContext'
import { SelGardenContext } from '../Context/GardenIDContext';

const Tab = createMaterialBottomTabNavigator();

//Components
import GardenSelector from '../Components/GardenSelector';
import OneGarden from '../Components/OneGarden';
import EditGarden from '../Components/EditGarden';

//Fake Data to Remove
import { GARDENS, PLANTS } from '../assets/FakeData';

//Database Connection
import { DatabaseConnection } from '../Components/database/Database'
const db = DatabaseConnection.getConnection();
db.exec(
    [{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], 
    false, 
  );
//TODO:
//Set up DB so I can connect withthe appropriate plants for the garden. May require a useEffect for update

const MyGardens = () => {

    const [selectedGarden, setSelectedGarden] = useState([])
    const [gardens, setGardens] = useState([])
    const [plants, setPlants] = useState([])
    const [thisPlants, setThisPlants] = useState([])

    useFocusEffect(
      React.useCallback(() => {
        db.transaction(function(tx){
            tx.executeSql(
                'SELECT * from garden_table',
                [],
                (tx, results) => {
                    var tempArr = [];
                    for (let i=0; i < results.rows.length; i++){
                        tempArr.push(results.rows.item(i))
                    }
                    setGardens(tempArr)
                }
            )
        })
        db.transaction(function(tx){
          tx.executeSql(
              'SELECT * from plant_table',
              [],
              (tx, results) => {
                  var tempArr = [];
                  for (let i=0; i < results.rows.length; i++){
                      tempArr.push(results.rows.item(i))
                  }
                  setPlants(tempArr)
              }
          )
      })

    }, [selectedGarden])
    )
    
    //Updates plants shown
    useEffect(() => {
      console.log(selectedGarden)
      db.transaction(function(tx){
        tx.executeSql(
            'SELECT * from plant_table WHERE garden_ref = (?)',
            [selectedGarden.garden_id],
            (tx, results) => {
                var tempArr = [];
                for (let i=0; i < results.rows.length; i++){
                    tempArr.push(results.rows.item(i))
                }
                setThisPlants(tempArr)
            },
            (tx, results) => {
              console.log('Could not access plants')
            }
        )
    })
    },[selectedGarden])
    
    const theme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          secondaryContainer: 'transparent', // Use transparent to disable the little highlighting oval
        },
      };

  return (
    <GardenContext.Provider value={thisPlants}>
    <SelGardenContext.Provider value={selectedGarden}>
    <Provider theme={theme}>
      <View style={{flex: 1}}>
       <GardenSelector garden={gardens} selectedGarden={selectedGarden} setSelectedGarden={setSelectedGarden}/>
       <Tab.Navigator initialRouteName='Your Garden'
                      activeColor='white'
                      inactiveColor={colours.greenLight}
                      barStyle={{ backgroundColor: colours.green }}
                      >
        <Tab.Screen name='Your Garden' component={OneGarden} options={{tabBarIcon: ({focused, color}) => (
                    <Ionicons name="flower-outline" size={25} color={focused ? 'white' : colours.greenLight}/>
                    ),}} />
        <Tab.Screen name='Edit Garden' component={EditGarden} 
                    options={{tabBarIcon: ({focused, color}) => (
                    <Ionicons name="pencil-outline" size={25} color={focused ? 'white' : colours.greenLight}/>
                    ),}} />
       </Tab.Navigator>
    </View>
    </Provider>
    </SelGardenContext.Provider>
    </GardenContext.Provider>
    
  )
}

export default MyGardens

const styles = StyleSheet.create({})