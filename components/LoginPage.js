import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginForm = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const handleNavigateHome=()=>{
  navigation.navigate("Home")
}
  const handleLogin = async () => {
    try {
      const storedData = await AsyncStorage.getItem('formData');
      
      if (storedData !== null) {
        const storedObject = JSON.parse(storedData);

        // Check if entered email and password match stored data
        if (email === storedObject.email && password === storedObject.password) {
          console.log('Login successful!');
          navigation.navigate("Page")
          alert("Login successful!")
        } else {
          console.log('Email or password does not match.');
          alert("Email or password does not match.")
        }
      } else {
        console.log('Data is not set in local storage');
      }
    } catch (error) {
      console.error('Error checking local storage:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20, fontWeight: '800', fontSize: 30, color: 'white' }} onPress={handleNavigateHome} >
        <Text style={{ backgroundColor: 'black', borderWidth: 1, borderColor: 'white', padding: 5 }}>
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={{ color: 'black', textAlign: 'center', fontSize: 16 }}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    width: '100%',
    flexGrow: 1,
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
    margin: 40,
    width: '80%',
    marginTop: 400,
  },
});

export default LoginForm;
