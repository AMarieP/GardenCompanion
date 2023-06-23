import { StyleSheet, View, Image, TextInput } from 'react-native';
import Text from './MyText';
import { useForm, Controller } from "react-hook-form";
import {Picker} from '@react-native-picker/picker';
import { React, useState } from 'react'

//Image is placeholder for now

const NewPlantForm = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm({})
    
     const onSubmit = (data) => console.log(data)

     //Picker
     const [days, setSelectedDays] = useState();

    return (
        <View style={{backgroundColor: 'pink'}}>
        <Text>New Plant Type</Text>
        <Image />
        <View>
            <Text>name:</Text>
            <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 5
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder='e.g. "beefsteak tomato" or "golden pothos"'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="plantName"
      />
        </View>
        <View>
            <Text>status effects:</Text>
            <View style={styles.pickerContainer}>
                <Text>water: </Text>
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
        </View>
        </View>
  )
}

export default NewPlantForm

const styles = StyleSheet.create({
    pickerContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: "center"
    },
    picker: {
        width: 100,
        height: 10,
        borderWidth: 5,
        borderColor: 'blue',
        fontFamily: 'Ovo_400Regular',
    },
    
})