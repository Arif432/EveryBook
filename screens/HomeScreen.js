import { ScrollView, View } from 'react-native';
import React, {useEffect, useState} from 'react';
import InputComponent from '../components/input/InputComponent';
import BooksNamesFlatList from '../components/BooksNamesFlatList';
import useGetApiCustomHook from '../customHooks/GetApiHook';
import { async } from '@firebase/util';
import NewReleasesCard from '../components/cards/NewReleasesCard';
import AuthorCard from '../components/cards/AuthorCard';

const HomeScreen = ({navigation}) => {
  const [books,authors, setLink] = useGetApiCustomHook()

  console.log("author", authors);



  // async function saveDataToLocalDb(){

  //   await AsyncStorage.setItem("myBooks", JSON.stringify(books));
  //   console.log("Data saved to local db")
  // }

  // async function loadDataFromLocalDb(){
  //   let data = await AsyncStorage.getItem("myBooks");
  //   setLocalBooks(JSON.parse(data));
  //   console.log("Data loaded from local db")
  // }

  // useEffect(() => {
  //   saveDataToLocalDb();
  // }, [])

  // useEffect(()=>{
  //   loadDataFromLocalDb();
  // },[])
  
  return (
    <ScrollView>
      <View className="flex-1">
        <InputComponent icon={"search"} placeholder="search item"/>
        <View>
          <BooksNamesFlatList
              data={books}
              renderItem={({ item }) => <NewReleasesCard item={item} navigation={navigation} />}
              title={'Category 1'}
              description={'desc1'}
            />
        </View>

        <View> 
          <BooksNamesFlatList
              data={authors}
              renderItem={({ item }) => <AuthorCard item={item} navigation={navigation} />}
              title={'Category 3'}
              description={'desc3'}
            />
        </View>
        
      </View>
    </ScrollView>
  );
}

export default HomeScreen
