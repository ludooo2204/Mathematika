import React from 'react';
import { Text } from 'react-native'
const Division = ()=>{
    const A =()=>{return Math.round(Math.random()*100)}
    const B =()=>{return Math.round(Math.random()*10)}
    return(
        <Text style={{color:"white",fontSize:50}}>
    <A/>/<B/>
        
        </Text>
    )
}
export default Division