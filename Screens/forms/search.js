import 'react-native-gesture-handler';
import  React,{useState} from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";


const {heigt, width} = Dimensions.get('window')
 
const Search = () => {
    return (
      <View >
        <View style={styles.listview}>
            <Text>
            Komarock heights
            </Text>
           
            </View>
        <View style={styles.listview}>
        <Text>Hilton park</Text></View>
        <View style={styles.listview}>
        <Text>Louisiana</Text></View>
        <View style={styles.listview}>
        <Text>Peak apartements</Text></View>
        <View style={styles.listview}>
        <Text>Silvia Heights</Text></View>
        <View style={styles.listview}>
        <Text></Text>
        </View>
      </View>
    );
  }




const styles = StyleSheet.create({
    listview:{
        height:50,
        width:width,
        borderBottomColor:'black',
        padding:20,
        
        
        
    }
})
export default Search;