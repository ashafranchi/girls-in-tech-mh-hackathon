import React from 'react';
import { StyleSheet, Image, ImageBackground, Text, View, Button, TouchableOpacity, ScrollView} from 'react-native';
import { Card } from 'react-native-elements';

export default function NewScreen ({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headText}>Topics</Text>
        <Card style={styles.card}>
          <Image source={require('../components/Restless.png')} style={{width: 300, height: 200}} />
          <Text style={styles.secondText}>Depression</Text>
      </Card>
      <Card style={styles.card}>
          <Image source={require('../components/Thought.png')} style={{width: 300, height: 200}} />
          <Text style={styles.secondText}>Anxiety</Text>
      </Card>
      <Card style={styles.card}>
          <Image source={require('../components/Kindness.png')} style={{width: 300, height: 200}} />
          <Text style={styles.secondText}>PTSD</Text>
      </Card>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBF2EE",
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
    fontSize: 32,
    color: "#3C3A36",
    justifyContent: 'center',
    alignItems: "center",
  },
  secondText: {
    fontSize: 24,
    paddingTop: 8,
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