import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import TopImageBackground from "../components/TopImageBackground";
import { TouchableOpacity } from "react-native-gesture-handler";
import HomeImage from "../components/HomeImage";
import { useSafeArea, SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen ({navigation}) {

  const insets = useSafeArea();

  return (
      <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.headText}>Welcome to Therapedia!</Text>
      <TopImageBackground />
      <View style={styles.getStartedContainer}>
        <View style={styles.imageContainer}>
          <HomeImage />
          <Text style={styles.caption}>Therapedia is an app designed to simplify the mental health research process and serve as an equitable, all-in-one resource for mental health information.</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBF2EE",
  },
  getStartedContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
  },
  textContainer: {
    flex: 1,
  },
  buttonsContainer: {
    flex: 1,
    alignItems: "center",
  },
  headText: {
    paddingTop: 48,
    fontSize: 31,
    color: "#3C3A36",
    marginHorizontal: 24,
    justifyContent: "center",
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
    paddingTop: 32,
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