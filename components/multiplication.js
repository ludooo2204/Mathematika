import React, {useState, useEffect, useContext} from 'react';
import {
  Text,
  View,
  Button,
  Dimensions,
  TextInput,
  StyleSheet
} from 'react-native';
import DataContext from './Context';
import LigneMultiplication from './LigneMultiplication';

import {FlatGrid} from 'react-native-super-grid';


const Multiplication = ({input}) => {
  const [nombre1Array, setnombre1Array] = useState(null);
  const [nombre2Array, setnombre2Array] = useState(null);
  const [arrayResult1, setArrayResult1] = useState([]);
  const [arrayResult2, setArrayResult2] = useState([]);
  const [arrayResult3, setArrayResult3] = useState([]);

  const [retenue, setRetenue] = useState('0');
  const { data, updateData } = useContext(DataContext);
  
  const windowWidth = Dimensions.get('window').width;

  useEffect(() => {
    console.log('go');
    
    const choixNbrDigit1 = 3;
    const choixNbrDigit2 = 2;
    const nombre1 = Math.round(Math.random() * Math.pow(10, choixNbrDigit1));
    const nombre2 = Math.round(Math.random() * Math.pow(10, choixNbrDigit2));
    console.log('nbr1 ', nombre1, ' & nbr 2 ', nombre2);
    let nombre1Array = nombre1.toString().split('');
    let nombre2Array = nombre2.toString().split('');

    const nbrChiffre1 = nombre1Array.length;
    const nbrChiffre2 = nombre2Array.length;
    const diff = Math.abs(nbrChiffre2 - nbrChiffre1);

    for (let i = 0; i < diff; i++) {
      nombre2Array.unshift('');
    }

    nombre2Array.unshift('X');
    nombre1Array.unshift('');

    setnombre1Array(nombre1Array);
    setnombre2Array(nombre2Array);
    let dataObject={nombre1Array:nombre1Array,nombre2Array:nombre2Array,windowWidth:windowWidth}
    console.log('dataObject')
    console.log(dataObject)
    // updateData({nombre1Array:nombre1Array,nombre2Array:nombre2Array,windowWidth:windowWidth})
  }, []);




  const styles = nombre2Array
    ? StyleSheet.create({
        inputRetenue: {
          borderRadius: 5,
          backgroundColor: 'green',
          fontSize: 50,
          marginTop: 10,
          paddingHorizontal: (windowWidth * 0.98) / nombre2Array.length / 5,
          height: windowWidth * 0.2,
          width: windowWidth * 0.2,
        },
        textOperation: {
          borderRadius: 5,
          backgroundColor: '#ebedf0',
          fontSize: 40,
          paddingHorizontal: (windowWidth * 0.8) / nombre2Array.length / 3,
          height: (windowWidth * 0.98) / nombre2Array.length,
        },
        inputOperation: {
          borderRadius: 5,
          backgroundColor: '#ebedf0',
          fontSize: 40,
          paddingHorizontal: (windowWidth * 0.7) / nombre2Array.length / 3,
          height: (windowWidth * 0.98) / nombre2Array.length,
        },
      })
    : null;
    nombre2Array ?console.log( nombre1Array, nombre2Array,windowWidth,styles):null
  return (
    <>
      {nombre2Array ? (
        <View>
          <Button title="change le theme" onPress={() => setTheme('Dark')} />
          <LigneMultiplication
            nombre1Array={nombre1Array}
            nombre2Array={nombre2Array}
                      
          />
          <LigneMultiplication
            nombre1Array={nombre1Array}
            nombre2Array={nombre2Array}
           
          />
          <View
            style={{
              alignItems: 'flex-end',
              height: (windowWidth * 0.98) / nombre2Array.length,
            }}>
            <FlatGrid
              itemDimension={(windowWidth * 0.98) / nombre2Array.length}
              data={nombre1Array}
              fixed
              spacing={0}
              renderItem={({item}) => (
                <Text style={styles.textOperation}>{item}</Text>
              )}
            />
          </View>

          <View
            style={{
              alignItems: 'flex-end',
              height: windowWidth / nombre2Array.length - 1,
            }}>
            <FlatGrid
              itemDimension={(windowWidth * 0.98) / nombre2Array.length}
              data={nombre2Array}
              fixed
              spacing={0}
              renderItem={({item}) => (
                <Text style={styles.textOperation}>{item}</Text>
              )}
            />
          </View>
          <View
            style={{
              height: 3,
              backgroundColor: 'black',
            }}></View>
          <View
            style={{
              alignItems: 'flex-start',
              // backgroundColor: 'blue',
              // flex:1
              // height: windowWidth,
              height: windowWidth / nombre2Array.length - 1,
            }}>
            <FlatGrid
              itemDimension={(windowWidth * 0.98) / nombre2Array.length}
              fixed
              spacing={0}
              data={[...Array(7).keys()]}
              // data={[...Array(3).keys()]}
              renderItem={({item, index}) => {
                return (
                  <View>
                    <TextInput
                      keyboardType="number-pad"
                      style={styles.inputOperation}
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
              // backgroundColor:"black",
              height: windowWidth / nombre2Array.length - 1,
            }}>
            <FlatGrid
              itemDimension={(windowWidth * 0.98) / nombre2Array.length}
              fixed
              spacing={0}
              data={[...Array(7).keys()]}
              renderItem={({item, index}) => {
                return (
                  <View>
                    <TextInput
                      style={styles.inputOperation}
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

          <View>
            <TextInput
              keyboardType="number-pad"
              style={styles.inputRetenue}
              onChangeText={text => {
                setRetenue(text);
              }}
              value={retenue}
              onFocus={() => setRetenue('')}
            />
          </View>
        </View>
      ) : null}
    </>
  );
};
export default Multiplication;
