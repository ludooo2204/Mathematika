import React, { useState,useEffect,useContext } from 'react';
import { Text } from 'react-native'
import ThemeContext from './Context';


const Multiplication = ({input})=>{
    const [a,SetA]=useState(null)
    const [b,SetB]=useState(null)
    const contextValue= useContext(ThemeContext)
    console.log("fils :",contextValue.theme)
    useEffect(() => {
        const first=(Math.round(Math.random()*9)+1)
        console.log(first)
        SetA(first)
        SetB(Math.round(Math.random()*9)+1)
        console.log("a",a)
        console.log("b",b)
    
    }, [])
    const A =()=>{return a}
    const B =()=>{return b}
    const resultat=a*b==input?"bon":"faudx";
    return(
        <Text style={{color:"white",fontSize:50}}>
        
    <A></A>X<B></B>
        {resultat}
        </Text>
    )
}
export default Multiplication