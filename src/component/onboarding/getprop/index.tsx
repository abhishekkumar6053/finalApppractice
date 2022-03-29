import * as React  from 'react';
import { View,Text } from 'react-native';
import Child from '../child';


const Getprop = ()=>{
    let children=[{
        name: 'abhishek',
        price: 323,
        description: 'react',
    },{
        name: 'aditya',
        price: 32332,
        description: 'react',
    }]
    return(
        <View>
           {/* <Child name='abhishek' price={32323} description='react-Native' isLogin={true}/>
           <Child name='aditya' price={150} description='react-Native' isLogin={false}/> */}
        {/* {children.map(child=>(<Child item={child}/>))} */}
           <Child status='error'/>
        </View>

    )
}
export default Getprop;