import { StyleSheet, View, TextInput, Dimensions, Button } from 'react-native';
import Text from './MyText';
import H1 from './H1';
import H2 from './H2'
import Fieldset from './Fieldset';
import { React, useState } from 'react'

//Database
import { DatabaseConnection } from './database/Database';

const db = DatabaseConnection.getConnection()


const NewGardenForm = () => {
  //Handles Input
  const [name, setName] = useState('')

  const addGardenDB = () => {
    db.transaction(function(tx){
      tx.executeSql(
        'INSERT INTO garden_table(garden_name)VALUES(?)',
        [name],
        (tx, results) => {
          console.log("Garden Added Sucessfully ")
        }
      )
    })
  }

    return (
        <View style={styles.container}>
          <H1>New Garden Sector</H1>
          <Fieldset title="name: ">
            <View>
              <TextInput
                placeholder='e.g. "Front Yard Garden Bed" or "Bathroom Shelf"'
                value={name}
                onChangeText={name=>setName(name)}
              />
            </View>
          </Fieldset>
          <Fieldset title="Colour:">
              <View style={styles.pickerContainer}>
                  {/* where colour pciker would be */}
              </View>
          </Fieldset>
          <Button title='Submit' onPress={addGardenDB} />
        </View>
  )
}

export default NewGardenForm

const styles = StyleSheet.create({
    pickerContainer: {
        width: Dimensions.get('window').width,
        minHeight: 200,
        height: 500,
        flexDirection: 'row',
        alignItems: 'baseline',
        // backgroundColor:'pink',
        marginVertical: 10
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
    image: {
      resizeMode: 'cover',
      width: '100%',
      height: '100%',
    },

    
})