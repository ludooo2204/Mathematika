import {  StyleSheet,Dimensions
} from 'react-native'


const windowWidth = Dimensions.get('window').width;


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
  export default styles


  