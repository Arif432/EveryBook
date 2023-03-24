import { useState, useEffect } from 'react';
import app from './firebase';
import {ref , getDatabase , onValue} from "firebase/database"


const GetApiCustomHook = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const db = getDatabase(app)
    const dbRef = ref(db,"books")
    onValue(dbRef , (snapshot)=>{
      let data = snapshot.val()
      setBooks(data)
    })
  }, []);

  return [books];
};

export default GetApiCustomHook;
