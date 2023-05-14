import React, {useState} from 'react';
import {
  View, Text, StyleSheet, TextInput, TouchableOpacity
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const RegisterScreen = () => {

  const [major, setMajor] = useState('');

  return(
    <View style={styles.container}>
      <View 
        style={styles.inputAndCheckView}>
        <TextInput 
          placeholder='Username'
          inputMode='text'
          autoComplete='username'
          maxLength={10}
          returnKeyType='done'
          style={styles.singleInput}
        />
        <TouchableOpacity
          style={styles.checkButton}
        >
          <Text>Check</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.passwordView, {marginVertical: '5%'}]}>
        <TextInput 
          placeholder='Password'
          inputMode='text'
          secureTextEntry={true}
          maxLength={20}
          returnKeyType='next'
          style={[styles.passwordInput, {marginBottom: '1%'}]}
        />
        <TextInput 
          placeholder='Confirm Password'
          inputMode='text'
          secureTextEntry={true}
          maxLength={20}
          returnKeyType='done'
          style={[styles.passwordInput, {marginTop: '1%'}]}
        />
      </View>
      <View style={[styles.inputAndCheckView, {marginBottom: '1%'}]}>
        <TextInput
          placeholder='Email Address'
          inputMode='email'
          autoComplete='email'
          maxLength={320}
          returnKeyType='done'
          style={styles.singleInput}
        />
        <TouchableOpacity style={styles.checkButton}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.inputAndCheckView, {marginTop: '1%'}]}>
        <TextInput
          placeholder='Code'
          inputMode='text'
          maxLength={5}
          returnKeyType='done'
          style={styles.singleInput}
        />
        <TouchableOpacity style={styles.checkButton}>
          <Text>Check</Text>
        </TouchableOpacity>
      </View>
      <Picker
        mode='dropdown'
        selectedValue={major}
        onValueChange={(value, index) => setMajor(value)}
        style={[styles.majorPicker, {marginTop: '5%'}]}
      >
        <Picker.Item label="Major" value={null} enabled={false}/>
        <Picker.Item label="School of Computing" value="School of Computing" />
      </Picker>
      <TouchableOpacity style={[styles.registerButton, {marginTop: '5%'}]}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: '2%'
  },
  inputAndCheckView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  singleInput: {
    width: '50%',
    marginRight: '2%',
    borderWidth: 1
  },
  checkButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1%',
    backgroundColor: '#888888',
    width: '18%'
  },
  passwordView: {
    alignSelf: 'center',
    width: '70%'
  },
  passwordInput: {
    width: '100%',
    borderWidth: 1,
    alignSelf: 'center'
  },
  majorPicker: {
    width: '70%',
    borderWidth: 1,
    alignSelf: 'center'
  },
  registerButton: {
    width: '70%',
    height: '7%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1%',
    backgroundColor: '#888888'
  }
});

export default RegisterScreen;