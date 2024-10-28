import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const HomePage = ({ navigation, route }) => {
  const { email } = route.params;

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={{ uri: 'https://via.placeholder.com/1080x1920' }}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      {/* Profile Picture at the Top Center */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.profilePicture}
        />
      </View>

      {/* Display email or other information */}
      <Text style={styles.welcomeText}>Welcome, {email}</Text>

      {/* Container for Buttons and Scrollable List */}
      <View style={styles.bottomContainer}>
        {/* "Join Various Community" Text */}
        <Text style={styles.communityText}>Join Various Community</Text>

        {/* Buttons Container */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Button 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Button 2</Text>
          </TouchableOpacity>
        </View>

        {/* Full Width Scrollable List */}
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {[...Array(10)].map((_, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.listItemText}>Item {index + 1}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 2,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#fff',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 200,
  },
  communityText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginBottom: 20, // Adjusts spacing above buttons
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  scrollContent: {
    paddingVertical: 10,
    width: width,
    backgroundColor: '#1B5E20',
    paddingHorizontal: 20,
  },
  listItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  listItemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default HomePage;
