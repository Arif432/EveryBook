import { useState, useEffect } from 'react';
import axios from 'axios';
import app from './firebase';
import {ref , getDatabase , onValue} from "firebase/database"


const GetApiCustomHook = (link) => {
  const [books, setBooks] = useState([]);

  // const getBooks = async () => {
  //   try {
  //     const response = await axios.get(link);
      
  //     // console.log("response.data==", response.data);
  //     setBooks(response.data.movies);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    const db = getDatabase(app)
    const dbRef = ref(db,"books")
    console.log("recieve");
  
    onValue(dbRef , (snapshot)=>{
      let data = snapshot.val()
      setBooks(data)
      console.log("testy");
      console.log("books data =>" , data);
    })
    // getBooks();
    
  
  }, []);

  return [books];
};

export default GetApiCustomHook;
