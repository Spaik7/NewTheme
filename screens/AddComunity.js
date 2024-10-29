import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';

const NewCommunity = ({ navigation, route }) => {
    const [searchText, setSearchText] = useState('');

    return (
        <View style={styles.container}>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        // backgroundColor: '#cbf5d1',i cant find a decent color
    },
});


export default NewCommunity;
