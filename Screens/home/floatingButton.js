import 'react-native-gesture-handler';
import  React,{useState} from "react";
import { View, Text, Button } from "react-native";
import { FloatingAction } from "react-native-floating-action";



const actions = [
    {
      text: "Let Property",
      //icon: require("../../../../../corneel/Downloads/100.jpg"),
      name: "letPropertyForm",
      position: 1,
      textStyle:{fontWeight:'bold', color:"#fff", padding:4 },
      textBackground:'purple'
    },
    {
      text: "Sell Property",
      //icon: require("./images/ic_language_white.png"),
      name: "sellPropertyForm",
      position: 2,
      textStyle:{fontWeight:'bold', color:"#fff", padding:4 },
      textBackground:'purple'
    },
    {
      text: "Advertise",
      //icon: require("./images/ic_room_white.png"),
      name: "Advertise",
      position: 3,
      textStyle:{fontWeight:'bold', color:"#fff", padding:4 },
      textBackground:'purple'
    },
    {
      text: "Set flag",
      //icon: require("./images/ic_videocam_white.png"),
      name: "flag",
      position: 4,
      textStyle:{fontWeight:'bold', color:"#fff", padding:4 },
      textBackground:'purple'
    }
  ];




const Floating = ({navigation}) => {
    return (
        <FloatingAction
        
        actions={actions}
        color="purple"
        distanceToEdge={ 10 }
        buttonSize={60}
       onPressItem={name => {navigation.navigate(`${name}`)
          //console.log(`selected button: ${name}`);{panel(`${name}`, navigation)
        }}
      />
    );
  }


export default Floating;

