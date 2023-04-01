import {Text,TouchableOpacity } from 'react-native'
import React from 'react'

const PrimaryButtonComponent = ({label,navigation,screen,loginSuccess,onPress = () => {}}) => {
  return (
    <TouchableOpacity 
          className="bg-[#67B7F4] h-14 justify-center m-4 rounded-lg"
          onPress={() => {
            if (loginSuccess) {
              navigation.navigate({name : screen})
            }
          onPress()
          }
        }>
      
      <Text className="text-center text-white text-xl font-light">{label}</Text>
    
    </TouchableOpacity>
  )
}

export default PrimaryButtonComponent