import { StyleSheet, View, Image, TextInput, Dimensions, ScrollView, Button, Pressable } from 'react-native';
import Text from '../Components/MyText';
import H1 from '../Components/H1';
import H2 from '../Components/H2'
import Camera from '../Components/Camera';
import Fieldset from '../Components/Fieldset';
import { Picker } from '@react-native-picker/picker';
import React, { useState, useEffect } from 'react'
import { useFocusEffect } from '@react-navigation/native';


import {GARDENS, PLANTS} from '../assets/FakeData'

//Image is placeholder for now
//Placeholder text will be from the plant selection for now

//Database
import { DatabaseConnection } from '../Components/database/Database';
import MyText from '../Components/MyText';
import colours from '../colours';
const db = DatabaseConnection.getConnection()
db.exec(
  [{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], 
  false, 
  () =>   console.log('Foreign keys turned on') 
);

const NewPlantForm = ({navigation}) => {
  
  //Sets values to pass to DB
  // const [image, setSelectedImage] = useState('');
  const [name, setSelectedName] = useState('');
  const [days, setSelectedDays] = useState(1);
  const [garden, setSelectedGarden] = useState('');
  
  //Adds values to DB
  const addPlanttoDB = () => {
    db.transaction(function(tx){
      tx.executeSql(
        'INSERT INTO plant_table(plant_name, plant_water_schedule, garden_ref)VALUES(?,?,?)',
        [name, days, garden],
        (tx, results) => {
          console.log("Plant Added Sucessfully ")
        }
      )
    })
  }
  
  //Retrieves the garden names and IDs
  const [gardens, setGardens] = useState([])

  useFocusEffect(
    React.useCallback(() => {
      db.transaction(function(tx){
          tx.executeSql(
              'SELECT garden_id, garden_name from garden_table',
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
  )

    return (
      <ScrollView>
        <View style={styles.container}>
          {/* <View style={styles.imageContainer}>
            <Camera />
          </View> */}
          <Fieldset title="name: ">
            <View>
              <TextInput
                style={styles.input}
                maxLength={20}
                placeholder='e.g. "beefsteak tomato" or "golden pothos"'
                value={name}
                onChangeText={name=>setSelectedName(name)}
              />
            </View>
          </Fieldset>
          <Fieldset title="status effect:">
              <View style={styles.pickerContainer}>
                  <H2>water: </H2>
                  <Text> every </Text>
                  <Picker
                      style={{minHeight: 50, minWidth: 100}}
                      selectedValue={days}
                      onValueChange={(itemValue) =>
                          setSelectedDays(itemValue)
                      }>
                      <Picker.Item label="1" value="1" />
                      <Picker.Item label="2" value="2" />
                      <Picker.Item label="3" value="3" />
                      <Picker.Item label="4" value="4" />
                      <Picker.Item label="5" value="5" />
                      <Picker.Item label="6" value="6" />
                      <Picker.Item label="7" value="7" />
                      <Picker.Item label="8" value="8" />
                      <Picker.Item label="9" value="9" />
                      <Picker.Item label="10" value="10" />
                      <Picker.Item label="11" value="11" />
                      <Picker.Item label="12" value="12" />
                      <Picker.Item label="13" value="13" />
                      <Picker.Item label="14" value="14" />
                      <Picker.Item label="15" value="15" />
                      <Picker.Item label="16" value="16" />
                      <Picker.Item label="17" value="17" />
                      <Picker.Item label="18" value="18" />
                      <Picker.Item label="19" value="19" />
                      <Picker.Item label="20" value="20" />
                      </Picker>
                  <Text> days.</Text>
              </View>
          </Fieldset>
          <Fieldset title="where will this plant go:">
              <View style={styles.pickerContainer}>
                  <H2>garden: </H2>
                  <Picker
                      style={{minHeight: 50, minWidth: 200}}
                      itemStyle={{fontFamily: 'Ovo_400Regular'}}
                      selectedValue={garden}
                      onValueChange={(itemValue) =>
                        setSelectedGarden(itemValue)
                      }>
                        {gardens.map(item => <Picker.Item label={item.garden_name} value={item.garden_id}/>)}
                      </Picker>
              </View>
          </Fieldset>
          <Pressable style={styles.addPlant} onPress={addPlanttoDB}><H1 style={{color: 'oldlace'}}>ADD PLANT</H1></Pressable>
          <Pressable style={styles.deletePlant}onPress={() => navigation.goBack()} ><MyText style={{color: 'oldlace'}}>delete</MyText></Pressable>
        </View>
        </ScrollView>
  )
}

export default NewPlantForm

const styles = StyleSheet.create({
    pickerContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },
    picker: {
        minWidth: 100,
        minHeight: 50,

    },
    container: {
      width: '100%',
      alignContent: 'center'
    },
    imageContainer: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').width,
      marginBottom: 13,
      borderWidth: 1,
      borderRadius: 15,
      overflow: 'hidden'
    },
    input: {
      padding: 10,
      width: '100%',
      fontSize: 18
    },
    addPlant:{
      height: 60,
      width: '100%',
      marginVertical: 5,
      borderColor: colours.green,
      borderWidth: 1,
      backgroundColor: colours.greenLight,
      justifyContent: 'center',
      alignItems: 'center'
    },
    deletePlant:{
      height: 30,
      width: '100%',
      marginVertical: 5,
      borderColor: colours.red,
      borderWidth: 1,
      backgroundColor: colours.redLight,
      justifyContent: 'center',
      alignItems: 'center'
    }

    
})