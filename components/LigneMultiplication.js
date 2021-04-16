import React, {useContext,useState,useEffect} from 'react';
import {View, Dimensions, Text} from 'react-native';

import {FlatGrid} from 'react-native-super-grid';
import DataContext from './Context';

const LigneMultiplication = ({nombre1Array, nbrDigit}) => {
  const windowWidth = Dimensions.get('window').width;
  const {data, updateData} = useContext(DataContext);
  const [stateData, setstateData] = useState(data)
  console.log(stateData)
  const selectionné= {
    borderRadius: 5,
    backgroundColor: '#ebedf0',
    fontSize: 30,
    borderColor:"black",
    borderWidth:2,
    textAlign: 'center',
    textAlignVertical: 'center',
    height: (windowWidth * 0.98) / nbrDigit,
  }
  const pasSelectionné= {
    borderRadius: 5,
    backgroundColor: '#ebedf0',
    fontSize: 30,
     textAlign: 'center',
    textAlignVertical: 'center',
    height: (windowWidth * 0.98) / nbrDigit,
  }
  let caseSurligné =pasSelectionné
useEffect(() => {
  // caseSurligné = selectionné
  console.log("effect")
  console.log(stateData.nbrLigneResultatGlobal)
  
}, [])

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
        renderItem={({item,index}) => (
          <Text
            style={caseSurligné
            }>
            {item}
            
          </Text>
        )}
      />
    </View>
  );
};
export default LigneMultiplication;
