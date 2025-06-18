import { Button, Input, PageWrapper, ThemedText, ThemedView } from '@/src/components'
import { ThemedTouchableView } from '@/src/components/ThemedTouchable'
import { Colors } from '@/src/constants/colors'
import { AuthRoutes, StackNavigationProps } from '@/src/navigation/Types'
import React, { useState } from 'react'
import { StyleSheet, useColorScheme } from 'react-native'

interface InputProps {
    name: string
    email: string
    password: string
    confirmPassword: string
}
interface InputErrors {
    name?: string | null
    email?: string | null
    password?: string | null
    confirmPassword?: string | null
}
export default function Login({ navigation }: StackNavigationProps<AuthRoutes, 'Login'>) {
    const [inputs, setInputs] = useState<InputProps>({ name: '', email: '', password: '', confirmPassword: '' })
    const [errors, setError] = useState<InputErrors>({})
    const handleOnchange = (text: string, input: keyof InputProps) => {
        setInputs((prevState) => ({ ...prevState, [input]: text }));
    };
    const theme = useColorScheme() ?? 'light';

    const handleError = (error: string | null, input: keyof InputErrors) => {
        setError((prevState) => ({ ...prevState, [input]: error }));
    };
    const handleSubmit = () => {
        navigation.navigate('SignUp')
    }
    return (
        <PageWrapper
            showDownInset={false}
            safeAreaUpColor={theme === 'light' ? Colors.light.white : Colors.dark.headerBg}
        >
            <ThemedView style={{ padding: 20, flex: 1 }}>
                <ThemedText type='title' style={{ fontSize: 24, marginTop: 20 }}>Log into {'\n'}your account</ThemedText>
                <ThemedView style={{ marginTop: 50 }}>
                    <Input
                        onChangeText={(text) => handleOnchange(text, 'email')}
                        error={errors.email}
                        onBlur={() => handleError(null, 'email')}
                        placeholder='Email address'
                    />
                    <Input
                        onChangeText={(text) => handleOnchange(text, 'password')}
                        error={errors.password}
                        secureTextEntry
                        placeholder='Password'
                    />

                    <ThemedTouchableView
                        activeOpacity={1}
                        onPress={() => navigation.navigate('ForgotPassword')}>

                        <ThemedText style={{ textAlign: 'right' }}>Forgot Password</ThemedText>
                    </ThemedTouchableView>
                </ThemedView>
                <Button
                    style={styles.button}
                    textColor='#fff'
                    fontWeight='700'
                    text='LOG IN'
                    onPress={handleSubmit}
                />
                <ThemedTouchableView
                    onPress={() => navigation.navigate('SignUp')}
                    style={{ marginTop: '20%', alignItems: 'center' }}>
                    <ThemedText style={{ fontWeight: '600' }}>Don't Have an account? <ThemedText style={{ textDecorationLine: 'underline' }}>Sign up</ThemedText></ThemedText>
                </ThemedTouchableView>
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