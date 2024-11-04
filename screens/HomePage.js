import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Dimensions, ImageBackground } from 'react-native';
import { Ionicons, MaterialCommunityIcons, AntDesign, Entypo } from '@expo/vector-icons'; 

const { width } = Dimensions.get('window');

const HomePage = ({ navigation, route }) => {
  const email = 'Dany';

  const scrollViewRef = useRef(null); 
  const [scrollY, setScrollY] = useState(0);

  const scrollToTop = () => {
    scrollViewRef.current.scrollTo({ y: 0, animated: true });
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer2}>
        {[...Array(2)].map((_, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button2}
            onPress={() => {
              if (index === 0) {
                navigation.navigate('Messanger', { email, page: 0 });
              } else if (index === 1) {
                navigation.navigate('QandA', { email, page: 0 });
              }
            }}
          >
            {index === 0 ? (
              <Entypo name="chat" size={24} color="#FFF" />
            ) : (
              <Entypo name="light-bulb" size={24} color="#FFF" />
            )}
          </TouchableOpacity>
        ))}
      </View>

      <ImageBackground
        source={{ uri: 'https://via.placeholder.com/20' }}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={() => { navigation.navigate('Profile', { email }); }}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }}
            style={styles.profilePicture}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.welcomeText}>Welcome, {email}</Text>

      <View style={styles.bottomContainer}>
        <Text style={styles.communityText}>Join Various Community</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.button, styles.wideButton]}
            onPress={() => navigation.navigate('NewCommunity', { email })}
          >
            <Ionicons name="search" size={24} color="#000" />
            <Text style={styles.buttonText}>Find your community</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.narrowButton]}
            onPress={() => navigation.navigate('Map', { email })}>
            <Ionicons name="map" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={styles.scrollContent}
          onScroll={({ nativeEvent }) => {
            setScrollY(nativeEvent.contentOffset.y);
          }}
          scrollEventThrottle={16} 
        >
          {[...Array(10)].map((_, index) => (
            <View key={index} style={styles.listItem}>
              <Image
                source={{ uri: 'https://via.placeholder.com/40' }} 
                style={styles.itemImage} 
              />
              <Text style={styles.listItemText}>Item {index + 1}</Text>
              <MaterialCommunityIcons name="information-outline" size={24} color="#000" />
            </View>
          ))}
          <View style={styles.footerSpace} />
        </ScrollView>
        {scrollY > 200 && (
          <TouchableOpacity style={styles.backToTopButton} onPress={scrollToTop}>
            <AntDesign name="arrowup" size={24} color="#000" />
          </TouchableOpacity>
        )}
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
  buttonContainer2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 20,
    position: 'absolute',
    top: 60,
    left: 10,
    zIndex: 10,
  },
  button2: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 60,
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
    justifyContent: 'space-between',
    borderRadius: 30,
    backgroundColor: '#4CAF50',
  },
  narrowButton: {  
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
    marginLeft: 10,
  },
  scrollContent: {
    paddingVertical: 10,
    width: width,
    backgroundColor: '#1B5E20',
    paddingHorizontal: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  itemImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  listItemText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  backToTopButton: {
    position: 'absolute',
    bottom: 20,
    right: 30,
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  footerSpace: {
    height: 30,
    marginTop: 30,
  },
});

export default HomePage;
