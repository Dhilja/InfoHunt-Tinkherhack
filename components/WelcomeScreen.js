import { StatusBar } from "expo-status-bar";
import { images ,KeyboardAvoidingView} from 'react-native';
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
 import axios from "axios";



export default function Welcome() {
  const [msg, setMsg] = useState("");
  const [data,setData]= useState("");
  
  function getResult(message) {
    axios
      .get(`http://localhost:8000?que=${message}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
        },
      })
      
      .then((res) => {
        console.log(res)
        setData(res)
      }).catch(error=>{console.log(error)});
  }
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
    
     
      <StatusBar style="auto" />
      <View style={styles.logo}>
        <Image source={ require("./IH.png")} style={{width:150,height:150}}></Image>
        </View>
     
      
      <View style={styles.inputView}>
      
      
      <TextInput
        style={styles.TextInput}
        placeholder=" Type Your Message..."
        placeholderTextColor="#003f5c"
        onChangeText={(msg) => setMsg(msg)}
      />
      <TouchableOpacity style={styles.enter} onPress={()=>getResult(msg)}>
        <Text style={styles.ent}  >Enter</Text>
        </TouchableOpacity>
    </View>
    
 
    

    </KeyboardAvoidingView>
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
    alignItems:"center",
  
   

  },

  

    inputView: {
    
      backgroundColor: "#E5E4E2",
      borderRadius: 30,
      width:"80%",
      height: 45,
      marginTop:450,
      marginLeft:10,
      paddingLeft:20,
      flexDirection:'row',
      justifyContent:'space-between',

      justifyContent:"center",
      
      
    
   
    
      
  
    },

    TextInput:
    {
      marginTop:10,
      marginLeft:20,
      width:"80%",
      height:25,
      paddingLeft:25,

    },

    ent:
    {
      fontWeight:'bold',
      fontSize:20,
      color:"#013449",
    },

    enter:{
      marginLeft:100,
      marginTop:10,
    }


    
    
  
 
  
 
  
  
});
