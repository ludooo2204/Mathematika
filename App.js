import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Multiplication from './components/multiplication';
import Division from './components/division';
import Gif from './components/gif';

// do not forget to add fresco animation to build.gradle
import ThemeContext from './components/Context';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [test, setTest] = useState(0);
  const [resultProps, setResultProps] = useState('');

  const contextValue = {
    theme: theme, //ou juste theme,
    updateTheme: setTheme,
    test,
    setTest,
  };
  return (
    <ThemeContext.Provider value={contextValue}>
      <View style={styles.view}>
        <Gif />
        <Multiplication input={resultProps} />
        {/* <Division /> */}
      </View>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    // alignItems: 'center',
    // padding: 5,
    // backgroundColor: 'darkblue',
  },
  textInput: {
    // width: '100%',
    height: 50,
    color: 'black',
  },
  image: {
    // width: 400,
    height: 300,
    borderWidth: 3,
    marginBottom: 5,
  },
});
