import { View, Text,TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const SecondaryButtonComponent = ({label ,navigation,border, extraText,screen}) => {

    if(border){
    return (

      <TouchableOpacity className="border border-white h-14 justify-center m-4 rounded-lg"
           onPress={()=>navigation.navigate("SignupScreen")}>
            <Text className="text-center text-white text-xl font-light">{label}</Text>
      </TouchableOpacity>
  )
    }

    else {

        return(
         
         <View className="flex-row justify-center">
            <Text className=" text-[#a2a5a7] text-sm font-light">{extraText} </Text>
         
            <TouchableOpacity
            onPress={()=>navigation.navigate({name:screen})}>
            <Text className="text-[#a2a5a7] text-md font-light"> {label}</Text>
            </TouchableOpacity>
         
          </View>
        )
    }
}

export default SecondaryButtonComponent