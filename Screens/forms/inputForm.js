import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Image, TextInput, Button, StyleSheet, Dimensions} from 'react-native';

import Axios from 'axios';



const Screen = (uri) => {
 
  const [data, setData] = useState([]);
  const [Name, setName] = useState('Name');
  const [Contact, setContact] = useState('Contact');

  const {width, height} = Dimensions.get('window');
  



  const styles = StyleSheet.create({
     
    inputbox:{
        height: 40, borderColor: 'gray', borderWidth: .4, margin:8,
        borderRadius:10, width:width*0.75,
    },
  });
  return (
    <View style={{flex:1, }}>
     
      <View>  
          <Text> Name of Property</Text>  
        <TextInput  
         style={styles.inputbox}
         onChangeText={(text) => setName({text})} />
          <Text> Contact</Text>  
        <TextInput 
         style={styles.inputbox}
         onChangeText={(text) => setContact({text})}/>
      </View>
      <View style = {{marginTop:20}}>
      <Button
  margin={30}
  styleDisabled={{color: 'red'}}
  onPress={() => post(Name.text, Contact.text, uri.uri)}
  title="Post"
>
  Press Me
</Button>
      </View>
    
    </View>
  );

    };




   



 export default Screen   


const post = (Name, Contact, uri) => {

var muri = uri;
muri = muri.replace("///", "//");

    const formData = new FormData()
    formData.append('name', Name)
    formData.append('contact', Contact)
    formData.append('image', muri)
  




    console.log(Name, Contact, muri)

  }
        





      // fetch('http://corneel.pythonanywhere.com/', {
    //   method: 'post',
    
    //   body:formData
    
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log(data)
    // })
    // .catch(error => {
    //   console.error(error)
    // })
  