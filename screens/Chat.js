import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons, Entypo, AntDesign } from '@expo/vector-icons';

const Chat  = ({navigation, route }) => {
    const { email, page } = route.params;

    return(
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('Messanger', { email, page });
                    }}
                >
                <Ionicons name="arrow-back" size={24} color="#FFF" />
                </TouchableOpacity>
                <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.ChatImage} />
                <Text style={styles.name}>Name</Text>
            </View>

            <View style={styles.line}/>

            <View style={styles.chat}>

            </View>

            <View style={styles.line2}/>

            <View style={styles.bottom}>
                <Entypo name="camera" size={22} style={styles.bottomIcon}/>
                <Entypo name="image" size={22} style={styles.bottomIcon}/>
                <AntDesign name="addfile" size={22} style={styles.bottomIcon}/>
                <TouchableOpacity style={styles.commentButton}
                    onPress={() => {navigation.navigate('Comments', { email });}}
                    >
                        <Text style={styles.commentText}>Comments</Text>
                        <Ionicons name="send" size={24} color="#FFF" />
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
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        marginHorizontal: 20,
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
    ChatImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        marginLeft: 10,
        marginTop: 2,
    },
    name: {
        marginTop: 15,
        marginLeft: 10,
        fontSize: 18,
    },
    line:{
        marginTop: 70,
        height: 5,
        backgroundColor: '#000',
    },
    line2:{
        height: 5,
        backgroundColor: '#000',
    },
    chat:{
        height: 700,
        backgroundColor: '#4CAF50',
    },
    bottom:{
        flexDirection: 'row',
    },
    bottomIcon: {
        marginHorizontal: 10,
        marginTop: 15,
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
        marginLeft: 80,
        marginTop: 5,
    },
    commentText: {
        color: '#FFF',
        marginLeft: 10,
        marginRight: 90,
    },
});

export default Chat;