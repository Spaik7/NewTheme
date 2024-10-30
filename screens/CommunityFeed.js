import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ImageBackground, ScrollView, Image } from 'react-native';
import { Ionicons, Entypo, AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const CommunityFeed = ({ navigation, route }) => {
    const { email } = route.params;
    const scrollViewRef = useRef(null);

    const scrollToTop = () => {
        scrollViewRef.current.scrollTo({ y: 0, animated: true });
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={{ uri: 'https://via.placeholder.com/20' }}
                style={styles.backgroundImage}
                resizeMode="cover"
            >
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

            <View style={styles.Whole}>
            <View style={styles.FakescrollContent}>
                <View style={styles.headerRow}>
                    <Text style={styles.Title}>Title</Text>
                    <TouchableOpacity
                        style={[styles.button, styles.secondbutton]}
                        onPress={() => { navigation.navigate('Members', { email, page: 1 }); }}
                    >
                        <AntDesign name="addusergroup" size={24} color="#000" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.ThirdButton]}
                        onPress={() => { navigation.navigate('CommunityFeed', { email }); }}
                    >
                        <AntDesign name="pluscircleo" size={24} color="#000" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.CreatedBy}>Created by</Text>
            </View>

            <ScrollView
                contentContainerStyle={styles.scrollContent}
                ref={scrollViewRef}
            >
                {[...Array(10)].map((_, index) => (
                    <View key={index} style={styles.Elements}>
                        <Image
                            source={{ uri: 'https://via.placeholder.com/50' }}
                            style={styles.ViewImage}
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.TitleText}>Title {index + 1}</Text>
                            <Text style={styles.CreatedByText}>Created by</Text>
                            <Text style={styles.dateText}>Date</Text>
                        </View>
                        <Text style={styles.tagText}>#Tag</Text>
                    </View>
                ))}
                <View style={styles.footerSpace} />
            </ScrollView>
            <TouchableOpacity style={styles.backToTopButton} onPress={scrollToTop}>
               <AntDesign name="arrowup" size={24} color="#000" />
            </TouchableOpacity>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
    },
    backgroundImage: {
        height: height/2,
        justifyContent: 'flex-start',
        width: '100%',
        marginTop: -50,
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        marginHorizontal: 20,
        marginBottom: 20,
        position: 'absolute',
        top: 50,
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
    FakescrollContent: {
        paddingVertical: 10,
        width: width,
        backgroundColor: '#1B5E20',
        paddingHorizontal: 20,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    Title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginRight: 10,
    },
    CreatedBy: {
        fontSize: 16,
        color: '#fff',
        marginTop: -5,
    },
    secondbutton: {
        marginLeft: 190,
    },
    ThirdButton: {
        marginLeft: 10,
    },
    scrollContent: {
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    Elements: {
        marginBottom: 15,
        borderRadius: 8,
        backgroundColor: '#FFF',
        padding: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
        height: 280,
    },
    ViewImage: {
        width: '106%',
        left: -10,
        height: 200,
        top: -10,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    textContainer: {
        paddingTop: 5,
        paddingHorizontal: 5,
    },
    TitleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    CreatedByText: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    tagText: {
        position: 'absolute',
        left: 290,
        top: 10,
        fontSize: 12,
        color: '#fff',
        backgroundColor: '#4CAF50',
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderRadius: 5,
        overflow: 'hidden',
        alignSelf: 'flex-start',
    },
    dateText: {
        fontSize: 12,
        color: '#999',
        textAlign: 'right',
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
        height: 30,
        marginTop: 20,
    },
});

export default CommunityFeed;