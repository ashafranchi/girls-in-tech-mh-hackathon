import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import NewScreen from './src/screens/NewScreen';
import GetStartedScreen from "./src/screens/GetStartedScreen";
import SecondOnboardingScreen from "./src/screens/SecondOnboardingScreen";
import ThirdOnboardingScreen from "./src/screens/ThirdOnboardingScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import DrugsSearchScreen from './src/screens/DrugsSearchScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
			    headerStyle: {backgroundColor: '#228CDB'},
        	headerTintColor: '#fff'
        }} initialRouteName="GetStarted">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={({navigation}) => ({
            headerRight: () => (
              <Icon 
                name="plus" 
                type="feather" 
                color="#fff"
                style={style.headerIcon}
                onPress={() => navigation.navigate('New')}
              />
            )
          })}
        />
        <Stack.Screen name="New" component={NewScreen} />
        <Stack.Screen name="GetStarted" options={{headerShown: false}} component={GetStartedScreen} />
        <Stack.Screen name="SecondOnboarding" options={{headerShown: false}} component={SecondOnboardingScreen} />
        <Stack.Screen name="ThirdOnboarding" options={{headerShown: false}} component={ThirdOnboardingScreen} />
        <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
        <Stack.Screen name="DrugsSearch" options={{headerShown: false}} component={DrugsSearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

const style = StyleSheet.create({
  headerIcon: {
    marginRight: 10
  }
});