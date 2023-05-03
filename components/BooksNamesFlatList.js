import React from 'react';
import { View, Text, FlatList } from 'react-native';
import AuthorCard from './cards/AuthorCard';
import NewReleasesCard from './cards/NewReleasesCard';
import TitleDescription from './TitleDescription';

const BooksNamesFlatList = ({data,renderItem,title, description}) => {
  return (
    <View>
      <TitleDescription title={title} description={description}/>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
      />
      </View>
    
    )
  
};
BooksNamesFlatList.defaultProps = {
  data: [],
  renderItem: () => null,
};

export default BooksNamesFlatList