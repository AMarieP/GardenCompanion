import { StyleSheet, View, TextInput, Dimensions, Pressable, ScrollView } from 'react-native';
import H1 from '../Components/H1';
import MyText from '../Components/MyText';
import Picker from '../Components/Picker';
import Fieldset from '../Components/Fieldset';
import colours from '../colours';
import { React, useState } from 'react'

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
        }
      )
    })
  }

    return (
      <ScrollView>
        <View style={styles.container}>
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
          <Fieldset title="Colour:">
              <View style={styles.pickerContainer}>
                  <Picker colour={colour} setSelectedColour={setColour} />
              </View>
          </Fieldset>
          <Pressable style={styles.addGarden} onPress={addGardenDB}><H1 style={{color: 'oldlace'}}>CREATE GARDEN</H1></Pressable>
          <Pressable style={styles.delete}onPress={() => navigation.goBack()} ><MyText style={{color: 'oldlace'}}>delete</MyText></Pressable>
        </View>
      </ScrollView>

  )
}

export default NewGardenForm

const styles = StyleSheet.create({
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