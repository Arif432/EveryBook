import React from 'react'
import { View } from 'react-native';
import { Input } from 'react-native-elements';
import { Icon } from '@rneui/themed'

const InputComponent = ({placeholder, icon ,password, onChangeText}) => {
  return (
    <View 
    className="h-14 text-sm justify-center text-center m-2 pt-6 pl-2 mr-4 ml-4 rounded-lg bg-white">

       <Input
        className="ml-2"
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={password ? true : false}
        inputContainerStyle={{borderBottomWidth:0}}

        leftIcon={
          <Icon
          name={icon}
          size={28}
          color="#67B7F4"
    />
  }
        /> 

    </View>
   
        
  )
}

export default InputComponent 
