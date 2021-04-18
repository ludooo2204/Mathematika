import React, { useEffect, useState } from 'react';

import {
    View,
    TextInput,
    StyleSheet,
    Image,
    FlatList,
    TouchableOpacity,
  } from 'react-native';
  import styles from './styles'
export default function Gif({sujetGif}) {
    const [gifs, setGifs] = useState([]);
    // const [term, updateTerm] = useState('');
    
  async function fetchGifs() {
    try {
      const API_KEY = '0QfmpS6iiPES7vNCLxxDV91CBzxK35iV';
      const BASE_URL = 'http://api.giphy.com/v1/gifs/search';
      const term=sujetGif
      const resJson = await fetch(
        // `${BASE_URL}?api_key=${API_KEY}&q=dog&offset=100`,
        `${BASE_URL}?api_key=${API_KEY}&q=${term}&offset=100`,
      );
      const res = await resJson.json();

      setGifs(res.data);
    } catch (error) {
      console.warn(error);
    }
  } /// add facebook fresco

  function onEdit(newTerm) {
    // updateTerm(newTerm);
    fetchGifs();
  }
  useEffect(()=>{console.log("useeffect GIF",sujetGif); fetchGifs()},[])
  // onEdit(sujetGif)
  console.log("GIF",sujetGif)

    return (
        <>
{/* <TextInput
          placeholder="Search Giphy"
          placeholderTextColor="#f0f"
          style={styles.textInput}
          onChangeText={text => console.log(text)}

        /> */}

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

      </>
    )

    
}

