import React from 'react';
import { View, Text, FlatList } from 'react-native';
import NewRelaeasesCard from './NewReleasesCard';
import TitleDescription from './TitleDescription';

const BooksNamesFlatList = ({ data ,title, description}) => {
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
            price={item.price}/>

          </View>
        )}
      />
    </View>
  );
  
};

export default BooksNamesFlatList