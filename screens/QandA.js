import React, { useState } from 'react';
import { View, Text,TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const Map = ({ navigation, route }) => {
    const { email, page } = route.params;

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
                        {[...Array(3)].map((_, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.button}
                                onPress={() => {
                                    if (index === 0) {
                                        switch (page)
                                        {
                                            case 0: 
                                            navigation.navigate('Home Page', { email });
                                            break;

                                            case 1: 
                                            navigation.navigate('Map', { email });
                                            break;

                                            case 2: 
                                            navigation.navigate('Profile', { email });
                                            break;

                                            case 3: 
                                            navigation.navigate('Messanger', { email });
                                            break;

                                            case 5: 
                                            navigation.navigate('NewCommunity', { email });
                                            break;

                                            case 6: 
                                            navigation.navigate('ComunityDescription', { email });
                                            break;

                                            case 7: 
                                            navigation.navigate('Members', { email });
                                            break;

                                            case 8: 
                                            navigation.navigate('CommunityFeed', { email });
                                            break;

                                            case 9: 
                                            navigation.navigate('AddComunity', { email });
                                            break;

                                            case 10: 
                                            navigation.navigate('NewPostEvent', { email });
                                            break;

                                            case 11: 
                                            navigation.navigate('EventDescription', { email });
                                            break;

                                            case 12: 
                                            navigation.navigate('Comments', { email });
                                            break;

                                            case 13: 
                                            navigation.navigate('DocumentList', { email });
                                            break;

                                            case 14: 
                                            navigation.navigate('VisitProfile', { email });
                                            break;
                                        }
                                    } else if (index === 1) {
                                        navigation.navigate('Messanger', { email, page: 4 });
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
                </ImageBackground>
            </View>

            <Text>QandA</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topContainer: {
        height: height * 0.25, // Set top container to occupy 1/4 of the screen
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

export default Map;
