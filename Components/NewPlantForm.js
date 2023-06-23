import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import { useForm, Controller } from "react-hook-form";
import React from 'react'

//Image is placeholder for now

const NewPlantForm = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm({})
    
     const onSubmit = (data) => console.log(data)

    return (
        <View>
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
      {errors.firstName && <Text>This is required.</Text>}

        </View>
        <View>
            <Text>status effects:</Text>
        </View>
        <View>
            <Text>life cycle:</Text>
        </View>
        </View>
  )
}

export default NewPlantForm

const styles = StyleSheet.create({})