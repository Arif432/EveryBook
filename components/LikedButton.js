import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import app from './CustomHooks/firebase';
import { ref, getDatabase, update } from 'firebase/database';
import { Icon } from '@rneui/themed';

const LikedButton = ({ like, id }) => {
  const [isLiked, setIsLiked] = useState(like);
  const db = getDatabase(app);

  const handleLike = () => {
    const dbRef = ref(db, `books/${id}`);
    setIsLiked(!isLiked);
    update(dbRef, { liked: !isLiked });
  };

  return (
    <View>
      <TouchableOpacity onPress={handleLike}>
        <Icon
          type='entypo'
          name={'heart'}
          size={24}
          color={isLiked ? 'red' : 'gray'}
          style={{ opacity: isLiked ? 1 : 0.5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default LikedButton;
