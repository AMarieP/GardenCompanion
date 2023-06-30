import { StyleSheet, View, TextInput, Dimensions } from 'react-native';
import Text from './MyText';
import H1 from './H1';
import H2 from './H2'
import Fieldset from './Fieldset';
import { React, useState, useEffect } from 'react'

//Database Connection
import { DatabaseConnection } from '../Components/database/Database'
const db = DatabaseConnection.getConnection();
db.exec(
    [{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], 
    false, 
    () =>   console.log('Foreign keys turned on') 
  );

const PlantPage = ({this_plant_id}) => {

  const [plant, setPlant] = useState([])
  const thisPlant = plant.find(item => item.plant_id === this_plant_id);

  useEffect(() => {
      db.transaction(function(tx){
          tx.executeSql(
              'SELECT * from plant_table',
              [],
              (tx, results) => {
                  var tempArr = [];
                  for (let i=0; i < results.rows.length; i++){
                      tempArr.push(results.rows.item(i))
                  }
                  setPlant(tempArr)
              }
          )
      })

  }, )

    return (
      <ScrollView>
      <View style={styles.container}>
        {/* <View style={styles.imageContainer}>
          <Camera />
        </View> */}
        <Fieldset title="name: ">
          <View>
            <H1>{thisPlant.plant_name}</H1>
          </View>
        </Fieldset>
        <Fieldset title="status effect:">
            <View style={styles.pickerContainer}>
                <H2>water: </H2>
                <Text> every {plant.plant_water_schedule} days.</Text>
            </View>
        </Fieldset>
        <Fieldset title="this plant is located in this garden:">
            <View style={styles.pickerContainer}>
                <H2>{plant.h}</H2>
            </View>
        </Fieldset>
      </View>
      </ScrollView>
)
}

export default PlantPage

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