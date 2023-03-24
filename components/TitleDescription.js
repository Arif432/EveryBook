import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'


const TitleDescription = ({title ,description}) => {
  return (
    <View>
        <View className="flex-row px-4 mt-4 justify-between items-center">
            <Text className="font-bold text-lg">
                {title}
            </Text>

            <TouchableOpacity>
                <Icon
                name={'arrow-forward'}
                size={28}
                color="#67B7F4"/>
            </TouchableOpacity>
                
        </View>

        <Text className="text-gray-400 text-sm px-4 mb-1 mt-[-2]">{description}</Text>
  </View>
  )
}

export default TitleDescription