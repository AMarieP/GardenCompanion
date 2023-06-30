import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {DefaultTheme, Provider} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colours from '../colours';

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
    () =>   console.log('Foreign keys turned on') 
  );
//TODO:
//Set up DB so I can connect withthe appropriate plants for the garden. May require a useEffect for update

const MyGardens = () => {

    const [selectedGarden, setSelectedGarden] = useState([])
    const [gardens, setGardens] = useState([])

    useEffect(() => {
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

    }, [])

    //sets seletedGarden to first item if props is true
    useEffect(() => {
        if(!gardens.length == false){
            setSelectedGarden(gardens[0])
            console.log(selectedGarden.garden_name)
        }
    },[])
    
    const theme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          secondaryContainer: 'transparent', // Use transparent to disable the little highlighting oval
        },
      };

  return (
    <Provider theme={theme}>
            <View style={{flex: 1}}>
      {/* <FlatList
        data={gardenItem}
        renderItem={({item}) => renderGarden(item)}
        keyExtractor={(item)=>item.id}
       /> */}
       <GardenSelector garden={gardens} selectedGarden={selectedGarden} setSelectedGarden={setSelectedGarden}/>
       <Tab.Navigator initialRouteName='Your Garden'
                      activeColor='white'
                      inactiveColor={colours.greenLight}
                      barStyle={{ backgroundColor: colours.green }}
                      >
        <Tab.Screen name='Your Garden' component={OneGarden} initialParams={{props: PLANTS}} options={{tabBarIcon: ({focused, color}) => (
                    <Ionicons name="flower-outline" size={25} color={focused ? 'white' : colours.greenLight}/>
                    ),}} />
        <Tab.Screen name='Edit Garden' component={EditGarden} 
                    options={{tabBarIcon: ({focused, color}) => (
                    <Ionicons name="pencil-outline" size={25} color={focused ? 'white' : colours.greenLight}/>
                    ),}} />
       </Tab.Navigator>
    </View>
    </Provider>
  )
}

export default MyGardens

const styles = StyleSheet.create({})