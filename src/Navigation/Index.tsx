
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStacks from './HomeStacks';


function SettingScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Setting Screen </Text>
        </View>
    );
}

function ProfileScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Profile Screen</Text>
        </View>
    );
}

function Tab1() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Tab Screen</Text>
        </View>
    );
} 

const Tab = createBottomTabNavigator();

export default function RouteNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        let iconName;
                        if (route.name === 'Home') iconName = 'home-outline';
                        else if (route.name === 'Profile') iconName = 'person-outline';
                        return <Text>Icon</Text>;
                    },
                    tabBarActiveTintColor: 'blue',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Home" component={HomeStacks} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
                <Tab.Screen name="Setting" component={SettingScreen} />
                <Tab.Screen name="Tab1" component={Tab1} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}