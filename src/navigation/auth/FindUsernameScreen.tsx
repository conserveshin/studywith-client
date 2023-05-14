import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import type { AuthStackScreenProps } from '../types';

const FindUsernameScreen = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.label}>Find Username</Text>
      <TextInput 
        placeholder='Email Address'
        inputMode='email'
        autoComplete='email'
        maxLength={320}
        returnKeyType='done'
        style={styles.usernameInput}
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
    fontSize: 20
  },
  usernameInput: {
    alignSelf: 'center',
    width: '70%',
    marginVertical: '5%',
    borderWidth: 1
  },
  submitButton: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    padding: '1%',
    height: '7%',
    backgroundColor: '#888888'
  }
});

export default FindUsernameScreen;