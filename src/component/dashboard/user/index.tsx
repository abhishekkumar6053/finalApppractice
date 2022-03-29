import * as React from 'react';
import { View ,Text, StyleSheet, StatusBar, FlatList} from 'react-native';
const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694arwerews0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
        id: '3ac68rewrafc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'forth Item',
      },
      {
        id: '58694a0wewf-3da1-471f-bd96-145571e29d72',
        title: 'five Item',
      },
      {
        id: '3ac68rewererafc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'six Item',
      },
      {
        id: '58694a0wereewf-3da1-471f-bd96-145571e29d72',
        title: 'seven Item',
      },
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
const listheader=()=>{
    return(
        <View style={styles.headerstyle}>
            <Text style={styles.textstyle}>
                This is A header
            </Text>
        </View>
    )
}

const User=()=>{
    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
    
    return(
        <View >
            <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={listheader}
      />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 42,
    },
    headerstyle:{
        width: '100%',
        height: 45,
        backgroundColor: 'red',
    },
    textstyle:{
       textAlign: 'center',
       color: 'white',
       fontSize: 30,
       

    }
  });
export default User;