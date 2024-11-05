import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Platform, Dimensions } from 'react-native';
import { Ionicons, AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'; 

const { width } = Dimensions.get('window');

const Profile = ({ navigation, route }) => {
  const { email, page } = route.params;
  const scrollViewRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  const scrollToTop = () => {
    scrollViewRef.current.scrollTo({ y: 0, animated: true });
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {[...Array(3)].map((_, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => {
              if (index === 0) {
                navigation.navigate('Expert', { email, page:page });
              } else if (index === 1) {
                navigation.navigate('Messanger', { email, page: 16 });
              } else if (index === 2) {
                navigation.navigate('Home Page', { email });
              } 
            }}
          >
            {index === 0 ? (
              <Ionicons name="arrow-back" size={24} color="#FFF" />
            ) : index === 1 ? (
              <Entypo name="chat" size={24} color="#FFF" />  
            ) : index === 2 ? (
              <Ionicons name="home" size={24} color="#FFF" />
            ) : null}
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} ref={scrollViewRef}
                  onScroll={({ nativeEvent }) => setScrollY(nativeEvent.contentOffset.y)}
                  scrollEventThrottle={16}>

        <View style={styles.profileContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }}
            style={styles.profilePicture}
          />
          <View style={styles.profileDescription}>
            <Text style={styles.textProfileDescription}>Name</Text>
            <Text style={styles.textProfileDescription}>Age</Text>
            <Text style={styles.textProfileDescription}>City</Text>
          </View>
        </View>

        {/* Scrollable Description */}
        <View style={styles.descriptionContainer}>
          <ScrollView style={styles.description} showsVerticalScrollIndicator={false}>
            <Text style={styles.textDescription}>
              Here the person's description goes. If the text is longer than the maximum height, this text will scroll within the fixed container, so the user can read more without expanding the overall layout. This makes the layout flexible but keeps the description within bounds.
            </Text>
          </ScrollView>
        </View>

        <TouchableOpacity>
        <View style={styles.messageContainer}>
            <Text style={styles.messageText}>Write a message</Text>
            <Ionicons name="send" size={24} color="#FFF" />
        </View>
        </TouchableOpacity>

        <Text style={[ { marginTop: 10 }, styles.OutsideText]}>
            Main Community
        </Text>

        <View style={styles.listItem}>
            {/* Image and Text Section */}
            <View style={styles.leftSection}>
                <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.listItemImage} />
                    <View style={styles.textContainer}>
                        <Text style={styles.listItemText}>Name</Text>
                        <Text style={styles.memberText}>5 Members</Text>
                    </View>
            </View>

            {/* Icon Section */}
            <MaterialCommunityIcons name="information-outline" size={24} color="#000" />
        </View>

        <Text style={[ { marginTop: 25 }, styles.OutsideText]}>
        Professional Expertise
        </Text>

        <View style={styles.staticButtonsContainer}>
            <View style={styles.staticButton}>
                <Text style={styles.staticButtonText}>Engineering</Text>
            </View>
        </View>

        <Text style={[ { marginTop: 25 }, styles.OutsideText]}>
            Energy Goal
        </Text>

        <View style={styles.staticButtonsContainer}>
            <View style={styles.staticButton}>
                <Text style={styles.staticButtonText}>Solar Power</Text>
            </View>
            <View style={styles.staticButton}>
                <Text style={styles.staticButtonText}>Wind Energy</Text>
            </View>
            <View style={styles.staticButton}>
                <Text style={styles.staticButtonText}>Power Storage</Text>
            </View>
        </View>


      </ScrollView>

      {scrollY > 200 && (
        <TouchableOpacity style={styles.backToTopButton} onPress={scrollToTop}>
          <AntDesign name="arrowup" size={24} color="#000" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90EE90',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderColor: '#fff',
    borderWidth: 2,
    position: 'absolute',
    top: 80,
    left: '10%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 20,
    marginTop: 20,
    height: 50,
    position: 'absolute',
    top: 35,
    zIndex: 1,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  profileDescription: {
    top: 110,
    left: Platform.OS === 'android' ? '10%' : '5%',
  },
  textProfileDescription: {
    fontSize: 20,
  },
  scrollContent: {
    paddingVertical: 10,
    paddingHorizontal: 10,
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
  descriptionContainer: {
    marginTop: 180,
    paddingHorizontal: 10,
    maxHeight: 150, // Set maximum height for description area
    width: '95%',
    alignSelf: 'center',
    borderRadius: 20,
    overflow: 'hidden', // Ensures content doesn’t exceed bounds
    backgroundColor: '#F9F6EE',
  },
  description: {
    padding: 10,
  },
  textDescription: {
    fontSize: 16,
  },
  messageContainer: {
    flexDirection: 'row',         
    alignItems: 'center',         
    padding: 10, 
    backgroundColor: '#06402B',
    borderRadius: 20,
    marginTop: 10,  
    width: '95%',
    left: 11,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  messageText: {
    marginRight: 8,               
    color: '#FFF',                
    fontSize: 16,  
    paddingLeft: 20,               
  },
  OutsideText: {
    fontSize: 20,
    //marginTop: 10,
    marginLeft: 15,
    color: '#F9F6EE',
  },
listItem: {
    flexDirection: 'row',           // Arrange items horizontally
    justifyContent: 'space-between', // Space items out across the row
    alignItems: 'center',            // Center vertically
    padding: 10,
    backgroundColor: '#F9F6EE',
    borderRadius: 10,
    marginVertical: 5,
    width: '95%',
    left: 11,
},
leftSection: {
    flexDirection: 'row',            // Arrange image and text container horizontally
    alignItems: 'center',            // Center vertically
},
listItemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,                 // Space between image and text container
},
textContainer: {
    justifyContent: 'center',        // Center text vertically within this container
},
listItemText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10,
},
memberText: {
    fontSize: 14,
    color: '#666',                  
    paddingLeft: 10,
},
staticButtonsContainer: {
    flexDirection: 'row',      // Align buttons in a row
    justifyContent: 'space-between',  // Add spacing between each button
    alignItems: 'center',      // Center align items vertically
    marginVertical: 10,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  staticButton: {
    backgroundColor: '#EEE',    // Button background color
    paddingVertical: 10,        // Vertical padding
    paddingHorizontal: 15,      // Horizontal padding
    borderRadius: 10,           // Rounded corners
    marginHorizontal: 5,        // Space between each button
  },
  staticButtonText: {
    fontSize: 16,
    color: '#000',
  },
  
  immagine: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: (width * 0.1) / 2,
    resizeMode: 'contain',
},
textContainer2: {
    flexDirection: 'column', 
    marginLeft: -120, 
    alignItems: 'flex-start', 
},
});

export default Profile;
