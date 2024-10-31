import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import MapView from 'react-native-maps'; // Install react-native-maps for this

const { width, height } = Dimensions.get('window');

const Map = ({ navigation, route }) => {
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
                                        navigation.navigate('Messanger', { email, page: 1 });
                                    } else if (index === 2) {
                                        navigation.navigate('Home Page', { email });
                                    } else if (index === 3) {
                                        navigation.navigate('QandA', { email, page: 1 });
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

            {/* Interactive Map */}
            <MapView style={styles.map} initialRegion={{
        latitude: 39.3999,  // Latitude for Portugal
        longitude: -8.2245, // Longitude for Portugal
        latitudeDelta: 3.5, // Adjust this value for zoom level
        longitudeDelta: 3.5, // Adjust this value for zoom level
    }}  />
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
    map: {
        flex: 1, // Fill the remaining screen space
    },
});

export default Map;
