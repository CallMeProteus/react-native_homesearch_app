
import * as React from 'react';
import { Image, View,Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import Screen from './inputForm'
import { Button } from 'react-native-paper';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
export default class ImgPicker extends React.Component {
  state = {
    image: null,
  };
  
  render() {
    let { image } = this.state;

    return (
      <View style={{alignItems: 'center', height:400, width:null }} >
        <View style={{alignSelf:'center', heigth:200}} >
        {image && <Image source={{ uri: image }} style={{padding:10, width: 360, height: 200, borderRadius:6 }} />}
        <TouchableWithoutFeedback onPress={this._pickImage} style={{width:360, height:90,}}><Text style={{flex:1, alignSelf:'center',fontWeight:'bold', marginTop:30}}>[ Image + ]</Text></TouchableWithoutFeedback>
        </View>
      <Screen uri={image}/>
              </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };
}





















