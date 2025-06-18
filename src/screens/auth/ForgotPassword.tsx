import { Button, Input, PageWrapper, ThemedText, ThemedView } from '@/src/components'
import HeaderComponent from '@/src/components/Header'
import { AuthRoutes, StackNavigationProps } from '@/src/navigation/Types'
import { Fontisto } from '@expo/vector-icons'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'

export default function ForgotPassword({navigation}: StackNavigationProps<AuthRoutes, 'ForgotPassword'>) {
    const [email, setEmail] = useState('')
    return (
        <PageWrapper>
            <HeaderComponent />
            <ThemedView style={{ padding: 20, flex: 1 }}>
                <ThemedText type='title' style={{ fontSize: 24, marginTop: 20 }}>Forgot password?</ThemedText>
                <ThemedView style={{ marginTop: 20 }}>
                    <ThemedText style={{ marginBottom: 30 }}>
                        Enter email associated with your account and we’ll send and email with intructions to reset your password
                    </ThemedText>

                    <Input
                        onChangeText={(val) => setEmail(val)}
                        LeftComponent={<Fontisto name="email" size={20} color="gray" />}
                        placeholder='Enter your email here'
                    />

                    <Button
                        style={styles.button}
                        textColor='#fff'
                        fontWeight='700'
                        text='Confirm'
                        onPress={() => navigation.navigate('ResetPassword')}
                    />

                </ThemedView>
            </ThemedView>


        </PageWrapper>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '50%',
        alignSelf: 'center',
        marginTop: '10%',
        borderRadius: 100
    }
})