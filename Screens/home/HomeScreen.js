import 'react-native-gesture-handler';
import React, { Component, useState } from 'react';
import { ScrollView, Dimensions ,View, Text, Button,StyleSheet} from 'react-native';
import MapView from 'react-native-maps'
import PickerDrawer from './picker'
import Floating from './floatingButton'



const HomeScreen = ({navigation}) => {


  const [region , setRegion] = useState({latitude: -1.403,    longitude: 38.0,    latitudeDelta: 13.0,    longitudeDelta: 1.0121,})

  const latitude = region.latitude
  const longitude = region.longitude
  const latitudeDelta = region.latitudeDelta
  const longitudeDelta = region.longitudeDelta
 var cod ={}

 function restricter(){
    
 }

function tapped(coord){ 
   var coords = JSON.stringify(coord)
   var c = JSON.parse(coords)
   alert(coords)
  
}


  

    return (
      
      <View style={styles.container}>
     <MapView
     scrollEnabled={true} style={styles.map} region={region} 
      onRegionChange = {(region)=>{restricter(region)}}
     onPress = {(e)=>{tapped(e.nativeEvent.coordinate)}}
    
    
     >
     
     </MapView>
      <PickerDrawer/>
   
     <Floating navigation={navigation}/>
     
   
     
   </View>

    );
  }
  const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,    alignItems: 'center',   shadowColor: 'rgba(0,0,0, .4)', // IOS
         shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#fff',
    elevation: 2, // Android  
    justifyContent: 'center', alignItems: 'center', flex:1,
    },

    map: {
      ...StyleSheet.absoluteFillObject,
      flex:1
    },
    headerLayoutStyle: {
      width:400,
      height: 100, 
      backgroundColor: 'orange', 
      justifyContent: 'center', 
      alignItems: 'center',
    },
    slidingPanelLayoutStyle: {
      width:400, 
      height:800, 
      backgroundColor: '#7E52A0', 
      justifyContent: 'center', 
      alignItems: 'center',
    },
    commonTextStyle: {
      color: 'white', 
      fontSize: 18,
    },
   });













export default HomeScreen;













