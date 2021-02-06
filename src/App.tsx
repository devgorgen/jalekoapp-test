import 'react-native-gesture-handler';

import React from 'react';
import {Provider} from 'react-redux';
import MainPage from './pages/MainPage';
import VideoPlayer from './pages/VideoPlayer';
import Notes from './pages/Notes';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import store from './store';
const Stack = createStackNavigator();

import {
    MAIN_COLOR,
    SECOND_COLOR,
    AUX_COLOR_1,
    AUX_COLOR_2,
} from './utils/constants';

/**
 * Initial component
 */
export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        headerTintColor: 'white',
                        headerStyle: {backgroundColor: MAIN_COLOR},
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 30,
                        },
                    }}>
                    <Stack.Screen
                        name="Home"
                        component={MainPage}
                        options={{
                            title: 'Jaleko Tube',
                        }}
                    />
                    <Stack.Screen
                        name="VideoPlayer"
                        component={VideoPlayer}
                        options={{
                            title: 'Player',
                        }}
                    />
                    <Stack.Screen
                        name="Notes"
                        component={Notes}
                        options={{
                            title: 'Anotações',
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
