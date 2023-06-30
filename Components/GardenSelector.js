import { StyleSheet, View, FlatList, Pressable } from 'react-native'
import React from 'react'
import MyText from './MyText'


const GardenSelector = ({garden, selectedGarden, setSelectedGarden}) => {
    
    const GardenButton = ({props}) => {
        return(
            <Pressable style={[styles.gardenButton, 
                            {backgroundColor: props.garden_colour, 
                            borderColor: props.garden_id === selectedGarden.garden_id ? 'white' : props.garden_colour }]} 
                        onPress={() => {setSelectedGarden(props); console.log('changed')}}>
                <MyText style={{color: 'oldlace'}}>
                {props.garden_name}
                </MyText>
            </Pressable>
        )
    }

    const NoGardens = () => {
        return(
            <MyText>No gardens to show</MyText>
        )
    }

  return (
    <View style={styles.container}>
      <FlatList
      data={garden}
      renderItem={({item}) => <GardenButton props={item}/>}
      keyExtractor={(item) => item.garden_id}
      ListEmptyComponent={NoGardens}
      horizontal
      style={styles.flatList} />
    </View>
  )
}

export default GardenSelector

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 10,
    },
    flatList: {
    },
    gardenButton: {
        paddingVertical: 7,
        paddingHorizontal: 15,
        marginHorizontal: 3,
        height: 50,
        borderRadius: 50,
        borderWidth: 3,
        justifyContent: 'center',

    }
})