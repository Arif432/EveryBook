import { useState, useEffect } from 'react';
import app from './firebase';
import {ref , getDatabase , onValue} from "firebase/database"


const useGetApiCustomHook = () => {
  const [books, setBooks] = useState([]);
  const [authors ,setAuthors] =useState([])

  useEffect(() => {
    const db = getDatabase(app)
    const dbRef = ref(db,"books")
    const authorsRef = ref(db,"authors")

    onValue(dbRef , (snapshot)=>{
      let data = snapshot.val()
      setBooks(data)
    })

    onValue(authorsRef, (snapshot)=>{
      let authors = snapshot.val()
      setAuthors(authors)
    })
  }, []);

  return [books,authors];
};

export default useGetApiCustomHook;



// import { useState, useEffect } from 'react';
// import app from './firebase';
// import {ref , getDatabase , onValue} from "firebase/database"
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import isEqual from 'lodash/isEqual';


// const GetApiCustomHook = () => {

//   const [books, setBooks] = useState([]);

//   // const [local, setLocal] = useState([])

//   // async function getDataFromLocalDb(){
//   //   let data = await AsyncStorage.getItem("books")
//   //   //console.log("Old-> ", JSON.parse(data))

//   //   setLocal(JSON.parse(data))
//   // }

  
//     // useEffect(() => {

//     //   getDataFromLocalDb()
//     //   console.log("old->", local)

//     //   if (isEqual(books, local)){

//     //     setBooks(local)
//     //     console.log("Local data reused")
//     //   }

//     //   else{
//     //     const db = getDatabase(app);
//     //     const dbRef = ref(db,"books");

//     //     onValue(dbRef, async (snapshot) => {
//     //       let data = snapshot.val();
//     //       setBooks(data);
//     //       console.log("New data received")

        
//     //     try {
//     //       await AsyncStorage.setItem('books', JSON.stringify(data));
//     //     } catch (error) {
//     //       console.error(error);
//     //     }
      
      
//     //   });


//     // }

//     //   // retrieve data from AsyncStorage
//     //   async function retrieveData() {
//     //     try {
//     //       const value = await AsyncStorage.getItem('books');
//     //       if (value !== null) {
//     //         setBooks(JSON.parse(value));
//     //       }
//     //     } catch (error) {
//     //       console.error(error);
//     //     }
//     //   }
//     //   retrieveData();
//     // }, []);
  
//     // return [books];
//   };


// export default GetApiCustomHook;
