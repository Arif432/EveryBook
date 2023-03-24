import React from 'react';
import { View, Text, FlatList } from 'react-native';
import NewRelaeasesCard from './NewReleasesCard';
import TitleDescription from './TitleDescription';

const BooksNamesFlatList = ({ data ,title, description}) => {
  console.log("data ara ha => ",data);
  return (
    <View>
      <TitleDescription title={title} description={description}/>
      <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <View>

            <NewRelaeasesCard
            src={item.img}
            title={item.title} 
            price={item.price}
            likes={item.liked}
            id={item.key}
            />
          </View>
        )}
      />
    </View>
  );
  
};

export default BooksNamesFlatList