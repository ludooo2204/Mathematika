import React, {useContext,useState,useEffect} from 'react';
import {View, Dimensions, Text} from 'react-native';

import {FlatGrid} from 'react-native-super-grid';
import DataContext from './Context';

const LigneMultiplication = ({nombre1Array, nbrDigit,numeroLigne,caseSelection}) => {
  const windowWidth = Dimensions.get('window').width;
  const {data, updateData} = useContext(DataContext);
  // const [stateData, setstateData] = useState(data)
  console.log("caseSelection",caseSelection)
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
  // let caseSurligné =pasSelectionné
// useEffect(() => {
//   // caseSurligné = selectionné
//   console.log("effect")
//   console.log(stateData.nbrLigneResultatGlobal)
  
// }, [])
console.log("numeroLigne",numeroLigne)
console.log("nombre1Array",nombre1Array)
console.log("nbrDigit",nbrDigit)
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
            // style={caseSelection!=null&&(index==caseSelection[0])?selectionné:pasSelectionné}
            style={
              caseSelection==null?pasSelectionné:(caseSelection!=null&&
              ((index==caseSelection[0]&&numeroLigne==0&&(nbrDigit-index-1<data.nbr1.toString().split('').length)&&caseSelection[1]==0)?selectionné:
                (index-1==caseSelection[0]&&numeroLigne==0&&(nbrDigit-index-1<data.nbr1.toString().split('').length)&&caseSelection[1]==1?selectionné:
                (index-2==caseSelection[0]&&numeroLigne==0&&(nbrDigit-index-1<data.nbr1.toString().split('').length)&&caseSelection[1]==2?selectionné:
                (index-3==caseSelection[0]&&numeroLigne==0&&(nbrDigit-index-1<data.nbr1.toString().split('').length)&&caseSelection[1]==3?selectionné:
                (index-4==caseSelection[0]&&numeroLigne==0&&(nbrDigit-index-1<data.nbr1.toString().split('').length)&&caseSelection[1]==4?selectionné:
                (index==nbrDigit-caseSelection[1]-1&&numeroLigne==1?selectionné:pasSelectionné)))
                ))))
            }
            >
            {item}
            
          </Text>
        )}
      />
    </View>
  );
};
export default LigneMultiplication;
