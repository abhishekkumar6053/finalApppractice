import * as React from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import routes from '../assets/translation/routes';
import OnboardingNavigator from '../component/onboarding';
import DashboardNavigator from '../component/dashboard';
import { createContext, useState } from 'react';
export const headColor = createContext({
    color:false,
    setColor: (param:boolean)=>{

    }
});
const Stack = createStackNavigator();
const Root=()=>{
    const [color,setColor] = useState(true);
    return(
        <headColor.Provider value={{color,setColor}}>
<NavigationContainer>
            <Stack.Navigator initialRouteName={routes.root.onboarding.Name} screenOptions={{headerMode:'none'}}>
             <Stack.Screen name={routes.root.onboarding.Name} component={OnboardingNavigator}/>
             <Stack.Screen name={routes.root.dashboard.Name} component={DashboardNavigator}/>
            </Stack.Navigator>
        </NavigationContainer>
        </headColor.Provider>
        
    );
}
export default Root;