import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import type { AuthStackScreenProps } from '../types';

const ResetPasswordScreen = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.label}>Reset Password</Text>
      <TextInput 
        placeholder='Username'
        inputMode='text'
        autoComplete='username'
        maxLength={10}
        returnKeyType='done'
        style={[styles.input, {marginBottom: '1%'}]}
      />
      <TextInput 
        placeholder='Email Address'
        inputMode='email'
        autoComplete='email'
        maxLength={320}
        returnKeyType='done'
        style={[styles.input, {marginTop: '1%'}]}
      />
      <TouchableOpacity style={styles.submitButton}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  label: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: '5%'
  },
  input: {
    alignSelf: 'center',
    width: '70%',
    borderWidth: 1
  },
  submitButton: {
    marginTop: '5%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    padding: '1%',
    height: '7%',
    backgroundColor: '#888888'
  }
});

export default ResetPasswordScreen;