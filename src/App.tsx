import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RootStackParameterList } from './navigation/types';
import Auth from './navigation/auth/Auth';

const RootStack = createNativeStackNavigator<RootStackParameterList>();

const App = () => {
  return(
    <NavigationContainer>
      <RootStack.Navigator 
        initialRouteName='Auth'
        screenOptions={{headerShown: false}}  
      >
        <RootStack.Screen name='Auth' component={Auth}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;