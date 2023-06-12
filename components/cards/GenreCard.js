import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

const GenreCard = ({ item }) => {
  console.log("item", item);

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={() => console.log("Card pressed")}>
      <ImageBackground source={{ uri: item.image }} style={styles.imageBackground}>
        <View style={styles.container}>
          <View style={styles.textBackground}>
            <Text style={styles.genreText}>{item.genre}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    height: 200,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  textBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Background color with opacity
    padding: 10,
    borderRadius: 5,
  },
  genreText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default GenreCard;

