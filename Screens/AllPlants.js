import { StyleSheet, View, FlatList, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import MyText from '../Components/MyText';
import PlantCard from '../Components/PlantCard';

//Database Connection
import { DatabaseConnection } from '../Components/database/Database'
const db = DatabaseConnection.getConnection();


const AllPlants = () => {

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
                }
            )
        })

    }, [])

    //Will navigate button to add new plant page
    const noPlants = ()=> {
        return(
            <View>
                <MyText>You have no plants in your collection yet!</MyText>
                <Button title='Create A New Plant' />
            </View>
        )
    }

  return (
    <View>
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

const styles = StyleSheet.create({})