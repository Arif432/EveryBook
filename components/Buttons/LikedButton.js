import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import app from '../../customHooks/firebase';
import { ref, getDatabase, update , set, push ,arrayUnion,child,get} from 'firebase/database';
import { Icon } from '@rneui/themed';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



const LikedButton = ({ id }) => {
  const [isLiked, setIsLiked] = useState(false);
  const db = getDatabase();
  const auth = getAuth();

  useEffect(() => {
    const dbRef = ref(db, `books/${id}`);
    const likedByRef = child(dbRef, `likedBy/${auth.currentUser.uid}`);
    get(likedByRef).then(snapshot => {
      setIsLiked(snapshot.exists());
    }).catch(error => {
      console.error(error);
    });
  }, [db, id, auth]);

  const handleLike = () => {
    const dbRef = ref(db, `books/${id}`);
    const likedByRef = child(dbRef, `likedBy/${auth.currentUser.uid}`);
    get(likedByRef).then(snapshot => {
      const isCurrentUserLiked = snapshot.exists();
  
      if (!isCurrentUserLiked) {
        // Add the user ID to the likedBy array
        set(likedByRef, true);
        setIsLiked(true);
      } else {
        // Remove the user ID from the likedBy array
        set(likedByRef, null);
        setIsLiked(false);
      }
    }).catch(error => {
      console.error(error);
    });
  };
  
  return (
    <View>
      <TouchableOpacity onPress={handleLike}>
        <Icon
          type='entypo'
          name='heart'
          size={24}
          color={isLiked ? 'red' : 'gray'}
          style={{ opacity: isLiked ? 1 : 0.5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default LikedButton;
