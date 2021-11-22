import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import TopImageBackground from "../components/TopImageBackground";
import { TouchableOpacity } from "react-native-gesture-handler";
import WelcomeImage from "../components/WelcomeImage";
import { useSafeArea, SafeAreaView } from "react-native-safe-area-context";

export default function WelcomeScreen({ navigation }) {
  const insets = useSafeArea();

  return (
  <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
      <TopImageBackground />
      <View style={styles.getStartedContainer}>
        <View style={styles.imageContainer}>
          <WelcomeImage />
        </View>
        <View>
            <Text style={styles.topText}>Know your rights</Text>
            <Text style={styles.caption}>Learn how to self-advocate by reviewing regional laws and resources regarding mental health. </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.touchable}
            onPress={() => navigation.navigate('DrugsSearch')}
          >
            <Text style={styles.touchableText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

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
    paddingTop: 120,
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