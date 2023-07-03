import { StyleSheet, View, ScrollView, Image, Dimensions, Pressable } from 'react-native';
import Text from './MyText';
import H1 from './H1';
import H2 from './H2'
import Fieldset from './Fieldset';
import { React, useEffect, useContext } from 'react'
import { PlantContext } from '../Context/PlantCard';
import colours from '../colours';

//Database Connection
import { DatabaseConnection } from '../Components/database/Database'
const db = DatabaseConnection.getConnection();
db.exec(
    [{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], 
    false, 
    () =>   console.log('Foreign keys turned on') 
  );

const PlantPage = ({navigation}) => {

  const [plantContext, setPlantContext] = useContext(PlantContext)
  console.log(plantContext.plant_image)

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
      <ScrollView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
        <Image
        source={{uri: plantContext.plant_image}} style={styles.image}/>
        </View>
        <Fieldset title="name: ">
          <View>
            <H1>{plantContext.plant_name}</H1>
          </View>
        </Fieldset>
        <Fieldset title="status effect:">
            <View style={styles.pickerContainer}>
                <H2>water: </H2>
                <Text> every {plantContext.plant_water_schedule} days.</Text>
            </View>
        </Fieldset>
        <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }, styles.back]}onPress={() => navigation.goBack()} ><MyText style={{color: 'oldlace'}}>delete</MyText></Pressable>
      </View>
      </ScrollView>
)
}

export default PlantPage

const styles = StyleSheet.create({
  main:{
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingTop: 5
  },
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
  back:{
    height: 30,
    width: '100%',
    marginVertical: 5,
    borderColor: colours.red,
    borderWidth: 1,
    backgroundColor: colours.redLight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
},

  
})