// screens/LoginScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { height } = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
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

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#1B5E20',
  },
  IDK: {
    fontSize: 26,
    marginTop: -30,
    textAlign: 'center', // Center only the "Login" text
    color: '#D9D9D9',
    marginBottom: 35,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -280,
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
