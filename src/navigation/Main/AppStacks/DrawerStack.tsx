import { Aboutus, MyOrder, Profile, Settings, Support } from '@/src/screens';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import CustomDrawerContent from './CustomDrawerContent';
import CustomDrawerHeader from './DrawerHeader';
import Tabs from './Tab';



export type DrawerParamList = {
    DrawerHome: undefined;
    Profile: undefined;
    Settings: undefined
    MyOrder: undefined
    Support: undefined
    Aboutus:undefined
};

const Drawer = createDrawerNavigator<DrawerParamList>();
// Add drawer design
//Since all the drawer will be accessible for all the bottom tabs, it will be mounted inside the drawer
const DrawerNavigator = () => (
    <Drawer.Navigator
        initialRouteName="DrawerHome"
        screenOptions={{
            header: () => <CustomDrawerHeader />,
            drawerStyle: {
                width: 300,
            }
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
        <Drawer.Screen name="DrawerHome" component={Tabs} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name='MyOrder' component={MyOrder} />
        <Drawer.Screen name="Aboutus" component={Aboutus} />
        <Drawer.Screen name="Support" component={Support} />
        <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
);

export default DrawerNavigator;