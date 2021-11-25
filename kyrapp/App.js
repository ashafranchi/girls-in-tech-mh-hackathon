import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from 'react-native-elements';
import HomeScreen from './src/screens/HomeScreen';
import GetStartedScreen from "./src/screens/GetStartedScreen";
import NewScreen from './src/screens/NewScreen';
import SecondOnboardingScreen from "./src/screens/SecondOnboardingScreen";
import ThirdOnboardingScreen from "./src/screens/ThirdOnboardingScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import DrugsSearchScreen from './src/screens/DrugsSearchScreen';
import BottomTabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
      <Stack.Navigator options={{headerShown: false}} initialRouteName="GetStarted">
      <Stack.Screen name="Home" options={{headerShown: false}} component={BottomTabNavigator} />
      <Stack.Screen name="GetStarted" options={{headerShown: false}} component={GetStartedScreen} />
      <Stack.Screen name="SecondOnboarding" options={{headerShown: false}} component={SecondOnboardingScreen} />
      <Stack.Screen name="ThirdOnboarding" options={{headerShown: false}} component={ThirdOnboardingScreen} />
      <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
    </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}