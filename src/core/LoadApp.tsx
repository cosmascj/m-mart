// import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { AuthNavigator } from '../navigation/Auth'
SplashScreen.preventAutoHideAsync();

export default function LoadApp() {
    const [loaded, error] = useFonts({
    'SansBold': require('../assets/fonts/PTSans-Bold.ttf'),
    'SansRegular': require('../assets/fonts/PTSans-Regular.ttf'),
    'SansItalic': require('../assets/fonts/PTSans-Italic.ttf'),
    'SansBoldItalic': require('../assets/fonts/PTSans-BoldItalic.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    // <BottomSheetModalProvider>
    <NavigationContainer>
        <GestureHandlerRootView style={{ flex: 1 }}>
              <AuthNavigator />
        </GestureHandlerRootView>
      </NavigationContainer>
    // </BottomSheetModalProvider>
  )
}

const styles = StyleSheet.create({})