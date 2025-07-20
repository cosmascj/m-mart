import { AuthRoutes, StackNavigationProps } from '@/src/navigation/Types'
import React from 'react'
import { Image, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native'
export default function Splash({ navigation }: StackNavigationProps<AuthRoutes, 'Onboarding'>) {
    const WIDTH = useWindowDimensions().width
    return (

        <TouchableOpacity
            activeOpacity={1}
            style={[styles.container, { width: '100%' }]}
            onPress={() => navigation.navigate('Features')}
        >
            <Image
                style={{ width: WIDTH, height: '100%' }}
                source={require('../../assets/images/welcome.png')}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',

    }
})