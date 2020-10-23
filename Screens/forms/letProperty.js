import 'react-native-gesture-handler';
import  React,{useState, Component} from "react";
import { View, Text, Button } from "react-native";
import { ScrollView, Dimensions } from 'react-native';
import ImgPicker from './imgPicker'



const LetPropertyForm = () => {
    return (
      <View style={{flex:1, backgroundColor:'white'}}>
   <ImgPicker/>
   
  
      </View>




    );
  }

export default LetPropertyForm;

