import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const AuthButtons = ({navigation}) => {
  const handleLoginPress = () => {
    navigation.navigate('Login');
  };
  const handleSignUpPress=()=>{
    navigation.navigate("Signup")
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black',width:"100%" }}>
      <Text style={{ marginBottom: 20, fontWeight: '800', fontSize: 30, color: 'white' }}>
        <Text style={{ backgroundColor: 'black', borderWidth: 1, borderColor: 'white', padding: 5 }}>
          CUEMATH
        </Text>{' '}
        <Text style={{color:"gold"}}>GO!</Text>
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 8,
            margin: 10,
            borderWidth: 1,
            borderColor: 'white',
            paddingHorizontal:40,
          }}
          onPress={handleSignUpPress}

        >
          <Text style={{ color: 'black', textAlign: 'center', fontSize: 16 }}>
            Signup
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            padding: 10,
            paddingHorizontal:40,
            borderRadius: 8,
            margin: 10,
            borderWidth: 1,
            borderColor: 'white',
          }}
          onPress={handleLoginPress}
        >
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AuthButtons;
