import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imagePlaceholder} />

      <Text style={styles.heading}>Start Creating Your Community, Your Way</Text>
      <Text style={styles.subheading}>
        Connect with like-minded individuals to share ideas, projects, and create a greener future.
      </Text>

      <TouchableOpacity 
        style={styles.signUpButton} 
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.loginButton} 
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.bottomPlaceholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5DC',
    paddingHorizontal: 20,
  },
  imagePlaceholder: {
    width: 150,
    height: 150,
    backgroundColor: '#E0E0E0',
    borderRadius: 75,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
    textAlign: 'center',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 16,
    color: '#4E4E4E',
    textAlign: 'center',
    marginBottom: 30,
  },
  signUpButton: {
    backgroundColor: '#2E7D32',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 30,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#8BC34A',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 30,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomPlaceholder: {
    width: '100%',
    height: 100,
    backgroundColor: '#E0E0E0',
    marginTop: 50,
  },
});

export default WelcomeScreen;
