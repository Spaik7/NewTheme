import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Dimensions, ImageBackground } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons'; 

const { width, height } = Dimensions.get('window');

const EventDescription = ({ navigation, route }) => {
     //const email = 'Dany';
     const { email } = route.params;
    return (
        <View style={styles.container}>
            {/* Top Container with Background Image and Buttons */}
            <View style={styles.topContainer}>
                <ImageBackground
                    source={{ uri: 'https://via.placeholder.com/20' }} // Replace with your image URL
                    style={styles.backgroundImage}
                    resizeMode="cover"
                >
                    {/* Button Container in the Top Left */}
                    <View style={styles.buttonContainer}>
                        {[...Array(4)].map((_, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.button}
                                onPress={() => {
                                    if (index === 0) {
                                        navigation.navigate('Home Page', { email });
                                    } else if (index === 1) {
                                        navigation.navigate('Messanger', { email, page: 11 });
                                    } else if (index === 2) {
                                        navigation.navigate('Home Page', { email });
                                    } else if (index === 3) {
                                        navigation.navigate('QandA', { email, page: 11 });
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
            </View>

            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#90EE90',
      },
    topContainer: {
        height: height * 0.5, 
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        marginHorizontal: 20,
        marginBottom: 20,
        position: 'absolute',
        top: 55,
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


});

export default EventDescription;