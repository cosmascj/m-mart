import { Ionicons } from '@expo/vector-icons';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DrawerParamList } from './DrawerStack';

const CustomDrawerHeader = () => {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>M-Mart</Text>
      <Image source={require('../../../assets/images/NotificationBell.png')} />
    </View>
  );
};

export default CustomDrawerHeader;

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop:10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    textDecorationLine: 'underline',
    fontFamily:'SansBold'
  },
});
