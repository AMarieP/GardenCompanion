import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'

import { DatabaseConnection } from '../Components/database/Database'

const db = DatabaseConnection.getConnection();

const Landing = () => {

    //Writes Table if none exists
    useEffect(() => {
        db.transaction(function(tx){
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS garden_table(garden_id INTEGER PRIMARY KEY AUTOINCREMENT, garden_name VARCHAR(20))',//Query
                [],
                (tx, results)=>{
                    console.log("Garden Table Created")//Success Message
                }
            )
        })

        db.transaction(function(tx){
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS plant_table(plant_id INTEGER PRIMARY KEY AUTOINCREMENT, plant_name VARCHAR(20))',//Query
                [],
                (tx, results)=>{
                    console.log("Plant Table Created")//Success Message
                }
            )
        })
    }, [])

  return (
    <View>
    </View>
  )
}

export default Landing

const styles = StyleSheet.create({})