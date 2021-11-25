import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from 'react-native-elements';
import NewScreen from './src/screens/NewScreen';
import HomeScreen from './src/screens/HomeScreen';
import DrugsSearchScreen from './src/screens/DrugsSearchScreen';

const Tab = createBottomTabNavigator();

const screenOptions = (route, color) => {
  let iconName;

  switch (route.name) {
    case 'Home':
      iconName = 'home';
      break;
    case 'Wiki':
      iconName = 'book-open';
      break;
    case 'Topics':
      iconName = 'bookmark';
      break;
    default:
      break;
  }

  return <Icon name={iconName} type="feather" color={color} size={24} />;
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon: ({color}) => screenOptions(route, color),
    })}>
      <Tab.Screen name="Wiki" options={{headerShown: false}} component={DrugsSearchScreen} />
      <Tab.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
      <Tab.Screen name="Topics" options={{headerShown: false}} component={NewScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;