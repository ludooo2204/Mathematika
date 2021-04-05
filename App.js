import React, {useState} from 'react';
import {View, TextInput, StyleSheet, FlatList,Button, Image} from 'react-native';
import Multiplication from  './components/multiplication'
import Division from  './components/division'
import { Formik } from 'formik';
// do not forget to add fresco animation to build.gradle

export default function App() {
  const [gifs, setGifs] = useState([]);
  const [term, updateTerm] = useState('');
  const [result, setResult] = useState('');
  const [resultProps, setResultProps] = useState('');
  const handleValidate =() =>{
    console.log("validate",result)
    setResultProps(result)
    
   
  }
  async function fetchGifs() {
    try {
      const API_KEY = "0QfmpS6iiPES7vNCLxxDV91CBzxK35iV";
      const BASE_URL = 'http://api.giphy.com/v1/gifs/search';
      const resJson = await fetch(`${BASE_URL}?api_key=${API_KEY}&q=${term}&offset=100`);
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
    <View style={styles.view}>
   
       <View>
         <TextInput style={{backgroundColor:"white"}}
         placeholder="c'est ici"
         keyboardType="numeric"
           onChangeText={setResult}
          //  onBlur={handleBlur('email')}
          onSubmitEditing={e=>handleValidate(e)}
          value={result}
           
         />
                  {/* <Button onPress={handleSubmit} title="Submit" /> */}
       </View>
    
      {/* <TextInput
        placeholder="Search Giphy"
        placeholderTextColor='#fff'
        style={styles.textInput}
        onChangeText={(text) => onEdit(text)}
        // onSubmitEditing=
      /> */}
      <Multiplication input={resultProps} />
      {/* <Division /> */}
      {console.log("gifs",gifs)}
      {gifs.length>0&&<Image
            resizeMode='contain'
            style={styles.image}
            source={{uri: gifs[0].images.original.url}}
            // source={{uri: gifs[Math.round(Math.random()*50)].images.original.url}}
          />}
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
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'darkblue'
  },
  textInput: {
    width: '100%',
    height: 50,
    color: 'white'
  },
  image: {
    width: 400,
    height: 450,
    borderWidth: 3,
    marginBottom: 5
  },
 
});