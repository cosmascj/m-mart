import { Button, Input, PageWrapper, ThemedText, ThemedView } from '@/src/components'
import HeaderComponent from '@/src/components/Header'
import { ThemedTouchableView } from '@/src/components/ThemedTouchable'
import { Colors } from '@/src/constants/colors'
import { AuthRoutes, StackNavigationProps } from '@/src/navigation/Types'
import React, { useState } from 'react'
import { StyleSheet, useColorScheme } from 'react-native'

interface InputProps {
    password: string
    confirmPassword: string
}
interface InputErrors {
    password?: string | null
    confirmPassword?: string | null
}
export default function ResetPassword({navigation}: StackNavigationProps<AuthRoutes, 'ResetPassword'>) {
       const [inputs, setInputs] = useState<InputProps>({  password: '', confirmPassword: '' })
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
            <HeaderComponent />

            <ThemedView style={{ padding: 15, flex: 1 }}>
                <ThemedText type='title' style={{ fontSize: 24,  marginTop: 20 }}>Create new password</ThemedText>
                <ThemedView style={{ marginTop: 30 }}>
                    <ThemedText style={{ marginBottom: 30 }}>
                        Your new password must be different from previously used password
                    </ThemedText>
                    <Input
                        onChangeText={(text) => handleOnchange(text, 'password')}
                        error={errors.password}
                        onBlur={() => handleError(null, 'password')}
                        placeholder='New Password'
                    />
                    <Input
                        onChangeText={(text) => handleOnchange(text, 'password')}
                        error={errors.password}
                        secureTextEntry
                        placeholder='Confirm Password'
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