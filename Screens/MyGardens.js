import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'

//Components
import GardenSelector from '../Components/GardenSelector';
import OneGarden from '../Components/OneGarden';

//Fake Data to Remove
import { GARDENS, PLANTS } from '../assets/FakeData';

//Database Connection
import { DatabaseConnection } from '../Components/database/Database'
const db = DatabaseConnection.getConnection();

//TODO:
//Set up DB so I can connect withthe appropriate plants for the garden. May require a useEffect for update

const MyGardens = () => {

    const [selectedGarden, setSelectedGarden] = useState([])

        //sets seletedGarden to first item if props is true
    // useEffect(() => {
    //     if(!props.length == false){
    //         setSelectedGarden(props[0])
    //         console.log(selectedGarden)
    //     }
    // },[])

    const [gardens, setGardens] = useState([])

    useEffect(() => {
        db.transaction(function(tx){
            tx.executeSql(
                'SELECT * from garden_table',
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

    const renderGarden = (item)=> {
        return(
            <View>
                <Text>Garden Name is: {item.name}</Text>
            </View>
        )
    }

  return (
    <View>
      {/* <FlatList
        data={gardenItem}
        renderItem={({item}) => renderGarden(item)}
        keyExtractor={(item)=>item.id}
       /> */}
       <GardenSelector garden={GARDENS} selectedGarden={selectedGarden} setSelectedGarden={setSelectedGarden}/>
       <OneGarden props={PLANTS}/>
    </View>
  )
}

export default MyGardens

const styles = StyleSheet.create({})