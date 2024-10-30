import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ImageBackground, Dimensions, Image } from 'react-native';
import { Ionicons, MaterialCommunityIcons, AntDesign,Entypo } from '@expo/vector-icons'; 

const { width, height } = Dimensions.get('window');

const ComunityDescription = ({ navigation, route }) => {
    const email = 'Dany';
    //const { email } = route.params;

    const scrollViewRef = useRef(null); // Reference for ScrollView
    const [scrollY, setScrollY] = useState(0); // Track scroll position

    const scrollToTop = () => {
        scrollViewRef.current.scrollTo({ y: 0, animated: true });
    };

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
                                    navigation.navigate('ComunityDescription', { email });
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
            
                <View style={styles.beforScroll}>
                   <Text style={styles.Title}>Title</Text>
                   <Text style={styles.IDK}>Members</Text>
                </View>
                <ScrollView
                        ref={scrollViewRef}
                        contentContainerStyle={styles.scrollContent}
                        onScroll={({ nativeEvent }) => {
                            // Update the scroll position
                            setScrollY(nativeEvent.contentOffset.y);
                        }}
                        scrollEventThrottle={16} // For performance optimization
                    >
                    
                    {[...Array(10)].map((_, index) => (
                        <View key={index} style={styles.listItem}>
                            <Image
                                source={{ uri: 'https://via.placeholder.com/20' }}
                                style={styles.immagine}
                                resizeMode="contain"
                            />
                            {/* Text Container */}
                            <View style={styles.textContainer}>
                                <Text style={styles.listItemText}>Member {index + 1}</Text>
                                <Text style={styles.listItemSubtext}>Additional Info</Text>
                            </View>
                            <MaterialCommunityIcons name="information-outline" size={24} color="#000" />
                        </View>
                    ))}

                    <View style={styles.footerSpace} />
                </ScrollView>
                {scrollY > 200 && ( // Show button if scrolled more than 200px
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
    beforScroll:{
        alignItems:'center',
        paddingVertical: 10,
        width: width,
        backgroundColor: '#1B5E20',
        paddingHorizontal: 20,
    },
    Title:{
        fontSize: 24,
        fontWeight: 'bold',
    },
    IDK:{
        fontSize:18,
    },
    listItem: {
        flexDirection: 'row', // Align children in a row
        justifyContent: 'space-between', // Space between icon and text group
        alignItems: 'center', // Center align items vertically
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    textContainer: {
        flexDirection: 'column', 
        marginLeft: -120, 
        alignItems: 'flex-start', 
    },
    
    listItemText: {
        fontSize: 16,
        color: '#333',
    },
    listItemSubtext: {
        fontSize: 12,
        color: '#666', // Slightly lighter color for distinction
    },
    immagine: {
        width: width * 0.1,
        height: width * 0.1,
        borderRadius: (width * 0.1) / 2,
        resizeMode: 'contain',
    },
    backToTopButton: {
        position: 'absolute',
        bottom: 20, // Distance from the bottom
        right: 30, // Distance from the right
        backgroundColor: '#4CAF50',
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
    },
    backToTopIcon: {
        width: 20,
        height: 20,
    },
    footerSpace: {
        height: 20, // Adjust this value to control the amount of space at the end
        marginTop: 30,
    },
      
});

export default ComunityDescription;
