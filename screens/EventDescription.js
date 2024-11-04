import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Ionicons, Entypo, AntDesign } from '@expo/vector-icons'; 

const { width, height } = Dimensions.get('window');

const EventDescription = ({ navigation, route }) => {
    const { email } = route.params;
    
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
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
                                        navigation.navigate('CommunityFeed', { email });
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
            
            <View style={styles.descriptionContainer}>
                <Text style={styles.title}>Electricity and more</Text>
                
                <ScrollView style={styles.descriptionScroll}>
                    <Text style={styles.descriptionText}>
                    Here the person's description goes. If the text is longer than the maximum height, this text will scroll within the fixed container, so the user can read more without expanding the overall layout. This makes the layout flexible but keeps the description within bounds. Here the person's description goes. If the text is longer than the maximum height, this text will scroll within the fixed container, so the user can read more without expanding the overall layout. This makes the layout flexible but keeps the description within bounds. Here the person's description goes. If the text is longer than the maximum height, this text will scroll within the fixed container, so the user can read more without expanding the overall layout. This makes the layout flexible but keeps the description within bounds. Here the person's description goes. If the text is longer than the maximum height, this text will scroll within the fixed container, so the user can read more without expanding the overall layout. This makes the layout flexible but keeps the description within bounds. Here the person's description goes. If the text is longer than the maximum height, this text will scroll within the fixed container, so the user can read more without expanding the overall layout. This makes the layout flexible but keeps the description within bounds.
                    </Text>
                </ScrollView>
                
                <View style={styles.tagRow}>
                    {/* Tag styled like a selected button */}
                    <View style={[styles.goalButton]}>
                        <Text style={styles.buttonText}>Tag</Text>
                    </View>
                    <Ionicons name="calendar-outline" size={28} color="#333" style={styles.icon} />
                    <Ionicons name="map" size={28} color="#333" style={styles.icon} />
                </View>
            </View>

            <View style={styles.bottomContainer}>
                <Entypo name="camera" size={24} style={styles.bottomIcon}/>
                <Entypo name="image" size={24} style={styles.bottomIcon}/>
                <AntDesign name="hearto" size={24} style={styles.bottomIcon}/>

                <TouchableOpacity style={styles.commentButton}
                onPress={() => {navigation.navigate('Comments', { email });}}
                >
                    <Text style={styles.commentText}>Comments</Text>
                    <Ionicons name="send" size={24} color="#FFF" />
                </TouchableOpacity>
            </View>
            <View style={styles.bottomContainer2}></View>
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
        justifyContent: 'flex-start',
        marginHorizontal: 20,
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
    descriptionContainer: {
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },
    descriptionScroll: {
        minHeight: 270, 
        maxHeight: 270, 
        marginVertical: 10,
    },
    descriptionText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#333',
    },
    tagRow: {
        marginLeft: -250,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    goalButton: {
        marginLeft: 30,
        width: 80,
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        backgroundColor: '#FFF',
        marginHorizontal: 5,
        backgroundColor: '#4CAF50',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 14,
    },
    icon: {
        marginHorizontal: 5,
    },
    bottomContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#06402B',

    },
    commentButton: {
        width: 220, // Adjust width for oval shape
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4CAF50',
        paddingHorizontal: 15,
        paddingVertical: 10, // Increase padding for height
        borderRadius: 50, // Half of the button height to create an oval
        justifyContent: 'center', // Center text and icon
    },
    commentText: {
        color: '#FFF',
        marginLeft: 10,
        marginRight: 90,
    },
    sendIcon: {
        marginLeft: 5,
    },
    bottomContainer2: {
        height:30,
        backgroundColor: '#06402B',

    },
    bottomIcon:{
        marginHorizontal: 15,
    },
    icon: {
        marginLeft: 20,
    },

});

export default EventDescription;
