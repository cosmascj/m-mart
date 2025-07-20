import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './i18n';
import LoadApp from './src/core/LoadApp';

const App = () => {
  // const { t } = useTranslation();

  return (
   <SafeAreaProvider>
   
        <LoadApp />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
};

export default App;
