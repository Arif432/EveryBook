import React from 'react';
import { View, Text, FlatList } from 'react-native';
import NewReleasesCard from './cards/NewReleasesCard';
import TitleDescription from './TitleDescription';

const BooksNamesFlatList = ({navigtion, data ,title, description}) => {
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

            <NewReleasesCard
            
            item={item}
            navigation={navigtion}
            />
          </View>
        )}
      />
    </View>
  );
  
};

export default BooksNamesFlatList