import * as React  from 'react';
import { View,Text } from 'react-native';

interface Childprops{
    // item:{
    //     name: string;
    //     price: number;
    //     description: string;
    //     isLogin?: boolean;
    // }
    status : 'loading'| 'success'|'error';
    
}
const Child = ({status}:Childprops)=>{
    let message;
    if(status==='loading'){
        message='loading data'
    }
    else if(status==='success'){
        message = 'loading successfull'
    }
    else if(status === 'error'){
        message = 'loading error';
    }
    return(
        
        <View>
         {/* {
             item.isLogin?
             (<View>
                 <Text>{item.name}</Text>
                 <Text>{item.price}</Text>
                 <Text>{item.description}</Text>
             </View>):
             <Text>Welcome Guest</Text>
         } */}
         <Text>{message}</Text>
        </View>
    )
}
export default Child;