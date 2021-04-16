import React, {useContext, useState, useEffect} from 'react';
import {View, Dimensions, TextInput} from 'react-native';
import {clockRunning} from 'react-native-reanimated';

import {FlatGrid} from 'react-native-super-grid';
import DataContext from './Context';

const LigneResultatsMultiplication = ({
  arrayResult,
  caseSelection,
  setArrayResult,
  nbrDigit,
  numeroLigne,
}) => {
  // const [inputNumber, setInputNumber] = useState('');
  // const [indexCase, setIndexCase] = useState(null);
  // const [indexCase, setIndexCase] = useState(null);

  const windowWidth = Dimensions.get('window').width;
  const {data, updateData} = useContext(DataContext);
  // useEffect(() => {
  //   console.log('effect from ligneResultatMultiplication');
  //   console.log(indexCase);
  // });
  // console.log(data)
  return (
    <View
      style={{
        alignItems: 'flex-start',
        height: (windowWidth * 0.98) / nbrDigit,
      }}>
      <FlatGrid
        itemDimension={(windowWidth * 0.98) / nbrDigit}
        fixed
        spacing={0}
        data={[...Array(nbrDigit).keys()]}
        renderItem={({item, index}) => {
          // console.log("item",item)
          return (
            <View>
              <TextInput
                keyboardType="number-pad"
                style={{
                  borderRadius: 5,
                  backgroundColor: '#ebedf0',
                  fontSize: 30,
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  padding: 0,
                  height: (windowWidth * 0.98) / nbrDigit,
                }}
                onChangeText={text => {
                  // setInputNumber(text);
                  arrayResult[index] = text;
                  setArrayResult(arrayResult);
                }}
                onFocus={e => {
                  e.target.clear();
                  let coordLigneIndex = [index, numeroLigne];
                  data.coordLigneIndexSelectionne = coordLigneIndex;
                  updateData(data);
                  // setIndexCase(coordLigneIndex);
                  caseSelection(coordLigneIndex)
                  
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};
export default LigneResultatsMultiplication;
