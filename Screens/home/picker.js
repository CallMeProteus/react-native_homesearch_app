
import  React,{useState} from "react";
import { View,StyleSheet, Text, Button, Picker } from "react-native";




const PickerDrawer = () =>{
const [selectedValue, setSelectedValue] = useState("All");
return(

<Picker
     selectedValue={selectedValue}
     style={{ height:50, width: 98, position: "absolute", top:-4, left:242, color:'purple', fontWeight:'bold', fontSize:12}}
     onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
     prompt={"Filter"}
     >
     <Picker.Item label="Hotels" value="Hotels" />
     <Picker.Item label="Lounges" value="Lounges" />
     <Picker.Item label="Mansions" value="Mansions" />
     <Picker.Item label="To-let" value="To-let" />
     <Picker.Item label="All" value="All" />
   </Picker>
)
}
export default PickerDrawer;