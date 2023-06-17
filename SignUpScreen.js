import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import MyInput from "../../Components/MyInput";
import MyAuthButton from '../../Components/MyAuthButton';

const SignUpScreen = (props) => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:"white"}}>
      <View style={{height:"30%", width:"100%", backgroundColor:"white", justifyContent:"center", alignItems:"center"}}>
      <Image
      style={{height:270, width:250}}
      source={require("../../assets/Images/ss.png")}
      />
      </View>
      <View style={{height:"70%", width:"100%", backgroundColor:"#f8dd98", borderTopLeftRadius:150, borderStyle:"dotted"}}>
        <TouchableOpacity 
        onPress={()=>{
            props.navigation.navigate("HomeScreen");
        }}
        style={{justifyContent:"center", alignItems:"center", flexDirection:"row", margin:10 }}>
        <Text style={{fontSize:35, fontWeight:"bold", color:"white"}}>SIGN UP</Text>
        </TouchableOpacity>
        <MyInput 
        keyboardType="email-address"
        secure={true} Don="Email Adress" />
        <MyInput  keyboardType="number-pad" Secure={true} Don="Password" />
        <MyInput keyboardType="number-pad" Secure={true} Don="Confirm Password" />
        <MyAuthButton
         onPress={()=>{
            props.navigation.navigate("HomeScreen");
        }}
        don="SIGN UP" />
        </View>
        </SafeAreaView>
  );
};

export default SignUpScreen;
