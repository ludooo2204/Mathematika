import React, {useState} from 'react';
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
import Multiplication from './components/multiplication';
import Division from './components/division';
import {FlatGrid} from 'react-native-super-grid';
import ThemeContext from './components/Context';
// do not forget to add fresco animation to build.gradle

export default function App() {
  const [gifs, setGifs] = useState([]);
  const [term, updateTerm] = useState('');
  const [result, setResult] = useState('');
  const [theme, setTheme] = useState('light');
  const [test, setTest] = useState(0);
  const [arrayResult1, setArrayResult1] = useState([]);
  const [arrayResult2, setArrayResult2] = useState([]);
  const [arrayResult3, setArrayResult3] = useState([]);
  const [resultProps, setResultProps] = useState('');

  const windowWidth = Dimensions.get('window').width;
  const choixNbrDigit1 = 3;
  const choixNbrDigit2 = 3;
  const nombre1 = Math.round(Math.random() * Math.pow(10, choixNbrDigit1));
  const nombre2 = Math.round(Math.random() * Math.pow(10, choixNbrDigit2));
  console.log(nombre1);
  console.log(Math.pow(10, choixNbrDigit1));
  // const nombre2 = 245;

  // const nombre1 = 125454;
  // const nombre2 = 245;

  let nombreString1 = nombre1.toString().split('');
  let nombreString2 = nombre2.toString().split('');
  const nbrChiffre1 = nombreString1.length;
  const nbrChiffre2 = nombreString2.length;
  const diff = Math.abs(nbrChiffre2 - nbrChiffre1);

  console.log('nbr de chiffre pour le 1', nbrChiffre1, '=>', nombreString1);
  console.log('nbr de chiffre pour le 2', nbrChiffre2, '=>', nombreString2);
  console.log('diff ', diff);
  for (let i = 0; i < diff; i++) {
    nombreString2.unshift('');
  }
  console.log('nbrString2', nombreString2);
  // nombreString2.unshift('');
  nombreString2.unshift('X');
  nombreString1.unshift('');
  console.log('nbrString2', nombreString2);

  console.log(nbrChiffre2);

  const handleValidate = () => {
    console.log('validate', result);
    setResultProps(result);
  };
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

  const contextValue = {
    theme: theme, //ou juste theme,
    updateTheme: setTheme,
    test,
    setTest,
  };
  return (
    <ThemeContext.Provider value={contextValue}>
      <View style={styles.view}>
        <View>
          <Button title="change le theme" onPress={() => setTheme('Dark')} />
          <View
            style={{
              alignItems: 'flex-end',
              // backgroundColor: 'green',
              height: (windowWidth * 0.98) / nombreString2.length,
            }}>
            <FlatGrid
              itemDimension={(windowWidth * 0.98) / nombreString2.length}
              data={nombreString1}
              fixed
              // style={{}}
              spacing={0}
              renderItem={({item}) => (
                <Text
                  style={{
                    // al: 'center',
                    borderRadius: 5,
                    // padding: ,

                    backgroundColor: '#ebedf0',
                    fontSize: 40,
                    paddingHorizontal:
                      (windowWidth * 0.8) / nombreString2.length / 3,
                    height: (windowWidth * 0.98) / nombreString2.length,
                  }}>
                  {item}
                </Text>
              )}
            />
          </View>
         
          <View
            style={{
              alignItems: 'flex-end',
              // backgroundColor: 'blue',
              height: windowWidth / nombreString2.length - 1,
            }}>
            <FlatGrid
              itemDimension={(windowWidth * 0.98) / nombreString2.length}
              data={nombreString2}
              fixed
              spacing={0}
              renderItem={({item}) => (
                <Text
                  style={{
                    // al: 'center',
                    borderRadius: 5,
                    // padding: ,

                    backgroundColor: '#ebedf0',
                    fontSize: 40,
                    paddingHorizontal:
                      (windowWidth * 0.8) / nombreString2.length / 3,
                    height: (windowWidth * 0.98) / nombreString2.length,
                  }}>
                  {item}
                </Text>
              )}
            />
          </View>
          <View
          style={{
            height:3,
            backgroundColor:"black"
          }}>

          </View>
          <View
            style={{
              alignItems: 'flex-start',
              // backgroundColor: 'blue',
              // flex:1
              // height: windowWidth,
              height: windowWidth / nombreString2.length - 1,
            }}>
            <FlatGrid
                     itemDimension={(windowWidth * 0.98) / nombreString2.length}
              fixed
              spacing={0}
              data={[...Array(7).keys()]}
              // data={[...Array(3).keys()]}
              renderItem={({item, index}) => {
                return (
                  <View>
                    <TextInput
                    keyboardType="number-pad"
                      style={{
                        borderRadius: 5,
                        backgroundColor: '#ebedf0',
                        fontSize: 40,
                        paddingHorizontal:
                          (windowWidth * 0.7) / nombreString2.length / 3,
                        height: (windowWidth * 0.98) / nombreString2.length,
                      }}
                      onChangeText={text => {
                        arrayResult1[index] = text;
                        setArrayResult1(arrayResult1);
                      }}
                      value={arrayResult1[index]}
                    />
                  </View>
                );
              }}
            />
          </View>
          <View
            style={{
              alignItems: 'flex-start',
              // backgroundColor: 'blue',
              // flex:1
              // height: windowWidth,
              height: windowWidth / nombreString2.length - 1,
            }}>
            <FlatGrid
                     itemDimension={(windowWidth * 0.98) / nombreString2.length}
              fixed
              spacing={0}
              data={[...Array(7).keys()]}
              // data={[...Array(3).keys()]}
              renderItem={({item, index}) => {
                return (
                  <View>
                    <TextInput
                      style={{
                        borderRadius: 5,
                        backgroundColor: '#ebedf0',
                        fontSize: 40,
                        paddingHorizontal:
                          (windowWidth * 0.7) / nombreString2.length / 3,
                        height: (windowWidth * 0.98) / nombreString2.length,
                      }}
                      keyboardType="number-pad"
                      onChangeText={text => {
                        arrayResult2[index] = text;
                        setArrayResult2(arrayResult2);
                      }}
                      value={arrayResult2[index]}
                    />
                  </View>
                );
              }}
            />
          </View>
          <View
            style={{
              alignItems: 'flex-start',
              // backgroundColor: 'blue',
              // flex:1
              // height: windowWidth,
              height: windowWidth / nombreString2.length - 1,
            }}>
            <FlatGrid
                     itemDimension={(windowWidth * 0.98) / nombreString2.length}
              fixed
              spacing={0}
              data={[...Array(7).keys()]}
              // data={[...Array(3).keys()]}
              renderItem={({item, index}) => {
                return (
                  <View>
                    <TextInput
                      style={{
                        borderRadius: 5,
                        backgroundColor: '#ebedf0',
                        fontSize: 40,
                        paddingHorizontal:
                          (windowWidth * 0.7) / nombreString2.length / 3,
                        height: (windowWidth * 0.98) / nombreString2.length,
                      }}
                      onChangeText={text => {
                        arrayResult3[index] = text;
                        setArrayResult3(arrayResult3);
                      }}
                      value={arrayResult3[index]}
                    />
                  </View>
                );
              }}
            />
          </View>

          <TextInput
            style={{backgroundColor: 'white'}}
            placeholder="c'est ici"
            keyboardType="numeric"
            onChangeText={setResult}
            //  onBlur={handleBlur('email')}
            onSubmitEditing={e => handleValidate(e)}
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
        {console.log('gifs', gifs)}
        {gifs.length > 0 && (
          <Image
            resizeMode="contain"
            style={styles.image}
            source={{uri: gifs[0].images.original.url}}
            // source={{uri: gifs[Math.round(Math.random()*50)].images.original.url}}
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
      </View>
    </ThemeContext.Provider>
  );
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
    color: 'white',
  },
  image: {
    // width: 400,
    height: 450,
    borderWidth: 3,
    marginBottom: 5,
  },
});
