import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView, Image } from 'react-native';
import { Ionicons, Entypo, AntDesign } from '@expo/vector-icons';
import { useAuth} from "../store/auth";

const { width } = Dimensions.get('window');

const Answer = ({ navigation }) => {
    const { email} = useAuth();
    const scrollViewRef = useRef(null);
    const [scrollY, setScrollY] = useState(0);
    const [heartedComments, setHeartedComments] = useState(Array(10).fill(false)); // Array to track hearted states

    const scrollToTop = () => {
        scrollViewRef.current.scrollTo({ y: 0, animated: true });
    };

    const toggleHeart = (index) => {
        const updatedHeartedComments = [...heartedComments];
        updatedHeartedComments[index] = !updatedHeartedComments[index];
        setHeartedComments(updatedHeartedComments);
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
                                navigation.navigate('QandA', { email, page });
                            } else if (index === 1) {
                                navigation.navigate('Messenger', { email, page: 4, DQE: page });
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

            {/* Comment Container */}
            <View style={styles.commentContainer1}>
                <View style={styles.commentHeader}>
                    <Image 
                        source={{ uri: 'https://via.placeholder.com/50' }} 
                        style={styles.profileImage} 
                    />
                    <Text style={styles.commentName}>User</Text>
                </View>
                <Text style={styles.commentText}>This is a sample comment number.</Text>
            </View>

            {/* Write Answer Button */}
            <TouchableOpacity style={styles.commentButton}>
                <Text style={styles.buttonText}>Write your answer</Text>
                <Ionicons name="send" size={24} color="#FFF" />
            </TouchableOpacity>

            <ScrollView
                ref={scrollViewRef}
                onScroll={({ nativeEvent }) => setScrollY(nativeEvent.contentOffset.y)}
                scrollEventThrottle={16}
            >
                <View style={styles.commentSection}>
                    {[...Array(10)].map((_, index) => (
                        <View key={index} style={styles.commentContainer}>
                        <View style={styles.commentHeader}>
                            <View style={styles.headerLeft}>
                                <Image 
                                    source={{ uri: 'https://via.placeholder.com/50' }} 
                                    style={styles.profileImage} 
                                />
                                <Text style={styles.commentName}>User {index + 1}</Text>
                            </View>
                            <TouchableOpacity style={styles.followButton}>
                                <Text style={styles.followText}>Follow</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.commentText}>This is a sample Answer number {index + 1}.</Text>
                    
                        <View style={styles.commentFooter}>
                            <TouchableOpacity onPress={() => toggleHeart(index)} style={styles.heartContainer}>
                                <AntDesign 
                                    name={heartedComments[index] ? "heart" : "hearto"} 
                                    size={20} 
                                    color={heartedComments[index] ? "red" : "#333"} 
                                    style={styles.heartIcon} 
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
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
        backgroundColor: '#f0f0f0',
    },
    buttonContainer: {
        flexDirection: 'row',
        position: 'absolute',
        top: 55,
        left: 20,
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
    commentButton: {
        width: width * 0.8, // Responsive width
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4CAF50',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 25,
        alignSelf: 'center', // Center button horizontally
        marginTop: 20,
        marginBottom: 20,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        flex: 1, // Center text within the button
        textAlign: 'center',
    },
    commentContainer1: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginHorizontal: 20,
        marginTop: 120,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    commentContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginHorizontal: 20,
        marginTop: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    commentHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    commentName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    commentText: {
        color: '#333',
        fontSize: 15,
        marginBottom: 10, // Add space for the heart icon
    },
    heartContainer: {
        alignItems: 'flex-end',
    },
    heartIcon: {
        marginRight: 10,
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
    followButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#4CAF50',
        borderRadius: 5,
    },
    followText: {
        color: '#fff',
        fontSize: 14,
    },
});

export default Answer;
