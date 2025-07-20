import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { discoverRoutes } from '../../Types/main';
const { Group, Navigator, Screen } = createStackNavigator<discoverRoutes>();

export default function DiscoverStack() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                cardOverlayEnabled: true,
            }}
        >
            <Group>
             <></>
            </Group>
        </Navigator>
    )
}

const styles = StyleSheet.create({})