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
export default function Signup({ navigation }: StackNavigationProps<AuthRoutes, 'SignUp'>) {
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
    navigation.navigate('Verify')
  }
  return (
    <PageWrapper
      showDownInset={false}
      safeAreaUpColor={theme === 'light' ? Colors.light.white : Colors.dark.headerBg}
    >
      <ThemedView style={{ padding: 20, flex: 1 }}>
        <ThemedText type='title' style={{ fontSize: 24,  marginTop: 20, lineHeight:30,  }}>Create {'\n'}your account</ThemedText>
        <ThemedView style={{ marginTop: 50 }}>
          <Input
            placeholder='Enter your name'
            onChangeText={(text) => handleOnchange(text, 'name')}
            error={errors.name}
            autoCapitalize='none'
            onBlur={() => handleError(null, 'name')}
          />
          <Input
            onChangeText={(text) => handleOnchange(text, 'email')}
            error={errors.email}
            onBlur={() => handleError(null, 'email')}
            placeholder='Email address'
            autoCapitalize='none'
            keyboardType='email-address'

          />
          <Input
            onChangeText={(text) => handleOnchange(text, 'password')}
            error={errors.password}
            secureTextEntry
            placeholder='Password'
            autoCapitalize='none'

          />
          <Input
            onChangeText={(text) => handleOnchange(text, 'confirmPassword')}
            error={errors.confirmPassword}
            secureTextEntry
            placeholder='Confirm Password'
            autoCapitalize='none'

          />

        </ThemedView>
        <Button
          style={styles.button}
          textColor='#fff'
          fontWeight='700'
          text='SIGN UP'
          onPress={handleSubmit}
        />
        <ThemedTouchableView 
        onPress={() => navigation.navigate('Login')}
        style={{ marginTop: '20%', alignItems: 'center' }}>
          <ThemedText style={{ fontWeight: '600' }}>Already have an account? <ThemedText style={{ textDecorationLine: 'underline' }}>Log in</ThemedText></ThemedText>
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