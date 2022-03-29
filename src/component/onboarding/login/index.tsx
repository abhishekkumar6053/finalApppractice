import * as React from 'react';
import { View ,Text, Pressable,StyleSheet} from 'react-native';
import {useNavigation } from '@react-navigation/native';
import routes from '../../../assets/translation/routes';
import Child from '../child';
import { BASE_URL, POST } from '../../../services/endpoints';
import { Post } from '../../../services/models/posts';
const Login=()=>{
    const navigation = useNavigation();
    const onPress=()=>{
        navigation.navigate(routes.root.dashboard.Name);
    }
    const onChild=()=>{
        navigation.navigate(routes.root.onboarding.getprop.Name);
    }


    const onApi=async()=>{
        const response = await fetch(BASE_URL+POST);
        const responseJson:Post[] = await response.json();
        console.log(responseJson[3].title);
    }
    
    return(
    
        <View style={style.container}>
            <Pressable onPress={onPress} style={style.button}>
            <Text>Login</Text>
            </Pressable>
            <Pressable onPress={onApi}>
                <Text>API</Text>
            </Pressable>
            <Pressable onPress={onChild} style={style.button}>
            <Text>CHild</Text>
            </Pressable> 
        </View>
        
    )
}
const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    button:{
        backgroundColor: 'red',
        padding:10,
        textAlign:'center',
        borderRadius: 10,
        margin:10,
    }
})
export default Login;

