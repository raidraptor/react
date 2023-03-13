import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import  Bar  from './components/navbar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './lib/router';    

export default function App() {
  return (
    <> <SafeAreaProvider>
        <StatusBar style="auto" />
        <Bar />
        <AppNavigator/>  
      </SafeAreaProvider></>
  );
}
