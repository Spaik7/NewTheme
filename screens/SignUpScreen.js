import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import Slider from '@react-native-community/slider';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [address, setAddress] = useState('');
  const [ZipCode, setZipCode] = useState('');
  const [radius, setRadius] = useState(1);
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [selectedEXP, setSelectedEXP] = useState('');
  const [image, setImage] = useState(null);

  const goals = [
    'Reduce Energy Consumption',
    'Switch to Renewable Energy',
    'Participate in Energy Sharing',
    'Improve Energy Efficiency',
    'Get Off the Grid',
  ];

  const experties = [
    'None',
    'Technician',
    'Legal',
    'Engineer',
  ];

  const toggleGoal = (goal) => {
    if (selectedGoals.includes(goal)) {
      setSelectedGoals(selectedGoals.filter((g) => g !== goal));
    } else {
      setSelectedGoals([...selectedGoals, goal]);
    }
  };

  const toggleEXP = (expert) => {
    setSelectedEXP(expert);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const checkPassword = (pw) => {
    const model = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    setIsPasswordValid(model.test(pw));
    setPassword(pw);
  };

  const handleSignUp = () => {
    if (!name || !email || !password || !address || !ZipCode || !selectedGoals.length || !selectedEXP) {
      Alert.alert('Error', 'Please fill out all fields.');
    } else if (!isValidEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
    } else if (!isPasswordValid) {
      Alert.alert('Error', 'Please enter a valid password.');
    } else {
      navigation.navigate('Home Page', { email }); 
    }
  };

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert("Permission required", "Please grant camera roll permissions to select an image.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets?.length > 0) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>Sign Up</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity style={styles.photoPlaceholder} onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.profilePicture} />
          ) : (
            <Ionicons name="camera" size={32} color="#666" />
          )}
        </TouchableOpacity>

        <Text style={styles.title}>Register</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          {!isValidEmail(email) && email.length > 0 && (
            <Text style={styles.errorText}>Invalid email format</Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            value={password}
            onChangeText={checkPassword}
            secureTextEntry
          />
          {!isPasswordValid && (
            <Text style={styles.errorText}>
              1) Password must be 8-15 characters long;{'\n'}
              2) Include a special character (@, #, $, %, &, £, ^, ?);{'\n'}
              3) Include a capital letter;{'\n'}
              4) Include a number.
            </Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your address"
            value={address}
            onChangeText={setAddress}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Zip Code</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your zip code"
            value={ZipCode}
            onChangeText={setZipCode}
            keyboardType="numeric"
          />
        </View>

        <Text style={styles.radiusLabel}>Select Radius: {radius} km</Text>
        <Slider
          style={styles.slider}
          minimumValue={5}
          maximumValue={30}
          step={1}
          value={radius}
          onValueChange={setRadius}
        />

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Energy Related Goal</Text>
          {goals.map((goal) => (
            <TouchableOpacity
              key={goal}
              style={[
                styles.goalButton,
                selectedGoals.includes(goal) ? styles.selectedGoal : null,
              ]}
              onPress={() => toggleGoal(goal)}
            >
              <Text
                style={[
                  styles.goalButtonText,
                  selectedGoals.includes(goal) ? styles.selectedGoalText : null,
                ]}
              >
                {goal}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Professional Expertise</Text>
          {experties.map((expert) => (
            <TouchableOpacity
              key={expert}
              style={[
                styles.goalButton,
                selectedEXP === expert ? styles.selectedGoal : null,
              ]}
              onPress={() => toggleEXP(expert)}
            >
              <Text
                style={[
                  styles.goalButtonText,
                  selectedEXP === expert ? styles.selectedGoalText : null,
                ]}
              >
                {expert}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={[styles.signUpButton, !isPasswordValid && styles.disabledButton]}
          onPress={handleSignUp}
          disabled={!isPasswordValid}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#1B5E20',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
  topBarTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: 20,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  photoPlaceholder: {
    backgroundColor: '#e0e0e0',
    borderRadius: 75,
    width: 150,
    height: 150,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#D9D9D9',
  },
  input: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#FFF',
  },
  radiusLabel: {
    fontSize: 16,
    marginBottom: 5,
    color: '#D9D9D9',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  goalButton: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    marginVertical: 5,
    backgroundColor: '#FFF',
  },
  selectedGoal: {
    backgroundColor: '#4CAF50',
  },
  goalButtonText: {
    textAlign: 'center',
    color: '#000',
  },
  selectedGoalText: {
    color: '#FFF',
  },
  signUpButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#BDBDBD',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});

export default SignUpScreen;
