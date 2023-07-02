import { StyleSheet, View, FlatList, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import MyText from '../Components/MyText';
import PlantCard from '../Components/PlantCard';

//Database Connection
import { DatabaseConnection } from '../Components/database/Database'
const db = DatabaseConnection.getConnection();
db.exec(
    [{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], 
    false, 
    () =>   console.log('Foreign keys turned on') 
  );

const AllPlants = ({navigation}) => {

    const [plant, setPlant] = useState([])

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
                },
                (tx, results) => {
                    console.log("Error Could not Retrieve Plants")
                }
            )
        })

    }, [])

    //Will navigate button to add new plant page
    const noPlants = ()=> {
        return(
            <View style={styles.main}>
                <MyText>You have no plants in your collection yet!</MyText>
                <Button title='Create A New Plant' onPress={() => navigation.NewPlantForm()} />
            </View>
        )
    }

  return (
    <View style={styles.main}>
      <FlatList
        data={plant}
        renderItem={({item}) => <PlantCard props={item}/>}
        keyExtractor={(item)=>item.plant_id}
        numColumns={2}
        ListEmptyComponent={noPlants}
       />
    </View>
  )
}

export default AllPlants

const styles = StyleSheet.create({
    main:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 3,
        backgroundColor:'white',
        minHeight: '100%',
        paddingBottom: 100
      },
})