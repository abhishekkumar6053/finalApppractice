import * as React from 'react';
import { View ,Text} from 'react-native';
import routes from '../../assets/translation/routes';
import Login from './login';
import {createStackNavigator} from '@react-navigation/stack';
import Child from './child';
import Getprop from './getprop';
const OnboardingNavigator=()=>{
    const Stack = createStackNavigator();
    return(
      <Stack.Navigator>
          <Stack.Screen name={routes.root.onboarding.login.Name} component={Login}/>
          <Stack.Screen name={routes.root.onboarding.child.Name} component={Child}/>
          <Stack.Screen name={routes.root.onboarding.getprop.Name} component={Getprop}/>
      </Stack.Navigator>
    )
}
export default OnboardingNavigator;