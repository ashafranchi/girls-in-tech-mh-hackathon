import React from 'react';
import { StyleSheet, Image, Text, View, Button, TouchableOpacity } from 'react-native';

export default function HomeScreen ({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Home</Text>
        <Image source={require('../components/Home.png')} style={{width: 320, height: 400, borderWidth: 2, borderColor: "#78746D", borderRadius: 20, marginTop: 32}} />
      <Text style={styles.secondText}>Take a Breath</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBF2EE",
    // justifyContent: "center",
    alignItems: "center",
  },
  card: {
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
  },
  headText: {
    paddingTop: 32,
    paddingLeft: 24,
    fontSize: 48,
    color: "#3C3A36",
    justifyContent: 'center',
    alignItems: "center",
  },
  secondText: {
    fontSize: 24,
    paddingTop: 28,
    color: "#3C3A36",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  textContainer: {
    flex: 1,
  },
  buttonsContainer: {
    flex: 1,
    alignItems: "center",
  },
  topText: {
    fontSize: 24,
    justifyContent: "center",
    alignItems: "center",
    color: "#3C3A36",
    marginHorizontal: 24,
  },
  caption: {
    fontSize: 14,
    justifyContent: "center",
    alignItems: "center",
    color: "#78746D",
    paddingTop: 20,
    marginHorizontal: 24,
  },
  touchable: {
    width: 250,
    height: 50,
    backgroundColor: "#E3562A",
    borderRadius: 34,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 60,
  },
  touchableText: {
    fontFamily: "Gotham-Medium",
    fontSize: 15,
    color: "white",
  },
});