import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Image,
    ScrollView,
  } from "react-native";
  import { NavigationContainer } from "@react-navigation/native";
  import { createStackNavigator } from "@react-navigation/stack";
  
  import { SearchBar } from "../fields/SearchBar";
  import { TitleBarRegular } from "../titlebars/TitleBarRegular";
  import { useEffect, useState } from "react";
  import { IconButton } from "@react-native-material/core";
  import Icon from "@expo/vector-icons/MaterialCommunityIcons";
  import { SquareButton } from "../buttons/SquareButton";
  import { Details } from "./Details";
  import { Search } from "./Search";
  import axios from 'axios';
  import {app} from "./firebase";
  import { getDatabase, ref, onValue, set, update } from "firebase/database";
  
  import AsyncStorage from "@react-native-async-storage/async-storage";
  
  import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    onSnapshot,
    doc,
    deleteDoc,
    updateDoc,
    query,
    where,
  } from "firebase/firestore";
  
  const Stack = createStackNavigator();
  
  const HomeRoot = () => {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Details" component={Details}/>
          <Stack.Screen name="Search" component={Search}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  function Home({navigation}) {
  
    const [myburgers, setMyburgers] = useState([])
  
    const getBurgers = async () => {
    
    var myURL = 'https://reactnative.dev/movies.json'
    axios.get(myURL)
    .then(function (response) {
      console.log("response.data==", response.data);
      // setMyburgers(response.data.movies);
    })
    .catch(function (error) {
      console.log(error);
    });
  
    };
  
    useEffect(()=>{
  
    const db = getDatabase(app)
    var index = 0
    var refData = "alldeals/" + index
    const dbRefForUpdate = ref(db, refData)
    update(dbRefForUpdate, {isliked:false})
  
      AsyncStorage.getItem("myuser").then((data) => {
        let newData = JSON.parse(data);
        console.log("Check User Data == ", newData.email);
        });
      
      const dbFS = getFirestore();
      const snapshot = collection(dbFS, 'food');
      
      const q = query(snapshot, ref)
  
      onSnapshot(q, snapshot=>{
  
        snapshot.docs.map(doc=>{
          console.log(doc.data())
        })
      })
  
  
      addDoc(snapshot, 
        {
          isliked:false, 
          key:4, 
          title:'BCS 1', 
          desc:'Best 1'
        }
      )
  
      updateDoc(doc(dbFS, "food", "1CbHHm2ujRGmvOMIWdZx"), {
        isliked:false
      }).then(()=>{
        console.log("Data updated successfully!");
      }).catch((err)=>{
        console.log(err)
      })
  
    },[])
  
    
  
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#fafbff" }}>
  
        <View style={{ marginLeft: 20, flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 0.8 }}>
            <SearchBar label="Search your favorite food" isTextInputDisabled={true} onClick={()=>{navigation.navigate('Search')}}/>
          </View>
  
          <FlatList
            data={categories}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <CategoryCard item={item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
  
        <View
          style={{
            marginLeft: 20,
            flex: 0.05,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{ fontFamily: "Poppins-SemiBold", fontSize: 18, flex: 0.8 }}
          >
            Popular Food
          </Text>
          <TouchableOpacity style={{ flex: 0.2 }}>
            <Text style={{ fontFamily: "Poppins", fontSize: 14 }}>See All</Text>
          </TouchableOpacity>
        </View>
  
        <View
          style={{
            flex: 0.5,
            marginLeft: 20,
            alignItems: "center",
            marginBottom: 20,
            marginTop: 16,
          }}
        >
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={menuItems}
            renderItem={({ item }) => (
              <BurgerCard burger={item} navigation={navigation}/>
            )}
            keyExtractor={(item) => item.key}
          />
        </View>
  
        <View
          style={{
            marginLeft: 20,
            flex: 0.05,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{ fontFamily: "Poppins-SemiBold", fontSize: 18, flex: 0.8 }}
          >
            Best Seller
          </Text>
          <TouchableOpacity style={{ flex: 0.2 }}>
            <Text style={{ fontFamily: "Poppins", fontSize: 14 }}>See All</Text>
          </TouchableOpacity>
        </View>
  
        <View style={{ flex: 0.2, margin: 20, marginBottom: 20 }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={myburgers}
            renderItem={({ item }) => (
              <BestSellerCard burger={item} navigation={navigation} setMenuItems={setMenuItems} />
            )}
            keyExtractor={(item) => item.key}
          />
        </View>
      </ScrollView>
    );
  }
  
  const CategoryCard = ({ item }) => {
    return (
      <TouchableOpacity>
        <View
          style={{
            backgroundColor: "#fff",
            height: 50,
            width: 140,
            margin: 12,
            borderRadius: 10,
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Image source={item.img} style={{ width: 40, height: 40 }} />
          <Text
            style={{ marginLeft: 12, fontFamily: "Poppins-Bold", fontSize: 16 }}
          >
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  
  const BurgerCard = ({ burger, navigation }) => {
    return (
      <TouchableOpacity onPress={()=>{navigation.navigate('Details', {item: burger})}}>
        <View
          style={{
            flex: 1,
            width: 160,
            height: 210,
            backgroundColor: "white",
            margin: 8,
            borderRadius: 12,
          }}
        >
          <View
            style={{ flex: 0.28, alignItems: "center", justifyContent: "center" }}
          >
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View
                style={{
                  margin: 12,
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Icon
                  name="star-outline"
                  style={{ fontSize: 20, color: "orange", flex: 0.32 }}
                />
                <Text style={{ fontSize: 16, fontFamily: "Poppins" }}>
                  {burger.rating}
                </Text>
              </View>
  
              <IconButton
                color="white"
                icon={(props) => (
                  <Icon
                    name="heart"
                    color={burger.isLiked ? "red" : "grey"}
                    style={{ fontSize: 24 }}
                  />
                )}
              />
            </View>
          </View>
  
          <View
            style={{ flex: 0.6, alignItems: "center", justifyContent: "center" }}
          >
            <Image
              source={burger.img_src}
              style={{
                width: 80,
                height: 80,
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          </View>
  
          <View style={{ flex: 0.4, marginTop: 10 }}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                fontFamily: "Poppins-SemiBold",
              }}
            >
              {burger.title}
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                marginTop: 4,
                marginBottom: 16,
                color: "grey",
                fontFamily: "Poppins",
              }}
            >
              {burger.price}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  
  const BestSellerCard = ({ burger, navigation }) => {
  
    // console.log('YES Burger', burger)
    onDetailScreen=(item)=>{
      console.log('Clicked', item.key)
    }
  
    return (
      <TouchableOpacity onPress={()=>{onDetailScreen(burger)}}>
        <View
          style={{
            flex: 1,
            height: 100,
            backgroundColor: "#fff",
            borderRadius: 10,
            margin: 8,
            flexDirection: "row",
            padding: 12,
          }}
        >
          <View
            style={{ flex: 0.25, alignItems: "center", justifyContent: "center" }}
          >
            
            <Image
              source={{uri:burger.img}}
              style={{ width: 60, height: 60, marginLeft: 16 }}
            />
  
          </View>
  
          <View
            style={{
              flex: 0.55,
              alignContent: "center",
              padding: 12,
              marginLeft: 16,
            }}
          >
            <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 18 }}>
              {burger.title}
            </Text>
            
            <Text style={{ fontFamily: "Poppins", fontSize: 16 }}>
              {burger.releaseYear}
            </Text>
          </View>
  
      </TouchableOpacity>
    );
  };
  
  export { HomeRoot };