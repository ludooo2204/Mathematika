import React, { useState,useEffect,useContext } from 'react';
import { Text,View,Button,Dimensions,TextInput } from 'react-native'
import dataContext from './Context';
import {FlatGrid} from 'react-native-super-grid';


const Multiplication = ({input})=>{
    const [a,SetA]=useState(null)
    const [b,SetB]=useState(null)
    const [arrayResult1, setArrayResult1] = useState([]);
    const [arrayResult2, setArrayResult2] = useState([]);
    const [arrayResult3, setArrayResult3] = useState([]);
    const [retenue, setRetenue] = useState();
    const contextValue= useContext(dataContext)
    
  const windowWidth = Dimensions.get('window').width;
  const choixNbrDigit1 = 3;
  const choixNbrDigit2 = 3;
  const nombre1 = Math.round(Math.random() * Math.pow(10, choixNbrDigit1));
  const nombre2 = Math.round(Math.random() * Math.pow(10, choixNbrDigit2));
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
  nombreString2.unshift('X');
  nombreString1.unshift('');
  console.log('nbrString2', nombreString2);

  console.log(nbrChiffre2);
    // console.log("fils :",contextValue.theme)
    // console.log("contrxtvaleu==ue :",contextValue)
    const toto = (contextValue.test+1)
    // console.log('toto',toto)
    console.log("contrxtvaleu==ue :",contextValue)
    useEffect(() => {
        const first=(Math.round(Math.random()*9)+1)
        // console.log(first)
        SetA(first)
        SetB(Math.round(Math.random()*9)+1)
        // console.log("a",a)
        // console.log("b",b)
    
    }, [])
    const A =()=>{return a}
    const B =()=>{return b}
    const resultat=a*b==input?"bon":"faudx";
    return(
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
            height: 3,
            backgroundColor: 'black',
          }}></View>
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

        <View>
          <TextInput
            keyboardType="numeric"
            style={{
              borderRadius: 5,
              backgroundColor: '#ebedf0',
              fontSize: 40,
              marginTop: 10,
              paddingHorizontal:
                (windowWidth * 0.7) / nombreString2.length / 3,
              height: (windowWidth * 0.98) / nombreString2.length,
              width: (windowWidth * 0.98) / nombreString2.length,
            }}
            onChangeText={text => {
              setRetenue(text);
            }}
            value={retenue}
          />
        </View>
      </View>

    )
}
export default Multiplication