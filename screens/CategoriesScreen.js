import React from 'react';
import { View, Text, FlatList } from 'react-native';
import useGetApiCustomHook from '../customHooks/GetApiHook';
import GenreCard from '../components/cards/GenreCard';
import InputComponent from '../components/input/InputComponent';

const CategoriesScreen = () => {
  const [, , genres] = useGetApiCustomHook();
  console.log('genres', genres);

  const renderItem = ({ item }) => {
    return <GenreCard item={item} />;
  };

  return (
    <View className="flex-1">
      <InputComponent icon={"search"} placeholder="search Genre"/>
      <FlatList
        data={genres}
        renderItem={renderItem}
        keyExtractor={(item) => item.key.toString()} // Add a keyExtractor to avoid key warnings
      />
    </View>
  );
};

export default CategoriesScreen;
