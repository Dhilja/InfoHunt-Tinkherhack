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

 
export default function Signup({ navigation }){

  const [name,setName] =useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.container}>
      
     
      <StatusBar style="auto" />
      <View style={styles.logo}>
        <Image source={ require("./IH.png")} style={{width:150,height:150}}></Image>
        </View>
      <View style={styles.input1}>
      <View style={styles.inputView}>

      <TextInput
          style={styles.TextInput}
          placeholder="Name"
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setEmail(setName)}
        />
        </View>
       
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
        </View>
        <View style={styles.inputView}>
      
      
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      

      </View>
      <View style={styles.login}>
 
 <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate("Home")}>
   <Text style={styles.loginText}  >REGISTER</Text>
 </TouchableOpacity>
 </View >

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
    marginTop:100,
    


    },
  
  inputView: {
    
    backgroundColor: "#E5E4E2",
    borderRadius: 30,
    width:"75%",
    height: 45,
    marginTop:20,

  },
 
  TextInput: {
    height: 50,
    width:"80%",

    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  login:
  {
    height:60,
    width:"100%",
    alignItems: "center",
    justifyContent: "center",
  },
 
  loginBtn: {
    width: "40%",
    borderRadius:15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#808080",
    marginTop:100,
  
  },
  

 

  
});

