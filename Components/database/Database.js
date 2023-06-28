import * as SQLLite from 'expo-sqlite'

export const DatabaseConnection  = {

    getConnection:()=>SQLLite.openDatabase('gardenDatabase.db')
}