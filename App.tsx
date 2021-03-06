import {
  Jost_400Regular,
  Jost_600SemiBold,
  useFonts,
} from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';
import React from 'react';
import Routes from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Jost_600SemiBold,
    Jost_400Regular,
  });

  if (!fontsLoaded) return <AppLoading />;

  return <Routes />;
}
