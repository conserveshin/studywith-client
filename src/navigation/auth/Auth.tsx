import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { AuthStackParameterList } from '../types';
import Header from '../header';
import LoginScreen from './LoginScreen';

const AuthStack = createNativeStackNavigator<AuthStackParameterList>();

const Auth = () => {
  return(
    <AuthStack.Navigator 
      initialRouteName='Login'
    >
      <AuthStack.Screen 
        name='Login' 
        component={LoginScreen}
        options={{
          headerShown: false
        }}
      />
    </AuthStack.Navigator>
  );
}

export default Auth