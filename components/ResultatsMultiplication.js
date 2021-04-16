import React, {useContext} from 'react';
import {View, Dimensions, TextInput} from 'react-native';

import {FlatGrid} from 'react-native-super-grid';
import DataContext from './Context';

const ResultatsMultiplication = ({
  arrayResultTotal,
  caseSelection,
  setArrayResultTotal,
  nbrDigit,
  numeroLigne,
}) => {
  const windowWidth = Dimensions.get('window').width;
  const {data, updateData} = useContext(DataContext);

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
                  arrayResultTotal[index] = text;
                  setArrayResultTotal(arrayResultTotal);
                }}
                onFocus={e => {
                  e.target.clear();

                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};
export default ResultatsMultiplication;
