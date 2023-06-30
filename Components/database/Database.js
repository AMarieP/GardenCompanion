import * as SQLLite from 'expo-sqlite'



const db = SQLLite.openDatabase('gardenDatabase.db');  

// once per connection
db.exec(
  [{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], 
  false, 
  () =>   console.log('Foreign keys turned on') 
);

export const DatabaseConnection  = {

    getConnection:()=>db
    
    
}