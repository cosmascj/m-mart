import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ThemedView } from './ThemedView';

interface HeaderComponentProps {
  title?: string;
  onBackPress?: (event: GestureResponderEvent) => void;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ title = '', onBackPress }) => {
  const navigation = useNavigation()
  return (
    <ThemedView style={styles.container}>
      <TouchableOpacity onPress={(val) => {
        onBackPress ? onBackPress?.(val) : navigation.goBack()
      }} style={styles.iconWrapper}>
        <Entypo name="chevron-small-left" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={{ width: 40 }} />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: '#fff',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.08,
    // shadowRadius: 4,
    // elevation: 3,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 3,
    elevation: 2, // Android shadow
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
});

export default HeaderComponent;
