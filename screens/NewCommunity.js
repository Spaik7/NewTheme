import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const NewCommunity = ({ navigation, route }) => {
    const { email } = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                {[...Array(4)].map((_, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.button}
                        onPress={() => {
                            if (index === 0) {
                                navigation.navigate('Home Page', {email}); 
                            } else if (index === 1) {
                                // Add functionality for the second button
                            } else if (index === 2) {
                                // Add functionality for the third button
                            } else if (index === 3) {
                                // Add functionality for the fourth button
                            }
                        }}
                    >
                        <Image
                            source={{ uri: `https://via.placeholder.com/20?text=Icon${index + 1}` }}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonContainer: {
        position: 'absolute',
        top: 50,
        left: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
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
});

export default NewCommunity;
