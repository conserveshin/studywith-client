import React, {Ref, useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import type { AuthStackScreenProps } from '../types';
import useLogin from '../../hooks/useLogin';

const LoginScreen = ({navigation}: AuthStackScreenProps<'Login'>) => {
  const { values, onChange, onLogin } = useLogin();

  var passwordInput: TextInput | null = null;

  return(
    <View style={styles.container}>
      <Text style={styles.logo}>Login</Text>
      <View>
        <TextInput
          placeholder='Username'
          inputMode='text'
          autoComplete='username'
          maxLength={10}
          returnKeyType='next'
          onChangeText={text => onChange('username', text)}
          onSubmitEditing={() => passwordInput?.focus()}
          blurOnSubmit={false}
          style={styles.textinput}
        />
        <TextInput
          placeholder='Password'
          inputMode='text'
          secureTextEntry={true}
          maxLength={20}
          autoComplete='off'
          returnKeyType='done'
          onChangeText={text => onChange('password', text)}
          ref={(input) => passwordInput = input}
          style={styles.textinput}
        />
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity 
          style={styles.normalButton}
          onPress={() => {
            onLogin()
            .then(console.log)
            .catch(console.log);
          }}>
            <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.normalButton}
          onPress={() => navigation.navigate('Register')}>
            <Text>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity 
          style={styles.linkButtonView}
          onPress={() => navigation.navigate('FindUsername')}>
            <Text style={styles.linkText}>Find Username</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.linkButtonView}
          onPress={() => navigation.navigate('ResetPassword')}>
            <Text style={styles.linkText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    textAlign: 'center',
    margin: 10,
    fontSize: 24
  },
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  textinput: {
    width: '70%',
    marginVertical: '2%',
    borderWidth: 1,
    alignSelf: 'center'
  },
  buttonView: {
    marginTop: '2%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  normalButton: {
    marginHorizontal: '1%',
    width: '34%',
    alignItems: 'center',
    padding: '2%',
    backgroundColor: '#888888'
  },
  linkButtonView: {
    marginHorizontal: '7.5%',
    alignItems: 'center',
    padding: '2%'
  },
  linkText: {
    textDecorationLine: 'underline'
  }
});

export default LoginScreen;