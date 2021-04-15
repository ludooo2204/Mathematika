import React, {useContext} from 'react';
import {View, Dimensions,TextInput} from 'react-native';

import {FlatGrid} from 'react-native-super-grid';
import DataContext from './Context';

const LigneResultatsMultiplication =({arrayResult,setArrayResult,nbrDigit})=>{
    const windowWidth = Dimensions.get('window').width;
    const {data, updateData} = useContext(DataContext);
    console.log("nbrDigit",nbrDigit)
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
      <View >
        <TextInput
          keyboardType="number-pad"
          style={{
            borderRadius: 5,
            backgroundColor: '#ebedf0',
            fontSize: 30,
            padding:0,
            paddingHorizontal: (windowWidth * 0.8) / nbrDigit / 3,
            height: (windowWidth * 0.98) / nbrDigit,
          }}
          onChangeText={text => {
            arrayResult[index] = text;
            setArrayResult(arrayResult);
          }}
          value={arrayResult[index]}
        />
      </View>
    );
  }}
/>
</View>
    )
}
export default LigneResultatsMultiplication;
