import * as React from "react";
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TextInput } from "react-native";
import TopImageBackground from "../components/TopImageBackground";
import { TouchableOpacity } from "react-native-gesture-handler";
import GetStartedImage from "../components/GetStartedImage";
import { useSafeArea, SafeAreaView } from "react-native-safe-area-context";
import axios from 'axios';
import { SearchBar } from 'react-native-elements';
import filter from 'lodash.filter';
import { useForm, Controller } from 'react-hook-form';


export default function DrugsSearchScreen({ navigation }) {
    const insets = useSafeArea();

    const [data, setData] = useState([]);
    const { handleSubmit, control } = useForm();
    const [name, setName] = useState("");


    
    const makeUrl = (drugname) => `https://api.fda.gov/drug/label.json?search=openfda.brand_name:"${drugname}"&limit=5`;

    const onSubmit = async(data) => {
        const result = await axios(makeUrl(data.drugname));
        setData(result.data.results);  
        setName(data.drugname);
  
};

  return (
  <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.touchable}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.touchableText}>Next</Text>
          </TouchableOpacity>
        <Controller
            name="drugname"
            control={control}
            render={({field: {onChange, value }}) => (
                <TextInput
                onChangeText={(text) => onChange(text)}
                value={value}
                placeholder="Medication Name"
                />
            )}
        />
        <TouchableOpacity label="Search" activeOpacity={0.8}
            style={styles.touchable} onPress={handleSubmit(onSubmit)}>
            <Text>Search</Text> 
        </TouchableOpacity>

        <FlatList
            data={data}
            extraData={name}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
            <View>
              <Text>{item.openfda.brand_name}</Text>
              <Text>{item.indications_and_usage}</Text>
              <Text>{item.adverse_reactions}</Text>
              <Text>{item.precautions}</Text>
              <Text>{item.warnings}</Text>
              <Text>{item.openfda.manufacturer_name + "\n"}</Text>
              <View>{item.openfda.clinical_studies_table}</View>
            </View>
            )}
          />
        
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