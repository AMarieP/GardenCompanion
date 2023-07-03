import { StyleSheet, View, TextInput, Dimensions, Pressable, ScrollView } from 'react-native';
import H1 from '../Components/H1';
import MyText from '../Components/MyText';
import Picker from '../Components/Picker';
import Fieldset from '../Components/Fieldset';
import colours from '../colours';
import { React, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';

//Database
import { DatabaseConnection } from '../Components/database/Database';

const db = DatabaseConnection.getConnection()
db.exec(
  [{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], 
  false, 
  () =>   console.log('Foreign keys turned on') 
);

const NewGardenForm = ({navigation}) => {
  //Handles Input
  const [name, setName] = useState('')
  const [colour, setColour] = useState('')

  const addGardenDB = () => {
    db.transaction(function(tx){
      tx.executeSql(
        'INSERT INTO garden_table(garden_name, garden_colour)VALUES(?, ?)',
        [name, colour],
        (tx, results) => {
          console.log("Garden Added Sucessfully ")
        },
        (tx, results) => {
          console.log("Error in Adding Garden.")
          console.log(results)
        }
      )
    })
  }

  const Reset = () =>{
    setName('')
    setColour('')
  }

    return (
      <ScrollView style={styles.main}>
        <View style={styles.container}>
        <H1 style={{textAlign: 'center', marginVertical: 3}}>Create a New Garden</H1>
          <Fieldset title="name: ">
            <View>
              <TextInput
                placeholder='e.g. "Front Yard Garden Bed" or "Bathroom Shelf"'
                value={name}
                maxLength={20}
                onChangeText={name=>setName(name)}
              />
            </View>
          </Fieldset>
          <Fieldset title="colour:">
              <View style={styles.pickerContainer}>
                  <Picker colour={colour} setSelectedColour={setColour} />
              </View>
          </Fieldset>
          <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }, styles.addGarden]} onPress={addGardenDB}><H1 style={{color: 'oldlace'}}>CREATE GARDEN</H1></Pressable>
          <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }, styles.delete]}onPress={Reset} ><MyText style={{color: 'oldlace'}}>delete</MyText></Pressable>
        </View>
      </ScrollView>

  )
}

export default NewGardenForm

const styles = StyleSheet.create({
  main:{
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingTop: 5,
  },
    pickerContainer: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        marginHorizontal: 50
    },
    container: {
      width: '100%',
      alignContent: 'center',
      marginVertical: 30,
    },
    imageContainer: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').width,
      marginBottom: 13,
      borderWidth: 1,
      borderRadius: 15,
      overflow: 'hidden'
    },
    image: {
      resizeMode: 'cover',
      width: '100%',
      height: '100%',
    },
    addGarden:{
      height: 60,
      width: '100%',
      marginVertical: 5,
      borderColor: colours.green,
      borderWidth: 1,
      backgroundColor: colours.greenLight,
      justifyContent: 'center',
      alignItems: 'center'
    },
    delete:{
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