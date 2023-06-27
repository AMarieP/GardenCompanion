import { StyleSheet, View, TextInput, Dimensions } from 'react-native';
import Text from './MyText';
import H1 from './H1';
import H2 from './H2'
import Fieldset from './Fieldset';
import {Picker} from '@react-native-picker/picker';
import { React, useState } from 'react'


const NewGardenForm = () => {


     //Picker
     const [colour, setColour] = useState();

    return (
        <View style={styles.container}>
          <H1>New Garden Sector</H1>
          <Fieldset title="name: ">
            <View>
              <TextInput
                placeholder='e.g. "Front Yard Garden Bed" or "Bathroom Shelf"'
              />
            </View>
          </Fieldset>
          <Fieldset title="Colour:">
              <View style={styles.pickerContainer}>
                  <Picker
                      style={styles.picker}
                      selectedValue={colour}
                      onValueChange={(itemValue, itemIndex) =>
                        setColour(itemValue)
                      }>
                      <Picker.Item label="1" value="1" />
                      <Picker.Item label="1" value="1" />

                      </Picker>
                  <Text> days.</Text>
              </View>
          </Fieldset>
        </View>
  )
}

export default NewGardenForm

const styles = StyleSheet.create({
    pickerContainer: {
        width: Dimensions.get('window').width,
        minHeight: 200,
        height: 500,
        flexDirection: 'row',
        alignItems: 'baseline',
        // backgroundColor:'pink',
        marginVertical: 10
    },
    picker: {
        width: 100,
        height: 50,
        backgroundColor: "blue",
        borderWidth: 1
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
    image: {
      resizeMode: 'cover',
      width: '100%',
      height: '100%',
    },

    
})