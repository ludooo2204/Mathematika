import React, { useState } from 'react';

import {
    View,
    TextInput,
    StyleSheet,
    FlatList,
    Text,
    Button,
    Dimensions,
    Image,
    TouchableOpacity,
  } from 'react-native';
export default function Gif() {
    const [gifs, setGifs] = useState([]);
    const [term, updateTerm] = useState('');
    
  async function fetchGifs() {
    try {
      const API_KEY = '0QfmpS6iiPES7vNCLxxDV91CBzxK35iV';
      const BASE_URL = 'http://api.giphy.com/v1/gifs/search';
      const resJson = await fetch(
        `${BASE_URL}?api_key=${API_KEY}&q=${term}&offset=100`,
      );
      const res = await resJson.json();
      // console.log((res.data))
      // console.log(Object.keys(res.data[0]))
      setGifs(res.data);
    } catch (error) {
      console.warn(error);
    }
  } /// add facebook fresco

  function onEdit(newTerm) {
    updateTerm(newTerm);
    fetchGifs();
  }


    return (
        <>
<TextInput
          placeholder="Search Giphy"
          placeholderTextColor="#f0f"
          style={styles.textInput}
          onChangeText={text => onEdit(text)}
          // onSubmitEditing=
        />

        {gifs.length > 0 && (
            <Image
              resizeMode="contain"
              style={styles.image}
              source={{uri: gifs[0].images.original.url}}
              source={{
                uri: gifs[Math.round(Math.random() * 50)].images.original.url,
              }}
            />
          )}

             {/* <FlatList
        data={gifs}
        renderItem={({item}) => (
          <Image
            resizeMode='contain'
            style={styles.image}
            source={{uri: item.images.original.url}}
          />
        )}
      /> */}
      </>
    )

    
}

const styles = StyleSheet.create({
    view: {
      flex: 1,
      // alignItems: 'center',
      // padding: 5,
      // backgroundColor: 'darkblue',
    },
    textInput: {
      // width: '100%',
      height: 50,
      color: 'black',
    },
    image: {
      // width: 400,
      height: 300,
      borderWidth: 3,
      marginBottom: 5,
    },
  });