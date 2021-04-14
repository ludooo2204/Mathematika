import React, {useState} from 'react';
import {View, Text,StyleSheet} from 'react-native';
import Multiplication from './components/multiplication';
import Division from './components/division';
import Gif from './components/gif';
import styles from './components/styles';

// do not forget to add fresco animation to build.gradle
import DataContext from './components/Context';

export default function App() {
  const [dataContext, setDataContext] = useState(null);
 
  const [resultProps, setResultProps] = useState('');

  const contextValue = {
    data:dataContext, //ou juste theme,
    updateData :setDataContext
  };
  return (
    <DataContext.Provider value={contextValue}>
      <View style={styles.view}>
        <Gif />
       {/* <Text>{dataContext}</Text>  */}
        <Multiplication input={resultProps} />
        {/* <Division /> */}
      </View>
    </DataContext.Provider>
  );
}

