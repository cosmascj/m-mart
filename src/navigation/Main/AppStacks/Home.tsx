
import { Settings } from "@/src/screens";
import {
    createStackNavigator
} from "@react-navigation/stack";
import React from "react";
import { HomeRoutes } from "../../Types/main";

const { Group, Navigator, Screen } = createStackNavigator<HomeRoutes>();

export default function HomeNavigator() {

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                cardOverlayEnabled: true,
            }}
        >
            <Group>
                <Screen name="settings" component={Settings} />
            </Group>
        </Navigator>
    );
}
