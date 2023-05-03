import { View, Text ,TouchableOpacity, Image} from 'react-native'
import React from 'react'

const AuthorCard = ({navigation,item}) => {

    const heading = "Introduction of Author"

    const {name,intro,authImg} = item

    const DetailsNav = () => {
        const params = {
          name,
          authImg,
          intro,
          heading
        };
        navigation.navigate('DetailScreen', params);
      };
    

    return (
        <View className="flex-1">
          <TouchableOpacity
            onPress={()=>DetailsNav()}
            className="bg-white shadow-sm mr-3 ml-3 rounded-md w-44 h-20 flex-row items-center justify-center">
            <Image
              className="w-20 h-16 rounded-sm ml-4 pr-2"
              source={{ uri: authImg}}
            />
    
            <View className="px-3">
              <Text className="text-base font-light">{name}</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
}

export default AuthorCard