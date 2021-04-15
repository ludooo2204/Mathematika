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

import {FlatGrid} from 'react-native-super-grid';
import {nbrDigitToMultiplication} from '../helpers/functions';

const Multiplication = ({input}) => {
  const [nombre1Array, setnombre1Array] = useState(null);
  const [nombre2Array, setnombre2Array] = useState(null);
  const [arrayResult1, setArrayResult1] = useState([]);
  const [arrayResult2, setArrayResult2] = useState([]);
  const [arrayResult3, setArrayResult3] = useState([]);

  const [retenue, setRetenue] = useState('0');
  const {data, updateData} = useContext(DataContext);

  const windowWidth = Dimensions.get('window').width;

  useEffect(() => {
    console.log('go');

    const choixNbrDigit1 = 3;
    const choixNbrDigit2 = 2;

    const nombreAleat = nbrDigitToMultiplication(
      choixNbrDigit1,
      choixNbrDigit2,
      setnombre1Array,
      setnombre2Array,
    );

    let dataObject = {
      nombre1Array: nombreAleat.nombre1Array,
      nombre2Array: nombreAleat.nombre2Array,
      windowWidth: windowWidth,
    };
    console.log('dataObject');
    console.log(dataObject);

    //fonction pour update context
    updateData(dataObject);
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
  nombre2Array
    ? console.log(nombre1Array, nombre2Array, windowWidth, styles)
    : null;
  return (
    <>
      {nombre2Array ? (
        <View>
          <Button title="change le theme" onPress={() => setTheme('Dark')} />
          <LigneMultiplication
            nombre1Array={nombre1Array}
            nbrDigit={nombre2Array.length}
          />

          <LigneMultiplication
            nombre1Array={nombre2Array}
            nbrDigit={nombre2Array.length}
          />
          {/* BARRE OPERATION */}
          <View
            style={{
              height: 3,
              backgroundColor: 'black',
            }}></View>
          <LigneResultatsMultiplication
            arrayResult={arrayResult1}
            setArrayResult={setArrayResult1}
            nbrDigit={nombre2Array.length}
          />
          <LigneResultatsMultiplication
            arrayResult={arrayResult2}
            setArrayResult={setArrayResult2}
            nbrDigit={nombre2Array.length}
          />

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
