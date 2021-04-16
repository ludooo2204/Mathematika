import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Multiplication from './components/multiplication';
import Menu from './components/menu';
import Division from './components/division';
import Gif from './components/gif';
import styles from './components/styles';
import {NavigationContainer} from '@react-navigation/native';
// do not forget to add fresco animation to build.gradle
import DataContext from './components/Context';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  const [dataContext, setDataContext] = useState(null);



  const contextValue = {
    data: dataContext, //ou juste theme,
    updateData: setDataContext,
  };
  return (
    <DataContext.Provider value={contextValue}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="menu">
          {/* <View style={styles.view}> */}
          {/* <Gif /> */}
          {/* <Text>{dataContext}</Text>  */}
          <Stack.Screen name="menu" component={Menu} options={{headerShown:false}}/>
          <Stack.Screen name="multiplication" component={Multiplication} options={{headerShown:false}} />
          <Stack.Screen name="gif" component={Gif} options={{headerShown:false}}/>
          {/* <Multiplication input={resultProps} /> */}
          {/* <Division /> */}
          {/* </View> */}
        </Stack.Navigator>
      </NavigationContainer>
    </DataContext.Provider>
  );
}
