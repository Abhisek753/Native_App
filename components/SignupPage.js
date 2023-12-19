import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
const SignUpForm = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [age, setAge] = useState('');
  const handleNavigateHome=()=>{
    navigation.navigate("Home")
  }
  const handleCreateAccount =async () => {
    const formData = {
        email,
        password,
        confirmPassword,
        firstName,
        age,
      };
      try {
        const formDataString = JSON.stringify(formData);
        
        await AsyncStorage.setItem('formData', formDataString);
        navigation.navigate("Login")
        // console.log('88888888888', formData);
        console.log('Form data stored in local pdata:', formDataString);


      } catch (error) {
        console.error('Error storing form data:', error);
      }
  };

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20, fontWeight: '800', fontSize: 30, color: 'white' }} onPress={handleNavigateHome} >
        <Text style={{ backgroundColor: 'black', borderWidth: 1, borderColor: 'white', padding: 5 }} >
          CUEMATH
        </Text>{' '}
        <Text style={{ color: 'gold' }}>GO!</Text>
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email ID"
          placeholderTextColor="white"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="white"
          secureTextEntry
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          placeholderTextColor="white"
          onChangeText={(text) => setFirstName(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Age"
          placeholderTextColor="white"
          keyboardType="numeric"
          onChangeText={(text) => setAge(text)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
        <Text style={{ color: 'black', textAlign: 'center', fontSize: 16 }}>
          Create Account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    width: '100%',
  },
  inputContainer: {
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    borderRadius: 8,
    margin: 10,
    width: '80%',
  },
  input: {
    color: 'white',
    fontSize: 16,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    margin: 10,
    width: '80%',
    marginTop: 20,
  },
});

export default SignUpForm;
