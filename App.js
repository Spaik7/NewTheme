import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomePage from './screens/HomePage';
import NewCommunity from './screens/NewCommunity'
import AddComunity from './screens/AddComunity'
import ComunityDescription from './screens/ComunityDescription'

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home Page">
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown : false}}
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUpScreen} 
          options={{ headerShown : false }}
        />
        <Stack.Screen
          name="Home Page"
          component={HomePage}
          options={{ headerShown : false }}
        />
        <Stack.Screen
          name="NewCommunity"
          component={NewCommunity}
          options={{ headerShown : false }}
        />
        <Stack.Screen
          name="AddComunity"
          component={AddComunity}
          options={{ headerShown : false }}
        />
        <Stack.Screen
          name="ComunityDescription"
          component={ComunityDescription}
          options={{ headerShown : false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
