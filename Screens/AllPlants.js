import { StyleSheet, View, FlatList, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import MyText from '../Components/MyText';
import PlantCard from '../Components/PlantCard';

//Database Connection
import { DatabaseConnection } from '../Components/database/Database'
const db = DatabaseConnection.getConnection();

//Placeholder
import lettu from '../assets/Lettuce_StockProduce.png'
import rhu from '../assets/Rhubarb_StockProduce.png'
import  her from '../assets/HierloomCarrot_StockProduce.png'
import art from '../assets/Artichoke_StockProduce.png'
import cap from '../assets/Capsicum_StockProduce.png'
import cit from '../assets/Citrus_StockProduce.png'

const Plants = [
    {
        plant_id: 1,
        plant_name:'lettuce',
        plant_image: lettu
    },
    {
        plant_id: 2,
        plant_name: 'rhubarb',
        plant_image: rhu
    },
    {
        plant_id: 3,
        plant_name: 'heirloomCarrot',
        plant_image: her
    },
    {
        plant_id: 4,
        plant_name: 'artichoke',
        plant_image: art
    },
    {
        plant_id: 5,
        plant_name: 'capsicum',
        plant_image: cap
    },
    {
        plant_id: 6,
        plant_name: 'citrus',
        plant_image: cit
    },
    {
        plant_id: 7,
        plant_name:'lettuce',
        plant_image: lettu
    },
    {
        plant_id: 8,
        plant_name: 'rhubarb',
        plant_image: rhu
    },
    {
        plant_id: 9,
        plant_name: 'heirloomCarrot',
        plant_image: her
    },
    {
        plant_id: 10,
        plant_name: 'artichoke',
        plant_image: art
    },
    {
        plant_id: 11,
        plant_name: 'capsicum',
        plant_image: cap
    },
    {
        plant_id: 12,
        plant_name: 'citrus',
        plant_image: cit
    }
]

const AllPlants = () => {

    // const [plant, setPlant] = useState([])

    // useEffect(() => {
    //     db.transaction(function(tx){
    //         tx.executeSql(
    //             'SELECT * from plant_table',
    //             [],
    //             (tx, results) => {
    //                 var tempArr = [];
    //                 for (let i=0; i < results.rows.length; i++){
    //                     tempArr.push(results.rows.item(i))
    //                 }
    //                 setPlant(tempArr)
    //             }
    //         )
    //     })

    // }, [])

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
        data={Plants}
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