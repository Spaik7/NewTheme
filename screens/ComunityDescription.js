import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions, ImageBackground } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons'; 


const { width, height } = Dimensions.get('window');


const ComunityDescription = ({ navigation, route }) => {
    const email = 'Dany';
    //const { email } = route.params;

    return (
        <View style={styles.container}>
            {/* Background Image */}
            <ImageBackground
                source={{ uri: 'https://via.placeholder.com/20' }} // Replace with your image URL
                style={styles.backgroundImage}
                resizeMode="cover" // Optional: to adjust the image scaling
            >
                {/* Button Container */}
                <View style={styles.buttonContainer}>
                    {[...Array(4)].map((_, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.button}
                            onPress={() => {
                                if (index === 0) {
                                    navigation.navigate('NewCommunity', { email });
                                } else if (index === 1) {
                                    // Add functionality for the second button
                                } else if (index === 2) {
                                    navigation.navigate('Home Page', { email });
                                } else if (index === 3) {
                                    // Add functionality for the fourth button
                                }
                            }}
                        >
                            {index === 0 ? (
                                <Ionicons name="arrow-back" size={24} color="#FFF" />
                            ) : index === 1 ? (
                                <Entypo name="chat" size={24} color="#FFF" />  
                            ) : index === 2 ? (
                                <Ionicons name="home" size={24} color="#FFF" />
                            ) : (
                                <Entypo name="light-bulb" size={24} color="#FFF" />
                            )}
                        </TouchableOpacity>
                    ))}
                </View>
            </ImageBackground>
            
                <View style={styles.scrollContent}>
                    <TouchableOpacity
                    onPress={() => { navigation.navigate('Members', { email }); }}
                    >
                        <Text>Participant</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.JoinButton}
                        onPress={() => { navigation.navigate('anotherONE', { email }); }}
                    >
                        <Text style={styles.buttonText}>Join</Text>
                    </TouchableOpacity>

                    {/* Horizontal line divider */}
                    <View style={styles.divider} />
                </View>
                <ScrollView
                    contentContainerStyle={styles.scrollContent}>

                <View style={styles.Description}>
                    <Text style={styles.Title}>
                        ENergy
                    </Text>
                    <Text style={styles.topic}>
                        Saving Energy is good for the planet arbhgfijkc newfuhc iebih irsfih wigbeiur gihiugirgip3r hiughor uihe igbi rifuhr ihiuh iurhi giu hri heu rhgih ire gi hiugh iuh iuru hiri u Saving Energy is good for the planet arbhgfijkc newfuhc iebih irsfih wigbeiur gihiugirgip3r hiughor uihe igbi rifuhr ihiuh iurhi giu hri heu rhgih ire gi hiugh iuh iuru hiri u Saving Energy is good for the planet arbhgfijkc newfuhc iebih irsfih wigbeiur gihiugirgip3r hiughor uihe igbi rifuhr ihiuh iurhi giu hri heu rhgih ire gi hiugh iuh iuru hiri u Saving Energy is good for the planet arbhgfijkc newfuhc iebih irsfih wigbeiur gihiugirgip3r hiughor uihe igbi rifuhr ihiuh iurhi giu hri heu rhgih ire gi hiugh iuh iuru hiri u Saving Energy is good for the planet arbhgfijkc newfuhc iebih irsfih wigbeiur gihiugirgip3r hiughor uihe igbi rifuhr ihiuh iurhi giu hri heu rhgih ire gi hiugh iuh iuru hiri u Saving Energy is good for the planet arbhgfijkc newfuhc iebih irsfih wigbeiur gihiugirgip3r hiughor uihe igbi rifuhr ihiuh iurhi giu hri heu rhgih ire gi hiugh iuh iuru hiri u Saving Energy is good for the planet arbhgfijkc newfuhc iebih irsfih wigbeiur gihiugirgip3r hiughor uihe igbi rifuhr ihiuh iurhi giu hri heu rhgih ire gi hiugh iuh iuru hiri u Saving Energy is good for the planet arbhgfijkc newfuhc iebih irsfih wigbeiur gihiugirgip3r hiughor uihe igbi rifuhr ihiuh iurhi giu hri heu rhgih ire gi hiugh iuh iuru hiri u Saving Energy is good for the planet arbhgfijkc newfuhc iebih irsfih wigbeiur gihiugirgip3r hiughor uihe igbi rifuhr ihiuh iurhi giu hri heu rhgih ire gi hiugh iuh iuru hiri u 
                    </Text>

                </View>


            </ScrollView>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
    },
    backgroundImage: {
        height: height / 2, // Set the height to half of the screen
        justifyContent: 'flex-start', // Align children at the top
        marginTop: -50,
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        marginHorizontal: 20,
        marginBottom: 20,
        position: 'absolute', // Position the buttons over the image
        top: 50, // Adjust the top position if needed
    },
    button: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#4CAF50',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center', // Center content if needed
        alignItems: 'center', // Center content if needed
    },
    scrollContent: {
        paddingVertical: 10,
        width: width,
        backgroundColor: '#1B5E20',
        paddingHorizontal: 20,
    },
    JoinButton: {
        backgroundColor: '#4CAF50',
        width: 100,
        borderRadius: 50,
        padding: 15,
        alignItems: 'center',
        left: width/1.5,
        top: -10,
      },
      divider: {
        height: 1, // Thickness of the line
        backgroundColor: '#000', // Color of the line
        marginHorizontal: 5, // Space on the sides
        marginVertical: 10, // Space above and below the line
    },
});

export default ComunityDescription;
