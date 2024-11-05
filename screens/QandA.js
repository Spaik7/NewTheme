import React, { useState, useRef } from 'react';
import { View, Text,TouchableOpacity, StyleSheet, Dimensions, ScrollView, Image } from 'react-native';
import { Ionicons, Entypo, AntDesign } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const QandA = ({ navigation, route }) => {
    const { email, page } = route.params;
    const scrollViewRef = useRef(null);
    const [scrollY, setScrollY] = useState(0);
    
    
    const scrollToTop = () => {
        scrollViewRef.current.scrollTo({ y: 0, animated: true });
    };

    return (
        <View style={styles.container}>
               
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

                                    case 3: ('Messanger', { email, page: 4 });
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
                                    navigation.navigate('Partner', { email });
                                    break;

                                    case 15: 
                                    navigation.navigate('Expert', { email });
                                    break;

                                    case 16: 
                                    navigation.navigate('VisitProfile', { email });
                                    break;

                                    default: 
                                    navigation.navigate('Home Page', { email });
                                    break;
                                }
                            } else if (index === 1) {
                                navigation.navigate('Messanger', { email, page: 4, DQE: page });
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
                
            <View style={styles.document}>
                <TouchableOpacity
                onPress={() => {
                    navigation.navigate('DocumentList', {email, page})
                }}>
                    <View style={styles.iconButton}>
                        <AntDesign name="file1" size={50} color='#000' />
                        <Text style={styles.iconLabel}>Document</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Partner', {email, page})
                }}>
                    <View style={styles.iconButton}>
                        <Ionicons name="people" size={50} color="#000" />
                        <Text style={styles.iconLabel}>Partner</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Expert', {email, page})
                }}>
                    <View style={styles.iconButton}>
                        <Ionicons name="person-circle-outline" size={50} color="#000" />
                        <Text style={styles.iconLabel}>Expert</Text>
                    </View>
                </TouchableOpacity>
                
            </View>



            <View style={styles.centeredButtonContainer}>
                <TouchableOpacity 
                    style={[styles.buttonS, styles.wideButton]}
                >
                    <Ionicons name="search" size={24} color="#000" />
                    <Text style={styles.buttonText}>Search for a topic </Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                ref={scrollViewRef}
                onScroll={({ nativeEvent }) => setScrollY(nativeEvent.contentOffset.y)}
                scrollEventThrottle={16}
            >
                <View style={styles.commentSection}>
                    {[...Array(10)].map((_, index) => (
                        <TouchableOpacity
                        key={index}
                        onPress={() => {
                            navigation.navigate('Answers', {email, page: page})
                        }}
                        >
                            <View key={index} style={styles.commentContainer}>
                                <View style={styles.commentHeader}>
                                    <Image 
                                        source={{ uri: 'https://via.placeholder.com/50' }} 
                                        style={styles.profileImage} 
                                    />
                                    <Text style={styles.commentName}>User {index + 1}</Text>
                                </View>

                                <Text style={styles.commentText}>This is a sample comment number {index + 1}.</Text>
                                <View style={styles.commentFooter}/>
                            </View>
                        </TouchableOpacity> 
                    ))}
                </View>
                <View style={styles.footerSpace} />
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
    document: {
        marginTop: 100,
    },
    buttonS: {
        backgroundColor: '#4CAF50',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 8,
        marginHorizontal: 10,
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

      document: {
        flexDirection: 'row',
        justifyContent: 'space-around', // Space buttons evenly
        marginTop: 120,
    },
    iconButton: {
        width: width / 3.5, // Width for three buttons on one row
        height: width / 3.5,
        backgroundColor: '#E0E0E0', // Light background for visibility
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    iconLabel: {
        marginTop: 5, // Space between icon and label
        fontSize: 16,
        color: '#000',
        textAlign: 'center',
    },
    commentSection: {
        top: 20,
        padding: 15,
    },
    commentContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    commentHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    commentName: {
        fontWeight: 'bold',
        fontSize: 16,
        flex: 1,
    },
    commentText: {
        fontSize: 14,
        color: '#333',
        marginVertical: 10,
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
        height: 20,
        marginTop: 50,
    },
});

export default QandA;
