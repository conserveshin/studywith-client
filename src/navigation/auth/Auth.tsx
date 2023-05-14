import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { AuthStackParameterList } from '../types';
import Header from '../header';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import FindUsernameScreen from './FindUsernameScreen';
import ResetPasswordScreen from './ResetPasswordScreen';

const AuthStack = createNativeStackNavigator<AuthStackParameterList>();

const Auth = () => {
  return(
    <AuthStack.Navigator 
      initialRouteName='Login'
      screenOptions={{
        headerTitle: (props) => <Header/>
      }}
    >
      <AuthStack.Screen 
        name='Login' 
        component={LoginScreen}
        options={{
          headerShown: false
        }}
      />
      <AuthStack.Screen name='Register' component={RegisterScreen} />
      <AuthStack.Screen name='FindUsername' component={FindUsernameScreen} />
      <AuthStack.Screen name='ResetPassword' component={ResetPasswordScreen} />
    </AuthStack.Navigator>
  );
}

export default Auth