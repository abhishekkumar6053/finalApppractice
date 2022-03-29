import * as React from 'react';
import { View ,Text} from 'react-native';
interface childprops{
    name: string;
}
const Child=(props:childprops)=>{
    return(
        <Text>{props.name}</Text>
    )
}
const Post=()=>{
    return(
        <View>
            <Child name='abhishek'/>
        <Child name={123}/>
        </View>
        
    )
}
export default Post;