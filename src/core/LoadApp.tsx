import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { MainNavigator } from '../navigation/Main'
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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <NavigationContainer>
          {/* The AuthNavigation is the for the authentication pages */}
          {/* The MainNavigator is the for the Dashboard, cart and product section of the application */}
          {/*  AppData.token from store and optinally render the desired stack */}
          {/* {appData?.token !== null ?<MainNavigator /> : <AuthNavigator /> } */}
          <MainNavigator />
        </NavigationContainer>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({})