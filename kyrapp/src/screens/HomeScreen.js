import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen () {
  return (
    <View>
      <Text>Welcome Home!</Text>
      <Text style={style.dogs}>We love dogs!</Text>
    </View>
  )
}

const style = StyleSheet.create({
  dogs: {
    marginRight: 40,
    fontSize: 48
  }
});