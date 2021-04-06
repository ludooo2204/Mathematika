import React from 'react';
//Defini la forme du context !
export default React.createContext({
  theme: '',
  updateTheme: name => {},
});
