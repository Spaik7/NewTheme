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
import Members from './screens/Members'
import CommunityFeed from './screens/CommunityFeed'
import NewPostEvent from './screens/NewPostEvent'
import Map from './screens/Map'
import Messanger from './screens/Messanger'
import QandA from './screens/QandA'
import Profile from './screens/Profile' 
import EventDescription from './screens/EventDescription'
import Comments from './screens/Comments'
import Chat from './screens/Chat' 
import Answers from './screens/Answers'
import DocumentList from './screens/DocumentList'
import Partner from './screens/Partner'
import Expert from './screens/Expert'
import VisitProfile from './screens/VisitProfile'


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
          name="Home Page" //0
          component={HomePage}
          options={{ headerShown : false }}
        />
        <Stack.Screen
          name="Map" //1
          component={Map}
          options={{ headerShown : false }}
        />
        <Stack.Screen
          name="Profile" //2
          component={Profile}
          options={{ headerShown : false }}
        />
        <Stack.Screen
          name="Messanger" //3
          component={Messanger}
          options={{ headerShown : false }}
        />
        <Stack.Screen
        name="QandA" //4
        component={QandA}
        options={{ headerShown : false }}
        />
        <Stack.Screen
          name="NewCommunity" //5
          component={NewCommunity}
          options={{ headerShown : false }}
        />
        <Stack.Screen
          name="ComunityDescription" //6
          component={ComunityDescription}
          options={{ headerShown : false }}
        />
        <Stack.Screen
          name="Members" //7
          component={Members}
          options={{ headerShown : false }}
        />
        <Stack.Screen
          name="CommunityFeed" //8
          component={CommunityFeed}
          options={{ headerShown : false }}
        />
        <Stack.Screen
          name="AddComunity" //9
          component={AddComunity}
          options={{ headerShown : false }}
        />
        <Stack.Screen
          name="NewPostEvent" //10 
          component={NewPostEvent}
          options={{ headerShown : false }}
        />
        <Stack.Screen
          name="EventDescription" //11
          component={EventDescription}
          options={{ headerShown : false }}Comments
        />
        <Stack.Screen
          name="Comments" //12
          component={Comments}
          options={{ headerShown : false }}
        />
        <Stack.Screen
          name="DocumentList" //13
          component={DocumentList}
          options={{ headerShown : false }}
        />
        <Stack.Screen
          name="Partner" //14
          component={Partner}
          options={{ headerShown : false }}
        />
        <Stack.Screen
          name="Expert" //15
          component={Expert}
          options={{ headerShown : false }}
        />
        <Stack.Screen
        name="VisitProfile" //16
        component={VisitProfile}
        options={{ headerShown : false }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{ headerShown : false }}
      />
        <Stack.Screen
        name="Answers"
        component={Answers}
        options={{ headerShown : false }}
      />
      
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
