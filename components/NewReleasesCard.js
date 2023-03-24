import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Icon } from '@rneui/themed'
import { PricingCard } from '@rneui/themed';
import LikedButton from './LikedButton';

const NewReleasesCard = ({title , price ,src ,likes ,id}) => {

  return (
    <View className="flex-1">
    <TouchableOpacity 
    className="bg-white shadow-sm mr-3 ml-3 rounded-lg w-52 h-full">
        
        <Image 
            className="w-52 h-36 rounded-t-lg"
            source={{uri:src}} />

        <View className="px-3 pb-4">
            <Text className="text-lg font-semibold pt-1">{title}</Text>

            <View className="flex-row items-center space-x-1">

                <Icon
                name={'star'}
                size={20}
                color="#67B7F4"/>
                
                {/* <StarIcon opacity={0.5} size={20} color="green" className="items-center" /> */}
                <Text className="text-sm text-gray-500">
                    <Text className="text-[#67B7F4]">4.3</Text> .  
                    available
                </Text>
            </View>

            <View className="flex-row items-center space-x-1">
                {/* <MapPinIcon opacity={0.4} size={22} color="gray"/> */}
                <Text className="text-lg text-[#67B7F4] flex-1">Rs {price}</Text>

                <LikedButton like={likes} id={id}/>

            </View>
        </View>
    </TouchableOpacity>
    </View>
  )
}

export default NewReleasesCard