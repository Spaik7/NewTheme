import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons, Entypo, AntDesign } from '@expo/vector-icons';
import { useAuth} from "../store/auth";


const Comments = ({ navigation }) => {
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
            <View style={styles.buttonContainer}>
                {[...Array(4)].map((_, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.button}
                        onPress={() => {
                            if (index === 0) {
                                navigation.navigate('EventDescription', { email });
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

            <ScrollView
                ref={scrollViewRef}
                onScroll={({ nativeEvent }) => setScrollY(nativeEvent.contentOffset.y)}
                scrollEventThrottle={16}
            >
                <View style={styles.commentSection}>
                    {[...Array(10)].map((_, index) => (
                        <View key={index} style={styles.commentContainer}>
                            <View style={styles.commentHeader}>
                                <Image 
                                    source={{ uri: 'https://via.placeholder.com/50' }} 
                                    style={styles.profileImage} 
                                />
                                <Text style={styles.commentName}>User {index + 1}</Text>
                                <TouchableOpacity style={styles.followButton}>
                                    <Text style={styles.followText}>Follow</Text>
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.commentText}>This is a sample comment number {index + 1}.</Text>
                            <View style={styles.commentFooter}>
                                <TouchableOpacity onPress={() => toggleHeart(index)}>
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
        backgroundColor: '#90EE90',
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
    commentSection: {
        top: 130,
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
    followButton: {
        backgroundColor: '#4CAF50',
        borderRadius: 5,
        paddingHorizontal: 8,
        paddingVertical: 3,
    },
    followText: {
        color: '#fff',
        fontSize: 12,
    },
    commentText: {
        fontSize: 14,
        color: '#333',
        marginVertical: 10,
    },
    commentFooter: {
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
        marginTop: 150,
    },
});

export default Comments;
