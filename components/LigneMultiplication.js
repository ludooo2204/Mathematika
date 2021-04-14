import React ,{useContext}from 'react';
import {View,Dimensions,  Text} from 'react-native';
import styles from './styles'
import {FlatGrid} from 'react-native-super-grid';
import DataContext from './Context';
 const LigneMultiplication = ({
  nombre1Array,
  nombre2Array,
}) => {
    const windowWidth = Dimensions.get('window').width;
    console.log( nombre1Array, nombre2Array)
    console.log("nono")
    const { data, updateData } = useContext(DataContext);
    console.log(data)
  return (
      
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
        //   <Text >{item}</Text>
          <Text style={{
            borderRadius: 5,
            backgroundColor: '#ebedf0',
            fontSize: 40,
            paddingHorizontal: (windowWidth * 0.8) / nombre2Array.length / 3,
            height: (windowWidth * 0.98) / nombre2Array.length,
          }}>{item}</Text>
        )}
      />
    </View>
  );
};
export default LigneMultiplication;