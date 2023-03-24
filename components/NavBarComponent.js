import { View, Text } from 'react-native'
import React from 'react'

const NavBarComponent = ({label,heading,info}) => {
  return (

    <View>
      <View>
        <Text className="text-xl font-bold m-3 mb-0">{label}</Text>
      </View>

      <View className="mt-2">
        <Text className="text-center text-xl font-light">{heading}</Text>
        <Text className="text-center text-sm text-[#95999D] ">{info}</Text>
      </View>
      
    </View>
  )
}

export default NavBarComponent 