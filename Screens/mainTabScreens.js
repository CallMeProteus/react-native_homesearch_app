import React, { useState } from "react";
import { createStackNavigator, HeaderHeightContext } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from "./home/HomeScreen";
import Favourites from "./favourites/favourites";
import Adverts from "./adverts/adverts";
import LatestScreen from "./latest/latest";
import sellPropertyForm from './forms/sellproperty';
import { View, Text, Button } from "react-native";
import AdvertiseForm from "./forms/advertiseProperty";
import LetPropertyForm from './forms/letProperty';
import FlagForm from './forms/flags';
import Search from './forms/search'



// enables routing to other screens from home and candidate

const HomeStack = createStackNavigator();
const LatestStack = createStackNavigator();

// initialization of bottom tabs and configuration

const Tab = createBottomTabNavigator();

const MainTabScreen = () => (

  <Tab.Navigator
    initialRouteName="Home"
    
    tabBarOptions={{
      activeTintColor: 'purple',
      
    }}
  >
    <Tab.Screen name="Home" component={HomeStackScreen} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Icon name="search" color={color} size={16} />
        ),
      }}
    />
    <Tab.Screen  name="Notifications"  component={LatestScreen}  options={{
        tabBarLabel: 'Latest',
        tabBarIcon: ({ color, size}) => (
          <Icon name="refresh" color={color} size={20} />
        ),
      }}
    />
    <Tab.Screen  name="Profile" component={Adverts} options={{
        tabBarLabel: 'Adverts',
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" color={color} size={19} />
        ),
      }}
    />
    <Tab.Screen  name="Newscreen"  component={Favourites}  options={{
        tabBarLabel: 'Favourites',
        tabBarIcon: ({ color, size }) => (
          <Icon name="star" color={color} size={22} />
        ),
      }}
    />
  </Tab.Navigator>

);
export default MainTabScreen;


// creates links with drawer,
// 

const HomeStackScreen = ({ navigation }) => {
  var tcolor = "black"
  var bcolor = 'purple'
    return (
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#fff',
        
      }
    }} >
      <HomeStack.Screen name="Home" component={HomeScreen}

   
      options
        ={{
         title: '',
         headerStyle:{
           backgroundColor:'#fff',
          height:80,
          borderBottomWidth:1
         },
       

  
          headerLeft: () => (
             <View style={{flexDirection:'row'}}>
               <Icon.Button name='bars' size={19} backgroundColor='#fff' color='purple' onPress={() => navigation.openDrawer() }></Icon.Button>
              <Text style={{alignSelf:'center', fontSize:16, fontWeight:"bold"}}> Home search</Text>
             </View>
              
              
              ),

         
          headerRight: () => (
            <Icon.Button name='search' size={19} backgroundColor='#fff' color='purple' onPress={() => navigation.navigate('search') }></Icon.Button>
            
            ),
             
        }}
            
        
      />
      <HomeStack.Screen name='sellPropertyForm' component={sellPropertyForm} options
        ={{
         title: 'Sell Property',
         headerStyle:{
           backgroundColor:'#fff',
          height:80,
          borderBottomWidth:1},
         }}/>

         <HomeStack.Screen name='Advertise' component={AdvertiseForm}/>
         <HomeStack.Screen name='letPropertyForm' component={LetPropertyForm}
         options
         ={{
          title: 'Add a Property',
          headerStyle:{
            backgroundColor:'#fff',
           height:80,
           borderBottomWidth:1},
          }}
         
         />
         <HomeStack.Screen name='flag' component = {FlagForm}/>
         <HomeStack.Screen name='search' component = {Search}/>
         
         </HomeStack.Navigator>
  )
};
// const LatestStackScreen = ({ navigation }) => {
//   return (
//     <LatestStack.Navigator >
//       <LatestStack.Screen name="Candidates" component={LatestScreen} options
//         ={{
//           title: 'Latest',
//           headerLeft: () => (
//             <Icon.Button name='bars' size={22} backgroundColor='#fff' color='purple' onPress={() => navigation.openDrawer() }></Icon.Button>
//           )
//         }}
//       />

//     </LatestStack.Navigator>
//   )
// };
