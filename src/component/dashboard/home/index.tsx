import * as React from 'react';
import { View ,Text, StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';
import Header from '../../common/header';
const Home=()=>{
    return(
        <View style={style.container}>
          <Header title='Home'/>     
        <WebView
        source={{
          uri: 'https://github.com/facebook/react-native'
        }}
        style={{ marginTop: 0 }}
      />
        </View>
    )
}
const style = StyleSheet.create({
    container:{
        flex:1,
    }
})
export default Home;