import * as React from "react";
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TextInput } from "react-native";
import { WebView } from 'react-native-webview'
import TopImageBackground from "../components/TopImageBackground";
import { TouchableOpacity } from "react-native-gesture-handler";
import GetStartedImage from "../components/GetStartedImage";
import { useSafeArea, SafeAreaView } from "react-native-safe-area-context";
import axios from 'axios';
import { SearchBar } from 'react-native-elements';
import filter from 'lodash.filter';
import { useForm, Controller } from 'react-hook-form';
import HTML from 'react-native-render-html';



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
        console.log(result.data.results)
  
};

  return (
  <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
        <View>
          <Text style={styles.headText}>Research Your Meds!</Text>
        </View>
        <View style={styles.buttonsContainer}>
        <Controller
            name="drugname"
            control={control}
            render={({field: {onChange, value }}) => (
                <TextInput
                onChangeText={(text) => onChange(text)}
                style={styles.search}
                value={value}
                placeholder="Type Medication Name Here..."
                />
            )}
        />
        <TouchableOpacity label="Search" activeOpacity={0.8}
            style={styles.touchable} onPress={handleSubmit(onSubmit)}>
            <Text style={styles.touchableText}>Search</Text> 
        </TouchableOpacity>

        <FlatList
            data={data}
            extraData={name}
            keyExtractor={({ id }, index) => id}
            windowSize={3}
            renderItem={({ item }) => (
            <View>
              <Text>{item.openfda.brand_name}</Text>
              <Text>{item.openfda.information_for_patients}</Text>
              {/* <Text>{item.indications_and_usage}</Text>
              <Text>{item.adverse_reactions}</Text>
              <Text>{item.precautions}</Text>
              <Text>{item.warnings}</Text>
              <Text>{item.openfda.manufacturer_name + "\n"}</Text> */}
              <View>
                <View>
                {(item.clinical_studies_table != undefined && item.clinical_studies_table.length > 0) ? 

                (item.clinical_studies_table.map((table) => (
                    <HTML source={{html: table}}/>
                ))) :
                (<View></View>) 
        
                }              
                </View>
            </View>
              <Text>{item.openfda.clinical_pharmacology}</Text>
            </View>)} />
          
        
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
  headText: {
    paddingTop: 32,
    fontSize: 32,
    color: "#3C3A36",
    justifyContent: "center",
    alignItems: "center",
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
    paddingTop: 32,
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
  search: {
    width: 250,
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 6,
    marginVertical: 60,
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