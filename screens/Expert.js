import React, { useState, useRef } from 'react';
import { View, Text,TouchableOpacity, StyleSheet, Dimensions, ScrollView, Image, ImageBackground } from 'react-native';
import { Ionicons, Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useAuth} from "../store/auth";

const { width, height } = Dimensions.get('window');


const DocumentList = ({ navigation, route }) => {
    const { page } = route.params;
    const { email} = useAuth();
    const scrollViewRef = useRef(null);
    const [scrollY, setScrollY] = useState(0);


    const scrollToTop = () => {
        scrollViewRef.current.scrollTo({ y: 0, animated: true });
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={{ uri: 'https://via.placeholder.com/20' }} // Replace with your image URL
                style={styles.backgroundImage}
                resizeMode="cover" // Optional: to adjust the image scaling
            >
            {/* Button Container in the Top Left */}
            <View style={styles.buttonContainer}>
                {[...Array(3)].map((_, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.button}
                        onPress={() => {
                            if (index === 0) {
                                navigation.navigate('QandA', { email, page: page});
                            } else if (index === 1) {
                                navigation.navigate('Messanger', { email, page: 15, DQE: page });
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

            <View style={styles.beforScroll}>
                   <Text style={styles.Title}>Our Expert</Text>

                   <View style={styles.centeredButtonContainer}>
                        <TouchableOpacity 
                            style={[styles.buttonS, styles.wideButton]}
                        >
                            <Ionicons name="search" size={24} color="#000" />
                            <Text style={styles.buttonText}>Find your exprert </Text>
                        </TouchableOpacity>
                    </View>
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
                        <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('VisitProfile', {email, page:page})
                        }}
                        key={index}
                        >
                            <View key={index} style={styles.listItem}>
                            <View style={{ flexDirection: "row", alignItems: "center"}}>
                            <Image
                                source={{ uri: 'https://via.placeholder.com/20' }}
                                style={styles.immagine}
                                resizeMode="contain"
                            />
                            <View style={styles.textContainer}>
                                <Text style={styles.listItemText}>Expert {index + 1}</Text>
                                <Text style={styles.listItemSubtext}>Sector</Text>
                            </View>
                            </View>

                            
                            <MaterialCommunityIcons name="information-outline" size={36} color="#000" />
                    
                            
                            </View>
                        </TouchableOpacity>
                        
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
    backgroundImage: {
        height: height / 3, // Set the height to half of the screen
        justifyContent: 'flex-start', // Align children at the top
        
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
    centeredButtonContainer: {
        marginTop: 20,
        alignItems: 'center',
        marginBottom: 10, // Space below the button if needed
    },
    wideButton: {
        width: '100%', // Make the button take full width of its container
        maxWidth: 350, // Optional: Set a maximum width for larger screens
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 30,
        backgroundColor: '#4CAF50',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        flex: 1,
        textAlign: 'center',
        marginLeft: 10,
      },
      buttonS: {
        backgroundColor: '#4CAF50',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 8,
        marginHorizontal: 10,
      },
      scrollContent: {
        paddingVertical: 10,
        width: width,
        backgroundColor: '#1B5E20',
        paddingHorizontal: 20,
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
    listItemText: {
        fontSize: 16,
        color: '#333',
    },
    listItemSubtext: {
        fontSize: 12,
        color: '#666', // Slightly lighter color for distinction
    },
    textContainer: {
        flexDirection: 'column', 
        alignItems: 'flex-start', 
        left: 10,
    },
    footerSpace: {
        height: 20, // Adjust this value to control the amount of space at the end
        marginTop: 30,
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
    immagine: {
        width: width * 0.1,
        height: width * 0.1,
        borderRadius: (width * 0.1) / 2,
        resizeMode: 'contain',
    },
});
    
export default DocumentList;