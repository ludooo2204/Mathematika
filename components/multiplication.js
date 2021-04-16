import React, {useState, useEffect, useContext} from 'react';
import {
  Text,
  View,
  Button,
  Dimensions,
  TextInput,
  StyleSheet,
} from 'react-native';
import DataContext from './Context';
import LigneMultiplication from './LigneMultiplication';
import LigneResultatsMultiplication from './LigneResultatsMultiplication';


import {nbrDigitToMultiplication} from '../helpers/functions';

const Multiplication = ({input, navigation }) => {
  const [nombre1Array, setnombre1Array] = useState(null);
  const [nombre2Array, setnombre2Array] = useState(null);
  const [nbrLigneResult, setnbrLigneResultat] = useState(null);
  const [arrayResult, setArrayResult] = useState('');
  const [arrayResult1, setArrayResult1] = useState([]);
  const [arrayResult2, setArrayResult2] = useState([]);
  const [arrayResult3, setArrayResult3] = useState([]);
  const [arrayResult4, setArrayResult4] = useState([]);
  const [arrayResult5, setArrayResult5] = useState([]);

  const [retenue, setRetenue] = useState('0');
  const {data, updateData} = useContext(DataContext);

  const windowWidth = Dimensions.get('window').width;
  // console.log('arrayResult', arrayResult);
  useEffect(() => {
    const choixNbrDigit1 = 6;
    const choixNbrDigit2 = 3;
    const nombreAleat = nbrDigitToMultiplication(
      choixNbrDigit1,
      choixNbrDigit2,
      setnombre1Array,
      setnombre2Array,
      setnbrLigneResultat,
    );

    let dataObject = {
      nombre1Array: nombreAleat.nombre1Array,
      nombre2Array: nombreAleat.nombre2Array,
      nbrLigneResultatGlobal: nombreAleat.nbrLigneResultat,
      windowWidth: windowWidth,
    };
    console.log('dataObject');
    console.log(dataObject);

    //fonction pour update context
    updateData(dataObject);

    console.log('nbrLigneResult', dataObject.nbrLigneResultatGlobal);
    switch (dataObject.nbrLigneResultatGlobal) {
      case 1:
        test = [[arrayResult1, setArrayResult1]];
        setArrayResult(test);
        break;
      case 2:
        console.log('toto');
        test = [
          [arrayResult1, setArrayResult1],
          [arrayResult2, setArrayResult2],
        ];
        setArrayResult(test);

        break;
      case 3:
        test = [
          [arrayResult1, setArrayResult1],
          [arrayResult2, setArrayResult2],
          [arrayResult3, setArrayResult3],
        ];
        setArrayResult(test);
        break;
      case 4:
        test = [
          [arrayResult1, setArrayResult1],
          [arrayResult2, setArrayResult2],
          [arrayResult3, setArrayResult3],
          [arrayResult4, setArrayResult4],
        ];
        setArrayResult(test);
        break;
      case 5:
        test = [
          [arrayResult1, setArrayResult1],
          [arrayResult2, setArrayResult2],
          [arrayResult3, setArrayResult3],
          [arrayResult4, setArrayResult4],
          [arrayResult5, setArrayResult5],
        ];
        setArrayResult(test);
        break;

      default:
        break;
    }
    // console.log('arrayResult ALORS ?', arrayResult);
  }, []);

  const styles = nombre2Array
    ? StyleSheet.create({
        inputRetenue: {
          borderRadius: 5,
          backgroundColor: 'green',
          fontSize: 50,
          marginTop: 10,
          padding: 0,
          paddingHorizontal: (windowWidth * 0.98) / nombre2Array.length / 2,
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
  // console.log("arrayResult",arrayResult)
  return (
    <>
      {nombre2Array ? (
        <View>
          {/* <Button title="change le theme" onPress={() => setTheme('Dark')} /> */}
          <Button
        title="Go to gif"
        onPress={() => navigation.navigate('gif')}
      />
          {[nombre1Array, nombre2Array].map((item, index) => {
            // {[nombre1Array, nombre2Array].map((item,index) => {
            return (
              <LigneMultiplication
                nombre1Array={item}
                nbrDigit={nombre2Array.length}
                key={index}
              />
            );
          })}
          {/* BARRE OPERATION */}
          <View
            style={{
              height: 3,
              backgroundColor: 'black',
            }}></View>

          {arrayResult
            ? arrayResult.map((item, index) => {
                return (
                  <LigneResultatsMultiplication
                    arrayResult={item[0]}
                    setArrayResult={item[1]}
                    numeroLigne={index}
                    key={index}
                    nbrDigit={nombre2Array.length}
                  />
                );
              })
            : null}

        
          {/* RETENUE */}
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
          {/* <Text>{JSON.stringify(data)}</Text> */}
        </View>
      ) : null}
    </>
  );
};


function ModalScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}
export default Multiplication;
