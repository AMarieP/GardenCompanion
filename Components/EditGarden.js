import { StyleSheet, Pressable, View, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import { DatabaseConnection } from '../Components/database/Database';
import colours from '../colours'
import Fieldset from './Fieldset'
import Picker from './Picker'
import H1 from './H1';
import MyText from './MyText';
import { SelGardenContext } from '../Context/GardenIDContext';

const db = DatabaseConnection.getConnection()
db.exec(
  [{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], 
  false, 
  () =>   console.log('Foreign keys turned on') 
);

const EditGarden = ({navigation, selectedGarden}) => {

  selectedGarden = useContext(SelGardenContext)
  //Handles Input
  const [name, setName] = useState('')
  const [colour, setColour] = useState('')
  const [id, setID] = useState('')

  useEffect(() => {
    setName(selectedGarden.garden_name),
    setColour(selectedGarden.garden_colour),
    setID(selectedGarden.garden_id)

  },[selectedGarden])

  
  const updateGarden = () => {
    console.log('effectruns')
    db.transaction(function(tx){
      tx.executeSql(
        'UPDATE garden_table SET garden_name = (?), garden_colour = (?) WHERE garden_id = (?)',
        [name, colour, id],
        (tx, results) => {
          console.log("Garden Updated Sucessfully ")
        }
      )
    })
  }

    return (
      <ScrollView style={styles.main}>
        <View style={styles.container}>
          <Fieldset title="name: ">
            <View>
              <TextInput
                style = {{ flex: 1 }}
                placeholder={name}
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
          <Pressable style={styles.addGarden} onPress={updateGarden}><H1 style={{color: 'oldlace'}}>UPDATE GARDEN</H1></Pressable>
        </View>
      </ScrollView>

  )
}

export default EditGarden

const styles = StyleSheet.create({
  main:{
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingTop: 5
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