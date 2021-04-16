import {View, Text, Button, Dimensions} from 'react-native';
import React from 'react';
import {FlatGrid} from 'react-native-super-grid';
const windowWidth = Dimensions.get('window').width;
const menu = ({navigation}) => {
  const menuItems = ['add', 'mul', 'div', 'sous', 'inf', 'par'];
  return (
    <View style={{flex: 1, justifyContent: 'space-around'}}>
      <Text
        style={{
          backgroundColor: 'lightblue',
          alignSelf: 'center',
          fontSize: 50,
        }}>
        Salut Loris !
      </Text>
      {/* <Text>Tu es actuellement </Text> */}
      <Button
        title="multiplication"
        onPress={() => navigation.navigate('multiplication')}
      />
      <Button title="Gif" onPress={() => navigation.navigate('gif')} />

      <FlatGrid
        itemDimension={windowWidth / 2.5}
        data={menuItems}
        style={{backgroundColor: 'green',margin:20}}
        // itemContainerStyle={backgroundColor:""}
        // fixed
        spacing={10}
        renderItem={({item}) => (
          <Text
            style={{
                alignSelf:"center",
              textAlign: 'center',
              textAlignVertical: 'center',
              borderRadius: 5,
              backgroundColor: 'grey',
              fontSize: 30,
              height: windowWidth / 2.5,
              width: windowWidth / 2.5,
            }}>
            {item}
          </Text>
        )}
      />
    </View>
  );
};

export default menu;
