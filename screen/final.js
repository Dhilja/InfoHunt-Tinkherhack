import { StatusBar } from "expo-status-bar";
import { images } from 'react-native';

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
 
const final=() =>{
  const [msg, setMsg] = useState("");
  
 
  return (
    <View style={styles.container}>
      
     
      <StatusBar style="auto" />
      <View style={styles.logo}>
        <Image source={ require("./assets/IH.png")} style={{width:150,height:150}}></Image>
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
    alignItems: "center",
    justifyContent: "center",
  },

  logo:{

    marginTop:100,
   

  },

  input1: {
    paddingTop:0,
    height:110,
    width:"100%",
    alignItems: "center",
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
      justifyContent: "center",
    
   
    
      
  
    },
   
  
  
 
  
 
  
  
});