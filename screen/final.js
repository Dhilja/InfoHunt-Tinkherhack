import { StatusBar } from "expo-status-bar";
import { images } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
 
export default function Final() {
  const [msg, setMsg] = useState("");
  
 
  return (
    <View style={styles.container}>
      
     
      <StatusBar style="auto" />
      <View style={styles.logo}>
        <Image source={ require("./IH.png")} style={{width:150,height:150}}></Image>
        </View>
     
      <View style={styles.input1}>

      
      

      </View>
      <View style={styles.inputView}>
      
      
      <TextInput
        style={styles.TextInput}
        placeholder=" Type Your Message..."
        placeholderTextColor="#003f5c"
        secureTextEntry={true}
        onChangeText={(msg) => setPassword(msg)}
      />
    </View>
    
 
    
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "C4A494",
   
    justifyContent: "center",
  },

  logo:{

    marginTop:100,
   

  },

  input1: {
    paddingTop:0,
    height:110,
    width:"100%",
    
    justifyContent: "center",
    marginTop:350,
    


    },

    inputView: {
    
      backgroundColor: "#E5E4E2",
      borderRadius: 30,
      width:"75%",
      height: 45,
      marginTop:20,
      paddingLeft:20,
      
    
   
    
      
  
    },
   
  
  
 
  
 
  
  
});
