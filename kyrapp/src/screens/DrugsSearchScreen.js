import * as React from "react";
import { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Button, FlatList, TextInput } from "react-native";
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


    
    const makeUrl = (drugname) => `https://api.fda.gov/drug/label.json?search=openfda.brand_name:"${drugname}"&limit=1`;

    const onSubmit = async(data) => {
        const result = await axios(makeUrl(data.drugname));
        setData(result.data.results);  
        setName(data.drugname);
        console.log(result.data.results)
  
};

  return (
  <ScrollView style={[styles.container, { paddingTop: insets.top }]}>
  <SafeAreaView>
        <View>
          <Text style={styles.headText}>Medication Wiki</Text>
        </View>
        <View style={styles.buttonsContainer}>
        <Controller
            name="drugname"
            control={control}
            defaultValue="Prozac"
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
            <View style={styles.wiki}>
              <Text style={styles.topText}>Brand</Text>
              <Text style={styles.item}>{item.openfda.brand_name}</Text>
              <Text style={styles.topText}>Generic</Text>
              <Text style={styles.item}>{item.openfda.generic_name}</Text>
              <View>
                <Text style={styles.topText}>Table</Text>
                <View style={styles.item}>
                {(item.clinical_studies_table != undefined && item.clinical_studies_table.length > 0) ? 

                (item.clinical_studies_table.map((table) => (
                    <HTML source={{html: table}}/>
                ))) :
                (<View style={styles.table}></View>) 
        
                }              
                </View>
            </View>
              <Text style={styles.topText}>Manufacturer Name</Text>
              <Text style={styles.item}>{item.openfda.manufacturer_name + "\n"}</Text>
            </View>)} />
        </View>
    </SafeAreaView>
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBF2EE",
    height: "100%",
  },
  getStartedContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  headText: {
    paddingTop: 48,
    fontSize: 32,
    color: "#3C3A36",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 16,
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
  wiki: {
    marginHorizontal: 16,
  },
  topText: {
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    color: "#3C3A36",

    paddingTop: 4,
    paddingBottom: 8,
  },
  caption: {
    fontSize: 14,
    justifyContent: "center",
    alignItems: "center",
    color: "#78746D",
    paddingTop: 20,
    marginHorizontal: 24,
  },
  item: {
    // marginLeft: 16,
    fontSize: 14,
    paddingBottom: 16,
  },
  search: {
    width: 280,
    height: 32,
    fontSize: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 16,
    // marginTop: 16,
  },
  touchable: {
    width: 180,
    height: 32,
    backgroundColor: "#E3562A",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 32,
  },
  touchableText: {
    fontFamily: "Gotham-Medium",
    fontSize: 15,
    color: "white",
  },
});