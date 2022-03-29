import React, { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import {headColor} from '../../root/'
const Header=({title}:{title:string})=>{
    const{color,setColor} = useContext(headColor);
    const headset=()=>{
        setColor(!color);
    }
    return(
    <View>
        <Pressable onPress={headset}>
        <Text style={color?style.text1:style.text}>{title}</Text>
        </Pressable>
        
    </View>
    )}

const style = StyleSheet.create({
    container:{

    },
    text:{
        color: 'green'
    },
    text1:{
        color: 'red'
    }
})
export default Header;