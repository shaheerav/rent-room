import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import {Stack} from 'expo-router'
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';

SplashScreen.preventAutoHideAsync();

export default function RootLayout(){
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name='index'/>
        <Stack.Screen name='pages/Login'/>
        <Stack.Screen name='pages/SignUp' />
        <Stack.Screen name='pages/DashBoard'/>
        <Stack.Screen name='explore'/>
      </Stack>
    </ThemeProvider>
  );
}
