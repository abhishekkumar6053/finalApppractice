import * as React from 'react';
import { View ,Text} from 'react-native';
import routes from '../../assets/translation/routes';
import Home from './home';
import Post from './post';
import Setting from './setting';
import User from './user';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Header } from '@react-navigation/stack';

const DashboardNavigator=(prop)=>{
    console.log(prop.route);
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator  screenOptions={({ route}) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
             
  
              if (route.name === routes.root.dashboard.tabs.home.Name) {
                iconName = focused
                  ? 'home'
                  : 'home-outline';
              } else if (route.name === routes.root.dashboard.tabs.post.Name) {
                iconName = focused ? 'add-circle' : 'add-circle-outline';
              }
              else if (route.name === routes.root.dashboard.tabs.setting.Name) {
                iconName = focused ? 'settings' : 'settings-outline';
              }
              else if (route.name === routes.root.dashboard.tabs.user.Name) {
                iconName = focused ? 'person' : 'person-outline';
              }
             
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            headerShown:false,
          })} >
          
            <Tab.Screen name={routes.root.dashboard.tabs.home.Name} component={Home} options={{title: 'Home'}}/>
            <Tab.Screen name={routes.root.dashboard.tabs.post.Name} component={Post} options={{title: 'Post'}}/>
            <Tab.Screen name={routes.root.dashboard.tabs.setting.Name} component={Setting} options={{title: 'Setting'}}/>
            <Tab.Screen name={routes.root.dashboard.tabs.user.Name}  component={User} options={{title: 'User',headerShown:false}}/>
        </Tab.Navigator>
    )
}
export default DashboardNavigator;
