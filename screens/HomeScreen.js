import { ScrollView, View } from 'react-native';
import React from 'react';
import InputComponent from '../components/InputComponent';
import BooksNamesFlatList from '../components/BooksNamesFlatList';
import GetApiCustomHook from '../components/CustomHooks/GetApiCustomHook';

const HomeScreen = () => {
  const [books] = GetApiCustomHook()

  return (
    <ScrollView>
      <View className="flex-1">
        <InputComponent icon={"search"} placeholder="search item"/>
        <View>
          <BooksNamesFlatList data={books} title={"Category 1"} description={"desc1"} />
        </View>
        {/* <View>
          <BooksNamesFlatList data={books} title={"Category 2"} description={"desc1"}   />
        </View>
        <View>
          <BooksNamesFlatList data={books} title={"Category 3"} description={"desc1"}  />
        </View>
         */}
      </View>
    </ScrollView>
  );
}

export default HomeScreen
