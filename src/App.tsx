import 'react-native-gesture-handler';

import React from 'react';
import {View, Text} from 'react-native';

import MainPage from './pages/MainPage';
import VideoPlayer from './pages/VideoPlayer';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

/**
 * Initial component
 */
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={MainPage} />
                <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
