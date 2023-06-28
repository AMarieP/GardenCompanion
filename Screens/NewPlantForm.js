import { StyleSheet, View, Image, TextInput, Dimensions, Pressable } from 'react-native';
import Text from '../Components/MyText';
import H1 from '../Components/H1';
import H2 from '../Components/H2'
import Camera from '../Components/Camera';
import Fieldset from '../Components/Fieldset';
import { Picker } from '@react-native-picker/picker';
import { React, useState } from 'react'

//Image is placeholder for now
//Placeholder text will be from the plant selection for now


const NewPlantForm = () => {

    const capsicum = require('../assets/Capsicum_StockProduce.png')

     //Picker
     const [days, setSelectedDays] = useState();

    return (
        <View style={styles.container}>
          <H1>New Plant Type</H1>
          <View style={styles.imageContainer}>
            <Camera />
          </View>
          <Fieldset title="name: ">
            <View>
              <TextInput
                placeholder='e.g. "beefsteak tomato" or "golden pothos"'
              />
            </View>
          </Fieldset>
          <Fieldset title="status effect:">
              <View style={styles.pickerContainer}>
                  <H2>water: </H2>
                  <Text>every </Text>
                  <Picker
                      style={styles.picker}
                      selectedValue={days}
                      onValueChange={(itemValue, itemIndex) =>
                          setSelectedDays(itemValue)
                      }>
                      <Picker.Item label="1" value="1" />
                      <Picker.Item label="2" value="2" />
                      <Picker.Item label="3" value="3" />
                      <Picker.Item label="4" value="4" />
                      <Picker.Item label="5" value="5" />
                      <Picker.Item label="6" value="6" />
                      <Picker.Item label="7" value="7" />
                      <Picker.Item label="8" value="8" />
                      <Picker.Item label="9" value="9" />
                      <Picker.Item label="10" value="10" />
                      <Picker.Item label="11" value="11" />
                      <Picker.Item label="12" value="12" />
                      <Picker.Item label="13" value="13" />
                      <Picker.Item label="14" value="14" />
                      <Picker.Item label="15" value="15" />
                      <Picker.Item label="16" value="16" />
                      <Picker.Item label="17" value="17" />
                      <Picker.Item label="18" value="18" />
                      <Picker.Item label="19" value="19" />
                      <Picker.Item label="20" value="20" />
                      </Picker>
                  <Text> days.</Text>
              </View>
              <View style={styles.pickerContainer}>
                  <H2>fertilize: </H2>
                  <Text>every </Text>
                  <Picker
                      style={styles.picker}
                      selectedValue={days}
                      onValueChange={(itemValue, itemIndex) =>
                          setSelectedDays(itemValue)
                      }>
                      <Picker.Item label="1" value="1" />
                      <Picker.Item label="2" value="2" />
                      <Picker.Item label="3" value="3" />
                      <Picker.Item label="4" value="4" />
                      <Picker.Item label="5" value="5" />
                      <Picker.Item label="6" value="6" />
                      <Picker.Item label="7" value="7" />
                      <Picker.Item label="8" value="8" />
                      <Picker.Item label="9" value="9" />
                      <Picker.Item label="10" value="10" />
                      <Picker.Item label="11" value="11" />
                      <Picker.Item label="12" value="12" />
                      <Picker.Item label="13" value="13" />
                      <Picker.Item label="14" value="14" />
                      <Picker.Item label="15" value="15" />
                      <Picker.Item label="16" value="16" />
                      <Picker.Item label="17" value="17" />
                      <Picker.Item label="18" value="18" />
                      <Picker.Item label="19" value="19" />
                      <Picker.Item label="20" value="20" />
                      </Picker>
                  <Text> days.</Text>
              </View>
          </Fieldset>
        </View>
  )
}

export default NewPlantForm

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
    // image: {
    //   resizeMode: 'cover',
    //   width: '100%',
    //   height: '100%',
    // },

    
})