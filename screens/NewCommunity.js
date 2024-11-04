import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Ionicons, Entypo, AntDesign } from '@expo/vector-icons'; 

const { width } = Dimensions.get('window');

const NewCommunity = ({ navigation, route }) => {
    const { email } = route.params;

    const [searchText, setSearchText] = useState('');
    const scrollViewRef = useRef(null); // Reference for ScrollView
    const [scrollY, setScrollY] = useState(0); // Track scroll position

    // Function to scroll to the top
    const scrollToTop = () => {
        scrollViewRef.current.scrollTo({ y: 0, animated: true });
    };

    return (
        <View style={styles.container}>
            {/* Button Container */}
            <View style={styles.buttonContainer}>
                {[...Array(4)].map((_, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.button}
                        onPress={() => {
                            if (index === 0) {
                                navigation.navigate('Home Page', { email });
                            } else if (index === 1) {
                                navigation.navigate('Messanger', { email, page: 5 });
                            } else if (index === 2) {
                                navigation.navigate('Home Page', { email });
                            } else if (index === 3) {
                                navigation.navigate('QandA', { email, page: 5 });
                            }
                        }}
                    >
                    {index === 0 ? (
                            <Ionicons name="arrow-back" size={24} color="#FFF" />
                        ) : index === 1 ? (
                            <Entypo name="chat" size={24} color="#FFF" />  // Use Entypo icon here
                        ) : index === 2 ? (
                            <Ionicons name="home" size={24} color="#FFF" />
                        ) : (
                            <Entypo name="light-bulb" size={24} color="#FFF" />
                        )}
                    </TouchableOpacity>
                ))}
            </View>

            {/* Search Bar with Icon */}
            <View style={styles.searchContainer}>
            <Ionicons name="search" size={24} color="#000" />
                <TextInput
                    style={styles.searchBar}
                    placeholder='Find Your New Community or Event'
                    marginLeft = {15}
                    placeholderTextColor={'#000'}
                    value={searchText}
                    onChangeText={(text) => setSearchText(text)}
                />
            </View>

            <TouchableOpacity style={styles.nearbyContainer}
            onPress={() => {
                navigation.navigate('AddComunity', { email });
            }}
            >
                <Text style={styles.nearbyText}>Nearby</Text>
                <Text style={styles.recommendedText}> recommended</Text>
                <Ionicons name="add" size={24} color="#000" />
            </TouchableOpacity>

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
                    <TouchableOpacity
                        key={index}
                        style={styles.listItem}
                        onPress={() => {
                            navigation.navigate('ComunityDescription', { email });
                        }}
                    >
                        <Image
                            source={{ uri: 'https://via.placeholder.com/20' }}
                            style={styles.listItemIcon}
                        />
                        <Text style={styles.listItemText}>Item {index + 1}</Text>
                        <Text style={styles.listItemDescription}>Item Description {index + 1}</Text>
                    </TouchableOpacity>
                ))}
                <Text>You got to the end of this screen!</Text>
                <Text>Didn't find anything you like?</Text>
                <Text>Search it or create it!</Text>
                <View style={styles.footerSpace} />
            </ScrollView>   


            {/* Back to Top Button */}
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
        // backgroundColor: '#cbf5d1', // Uncomment this if needed
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        marginHorizontal: 20,
        marginBottom: 20,
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
    icon: {
        width: 15,
        height: 15,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        marginHorizontal: 20,
        marginTop: 20,
    },
    searchIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    searchBar: {
        flex: 1,
        height: 40,
    },
    nearbyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: 60,
        marginBottom: 50,
        marginTop: 20,
        marginHorizontal: 20,
        borderWidth: 2,
        borderColor: '#ddd',
        borderRadius: 30,
        padding: 8,
    },
    nearbyText: {
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 60,
    },
    recommendedText: {
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.5)', // Transparent text for "recommended"
        marginRight: 10,
    },
    nearbyIcon: {
        width: 20,
        height: 20,
        marginLeft: 45,
    },
    scrollContent: {
        paddingVertical: 10,
        width: width,
        backgroundColor: '#1B5E20',
        paddingHorizontal: 20,
    },
    listItem: {
        height: 200,
        backgroundColor: '#fff',
        marginTop: 10,
        padding: 15,
        borderRadius: 20,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    listItemIcon: {
        maxHeight: 130,
        minHeight: 130,
        width: 390,
        marginTop: -15,
        marginLeft: -15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        flex: 1,
        alignItems: 'flex-start',
    },
    listItemText: {
        marginTop: 10,
        fontSize: 18,
        color: '#333',
        fontWeight: 'bold',
    },
    listItemDescription: {
        fontSize: 14,
        color: '#333',
    },
    footerSpace: {
        height: 30, // Adjust this value to control the amount of space at the end
        marginTop: 60,
    },
    backToTopButton: {
        position: 'absolute',
        bottom: 50, // Distance from the bottom
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
});

export default NewCommunity;
