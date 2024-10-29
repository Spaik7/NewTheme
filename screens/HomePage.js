import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const HomePage = ({ navigation, route }) => {
  //const { email } = route.params;
const email = 'Dany';
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://via.placeholder.com/1080x1920' }}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.profilePicture}
        />
      </View>

      
      <Text style={styles.welcomeText}>Welcome, {email}</Text>

      
      <View style={styles.bottomContainer}>
      
        <Text style={styles.communityText}>Join Various Community</Text>

      
        <View style={styles.buttonContainer}>
      
        <TouchableOpacity 
            style={[styles.button, styles.wideButton]}
            onPress={() => navigation.navigate('NewCommunity', { email })}
        >
            <Image
                source={{ uri: 'https://via.placeholder.com/20' }} // Replace with your icon URI
                style={styles.icon}
            />
            <Text style={styles.buttonText}>Find your community</Text>
        </TouchableOpacity>




      
            <TouchableOpacity style={[styles.button, styles.narrowButton]}>
                <Image
                source={{ uri: 'https://via.placeholder.com/20' }} // Replace with map icon URI
                style={[styles.icon, { marginLeft: 20 }]}
                />
            </TouchableOpacity>
        </View>

      
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
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  wideButton: {
    width: '80%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Pushes icon to left and text to the end
    borderRadius: 30,
    backgroundColor: '#4CAF50',
},
  narrowButton: {  
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    flex: 1, // Allow text to expand
    textAlign: 'center', // Align text to the right edge
    marginLeft: 10, // Spacing from the icon
},
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
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
