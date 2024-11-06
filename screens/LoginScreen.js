import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { height } = Dimensions.get('window');

import { useAuth} from "../store/auth";


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const{ handleChangeEmail } = useAuth()

  const fakeEmail = "A@a";
  const fakepassw = 1234;

  const handleLogin = () => {
    // Check if email and password are empty
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }

    // Check if email and password match the fake credentials
    if (email !== fakeEmail || password != fakepassw) {
      Alert.alert('Error', 'Invalid email or password. Please try again.');
      return;
    }

    handleChangeEmail(email);



    // Navigate to Home Page, passing the email as a parameter
    // navigation.navigate('Home Page');
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }}
            style={styles.image}
          />

          <View style={styles.topBar}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="#FFF" />
            </TouchableOpacity>
            <Text style={styles.topBarTitle}>Login</Text>
          </View>
        </View>

        <View style={styles.secondContainer}>
          <Text style={styles.IDK}>Login</Text>
          <Text style={styles.label}>E-mail address</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#D9D9D9"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#D9D9D9"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B5E20',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  IDK: {
    fontSize: 26,
    marginTop: -30,
    textAlign: 'center',
    color: '#D9D9D9',
    marginBottom: 35,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -260,
    marginBottom: 10,
  },
  topBarTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: 20,
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  image: {
    marginLeft: -20,
    marginTop: -20,
    width: '115%',
    height: height * 0.4,
    resizeMode: 'cover',
  },
  input: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    color: '#D9D9D9',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#2E7D32',
    paddingVertical: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#D9D9D9',
  },
  secondContainer: {
    marginTop: 300,
  },
});

export default LoginScreen;
