import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Image} from 'react-native';
import Axios from 'axios';


const LatestScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);


useEffect(()=>{
  
  Axios.get('http://corneel.pythonanywhere.com/property/')
  .then(res =>{
    setData(res.data)
    setLoading(false)
  })



},[])


  return (
    <View style={{ flex: 1, padding: 20 }}>
      {isLoading ? <ActivityIndicator /> : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data} //keyExtractor={(item) => item.toString()}
          keyExtractor={({ name }, index) => name}
          renderItem={({ item }) => (
            <View style={{ paddingBottom:4, paddingTop:8}}>

        <Text style={{fontWeight:"bold",padding:10}}>{item.name}</Text>
        <Text style={{fontWeight:"bold",padding:10, alignSelf:'flex-end',position:'absolute',fontSize:12, top:10, }}>Check out</Text>
            <Image  source={{
          uri: item.image,
        }} style={{flex:1, height:200, width:null, borderRadius:8}}  />
          
          
            </View>
            

          )}
        />
        )}
        </View>
      );
    };
 export default LatestScreen   
