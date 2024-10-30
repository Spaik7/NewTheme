import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert, KeyboardAvoidingView, Platform, ScrollView, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons, Entypo } from '@expo/vector-icons'; 
import { TextInput } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

const NewCommunity = ({ navigation, route }) => {

    //const email = 'Dany';
    const { email } = route.params;

    const [image, setImage] = useState(null);
    const [selectedGoals, setSelectedGoals] = useState([]);
    const [Title, setTitle] = useState('');
    const [Description, setDescription] = useState('');
    const [selectedButton, setSelectedButton] = useState(null);
    
    const goals = [
        'Solar Power',
        'Wind Energy',
        'Power Storage',
    ];

    const toggleGoal = (goal) => {
        if (selectedGoals.includes(goal)) {
          setSelectedGoals(selectedGoals.filter((g) => g !== goal));
        } else {
          setSelectedGoals([...selectedGoals, goal]);
        }
      };

    const pickImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permissionResult.granted) {
            Alert.alert("Permission required", "Please grant camera roll permissions to select an image.");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled && result.assets?.length > 0) {
            setImage(result.assets[0].uri);
        }
    };

    return (

        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
             <View style={styles.buttonContainer}>
                {[...Array(5)].map((_, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[styles.button, index === 4 ? styles.add : null]}
                        onPress={() => {
                            if (index === 0) {
                                navigation.navigate('CommunityFeed', { email });
                            } else if (index === 1) {
                                navigation.navigate('Messanger', { email, page: 10 });
                            } else if (index === 2) {
                                navigation.navigate('Home Page', { email });
                            } else if (index === 3) {
                                navigation.navigate('QandA', { email, page: 10 });
                            } else if (index === 4) {
                                // send and public
                            }
                        }}
                    >
                       {index === 0 ? (
                            <Ionicons name="arrow-back" size={24} color="#FFF" />
                        ) : index === 1 ? (
                            <Entypo name="chat" size={24} color="#FFF" />
                        ) : index === 2 ? (
                            <Ionicons name="home" size={24} color="#FFF" />
                        ) : index === 3 ? (
                            <Entypo name="light-bulb" size={24} color="#FFF" />
                        ) : index === 4 ? (  // Correct syntax with ?
                            <Ionicons name="add" size={24} color="#FFF" />
                        ) : null}  

                    </TouchableOpacity>
                ))}
            </View>


            <ScrollView contentContainerStyle={styles.scrollView}>

                <View style={styles.inputContainer}>
                    {/*calendar Entypo*/}
        
                    <Text style={styles.label}>Type</Text>
                    <View style={styles.goalRow}>
                        <TouchableOpacity
                            style={[
                                styles.goalButton,
                                selectedButton === 'event' ? styles.selectedGoal : null,
                                styles.topButton,
                            ]}
                            onPress={() => setSelectedButton(selectedButton === 'event' ? null : 'event')}
                        >
                            <Text style={styles.buttonText}>Event</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.firstIcon}>
                            <Ionicons name="calendar-outline" size={18} color="#fff" style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.spacer
                        }>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.firstIcon}>
                            <Ionicons name="map" size={18} color="#fff" style={styles.icon} />
                        </TouchableOpacity>
                        
                        
                        <TouchableOpacity
                            style={[
                                styles.goalButton,
                                selectedButton === 'post' ? styles.selectedGoal : null,
                                styles.topButton,
                            ]}
                            onPress={() => setSelectedButton(selectedButton === 'post' ? null : 'post')}
                        >
                            <Text style={styles.buttonText}>Post</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity style={styles.photoPlaceholder} onPress={pickImage}>
                    {image ? (
                        <Image source={{ uri: image }} style={styles.profilePicture} />
                    ) : (
                        <Ionicons name="add" size={32} color="#fff" />
                    )}
                </TouchableOpacity>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Title</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Enter Your Title" 
                        placeholderTextColor='#1B5E20'
                        value ={Title}
                        onChange={setTitle}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Description</Text>
                    <TextInput 
                        style={[styles.input, styles.Description]} 
                        placeholder="Enter Your Description" 
                        placeholderTextColor='#1B5E20'
                        multiline
                        numberOfLines={4}
                        textAlignVertical="top"
                        value ={Description}
                        onChange={setDescription}
                    />
                </View>

                
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Energy Related Goal</Text>
                    <View style={styles.goalRow}>
                        {goals.slice(0, 2).map((goal) => (
                            <TouchableOpacity
                                key={goal}
                                style={[
                                    styles.goalButton,
                                    selectedGoals.includes(goal) ? styles.selectedGoal : null,
                                ]}
                                onPress={() => toggleGoal(goal)}
                            >
                                <Text
                                    style={[
                                        styles.goalButtonText,
                                        selectedGoals.includes(goal) ? styles.selectedGoalText : null,
                                    ]}
                                >
                                    {goal}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <TouchableOpacity 
                            key={goals[2]}
                            style={[
                                styles.goalButton,
                                selectedGoals.includes(goals[2]) ? styles.selectedGoal : null,
                                styles.centered,
                            ]}
                            onPress={() => toggleGoal(goals[2])}
                        >
                            <Text
                                style={[
                                    styles.goalButtonText,
                                    selectedGoals.includes(goals[2]) ? styles.selectedGoalText : null,
                                ]}
                            >
                                {goals[2]}
                            </Text>
                        </TouchableOpacity>
                </View>

                <View style={styles.footerSpace} />
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
    },
    scrollView: {
        flexGrow: 1, // Allow the scroll view to grow
        justifyContent: 'flex-start', // Align the content to the start
    },
    topButton: {
        alignItems: 'center',
        height: 40,
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
    firstIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 20,
        backgroundColor: '#4CAF50',
        paddingHorizontal: 20,
        height: 40,
        marginTop: 5,
    },
    spacer: {
        width: 10,
        backgroundColor: '#fff',
    },
    icon: {
        width: 15,
        height: 15,
    },
    add: {
        position: 'absolute',
        right: 5,
        top: -1,
    },
    photoPlaceholder: {
        width: '90%',
        height: 200,
        borderRadius: 20,
        backgroundColor: '#1B5E20',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -20,
        margin: 20,
    },
    profilePicture: {
        width: '100%',
        height: '100%',
        borderRadius: 50,
    },
    inputContainer: {
        alignItems: 'flex-start',
        marginTop: -1,
        margin: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#1B5E20',
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#1B5E20',
        padding: 10,
        borderRadius: 8,
        fontSize: 16,
    },
    Description: {
        height: 100,
    },
    goalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    goalButton: {
        flex: 1,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        marginVertical: 5,
        backgroundColor: '#FFF',
        marginHorizontal: 5, // spacing between buttons
    },
    selectedGoal: {
        backgroundColor: '#4CAF50',
    },
    goalButtonText: {
        textAlign: 'center',
        color: '#000',
    },
    selectedGoalText: {
        color: '#FFF',
    },
    centered: {
        marginLeft: width/4.3,
        width: 160,
    },
    footerSpace: {
        height: 50, // Adjust this value to control the amount of space at the end
        marginTop: 20,
    },
});

export default NewCommunity;
