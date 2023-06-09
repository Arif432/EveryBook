import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';

const CarouselCardItem = ({ item }) => {
  return (
    <TouchableOpacity style={{height:'50%' ,width:"100%",marginTop:10,padding:20}} onPress={()=>alert(item)}>
      <Image
        source={{ uri: item }}
        style={{height:300}}
        resizeMethod="resize"
      />
    </TouchableOpacity>
  );
};



export default CarouselCardItem;
