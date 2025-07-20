import React from 'react';

import useAppData from '@/src/store/Auth';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRoutes } from '../Types/main';
import DrawerNavigator from './AppStacks/DrawerStack';


const { Navigator, Screen, Group } = createNativeStackNavigator<AppRoutes>();

export default function AppNavController() {
  const { appData } = useAppData();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
        <Screen name="DrawerModule" component={DrawerNavigator} />
    </Navigator>
  );
}
