import React, {useContext} from 'react';
import {View, Dimensions, Text} from 'react-native';

import {FlatGrid} from 'react-native-super-grid';
import DataContext from './Context';

const LigneMultiplication = ({nombre1Array, nbrDigit}) => {
  const windowWidth = Dimensions.get('window').width;
  const {data, updateData} = useContext(DataContext);
  console.log("totolasticot",nombre1Array)
  return (
    <View
      style={{
        alignItems: 'flex-start',
        height: (windowWidth * 0.98) / nbrDigit,
      }}>
      <FlatGrid
        itemDimension={(windowWidth * 0.98) / nbrDigit}
        data={nombre1Array}
        fixed
        spacing={0}
        renderItem={({item}) => (
          <Text
            style={{
              borderRadius: 5,
              backgroundColor: '#ebedf0',
              fontSize: 30,
              paddingHorizontal: (windowWidth * 0.8) / nbrDigit / 3,
              height: (windowWidth * 0.98) / nbrDigit,
            }}>
            {item}
          </Text>
        )}
      />
    </View>
  );
};
export default LigneMultiplication;
