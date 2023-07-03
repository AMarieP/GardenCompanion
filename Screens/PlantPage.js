import { StyleSheet, View, ScrollView, Image, Dimensions, Pressable } from 'react-native';
import MyText from '../Components/MyText';
import H1 from '../Components/H1';
import H2 from '../Components/H2'
import Fieldset from '../Components/Fieldset';
import { React, useEffect, useContext } from 'react'
import { PlantContext } from '../Context/PlantCard';
import colours from '../colours';

const PlantPage = ({navigation}) => {

  const [plantContext, setPlantContext] = useContext(PlantContext)
  console.log(plantContext.plant_image)


    return (
      <ScrollView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
        <Image
        source={{uri: plantContext.plant_image}} style={styles.image}/>
        </View>
        <Fieldset title="name: ">
          <View>
            <H1>{plantContext.plant_name}</H1>
          </View>
        </Fieldset>
        <Fieldset title="status effect:">
            <View style={styles.pickerContainer}>
                <H2>water: </H2>
                <MyText> every {plantContext.plant_water_schedule} days.</MyText>
            </View>
        </Fieldset>
        <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }, styles.back]}onPress={() => navigation.goBack()} ><MyText style={{color: 'oldlace'}}>go back</MyText></Pressable>
      </View>
      </ScrollView>
)
}

export default PlantPage

const styles = StyleSheet.create({
  main:{
    backgroundColor: 'white',
    paddingTop: 5,
    alignContent: 'center',
    marginHorizontal: 5
  },
  pickerContainer: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 10
  },
  container: {
    width: '100%',
    alignContent: 'center'
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1,
    marginBottom: 13,
    borderWidth: 1,
    borderRadius: 15,
    overflow: 'hidden'
  },
  input: {
    padding: 10,
    width: '100%',
    fontSize: 18
  },
  back:{
    height: 30,
    width: '100%',
    marginVertical: 5,
    borderColor: colours.red,
    borderWidth: 1,
    backgroundColor: colours.redLight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
},

  
})