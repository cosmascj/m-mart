import { ThemedText } from '@/src/components';
import { Ionicons } from '@expo/vector-icons';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
    const { navigation, state } = props;

    const currentRoute = state.routeNames[state.index];
    const primaryRoutes = [
        { name: 'DrawerHome', label: 'Home Page', icon: 'home-outline' },
        { name: 'Discover', label: 'Discover', icon: 'compass-outline' },
        { name: 'Cart', label: 'My Order', icon: 'cart-outline' },
        { name: 'Profile', label: 'My Profile', icon: 'person-outline' },
    ];

    const secondaryRoutes = [
        { name: 'Settings', label: 'Settings', icon: 'settings-outline' },
        { name: 'Support', label: 'Support', icon: 'help-circle-outline' },
        { name: 'About', label: 'About Us', icon: 'information-circle-outline' },
    ];

    const renderMenuItems = (items: typeof primaryRoutes) =>
        items.map((item) => {
            const isActive = currentRoute === item.name;
            return (
                <TouchableOpacity
                    key={item.name}
                    onPress={() => navigation.navigate(item.name as never)}
                    style={[styles.menuItem, isActive && styles.activeItem]}
                >
                    <Ionicons
                        name={item.icon as any}
                        size={23}
                        color={isActive ? '#007aff' : '#333'}
                    />
                    <Text
                        style={[
                            styles.menuLabel,
                            isActive && { color: '#007aff', fontWeight: '600' },
                        ]}
                    >
                        {item.label}
                    </Text>
                </TouchableOpacity>
            );
        });
    return (
        <View style={styles.container}>
            <View>

                <View style={styles.header}>
                    <Image
                        source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
                        style={styles.avatar}
                    />
                    <View>

                        <Text style={styles.name}>Damian Mart</Text>
                        <Text style={styles.email}>mart@example.com</Text>
                    </View>
                </View>

                {/* Navigation Links */}

                {/* Primary Menu */}
                <View style={styles.menu}>{renderMenuItems(primaryRoutes)}</View>

                {/* Divider Label */}
                <ThemedText type="subtitle" style={styles.dividerLabel}>
                    OTHER
                </ThemedText>

                {/* Secondary Menu */}
                <View style={styles.menu}>{renderMenuItems(secondaryRoutes)}</View>
            </View>

            {/* Remove footer for now  */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.menuItem} onPress={() => { navigation.closeDrawer() }}>
                    <Ionicons name="log-out-outline" size={20} color="red" />
                    <Text style={[styles.menuLabel, { color: 'red' }]}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 40,
        paddingHorizontal: 20,
        justifyContent: 'space-between'
    },
    header: {
        alignItems: 'center',
        marginBottom: 30,
        flexDirection: 'row',
        gap: 10
    },
    avatar: {
        width: 65,
        height: 65,
        borderRadius: 35,
        marginBottom: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
        color: '#222',
    },
    activeItem: {
        backgroundColor: '#f0f4ff',
        borderRadius: 10
    },
    email: {
        fontSize: 14,
        color: '#777',
    },
    menu: {
        // flex: 1,
        marginTop: 0,
    },
    dividerLabel: {
        fontSize: 15,
        marginVertical: 20,
        marginLeft: 5,
        color: '#999',
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        paddingHorizontal: 10,
    },
    menuLabel: {
        fontSize: 16,
        marginLeft: 15,
        color: '#333',
        fontWeight: '500'
    },
    footer: {
        paddingTop: 20,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
});
