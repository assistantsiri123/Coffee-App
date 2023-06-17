import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import MyInput from "../../Components/MyInput";
import MyAuthButton from '../../Components/MyAuthButton';
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";


const LoginScreen = (props) => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:"white"}}>
      <View style={{height:"30%", width:"100%", backgroundColor:"white", justifyContent:"center", alignItems:"center"}}>
      <Image
      style={{height:270, width:250}}
      source={require("../../assets/Images/ss.png")}
      />
      </View>
      <View style={{height:"70%", width:"100%", backgroundColor:"#f8dd98", borderTopLeftRadius:150, borderStyle:"dotted"}}>
        <TouchableOpacity style={{justifyContent:"center", alignItems:"center",  margin:10 }}>
        <Text style={{fontSize:39, fontWeight:"bold", color:"white", margin:25}}>LOGIN</Text>
        </TouchableOpacity>
        <MyInput secure={true} Don="Email Adress" />
        <MyInput  Secure={true} Don="Password" />
        <MyAuthButton 
        onPress={()=>{
          props.navigation.navigate("SignUpScreen");
        }}
        don="LOGIN" />
        <Text style={{fontSize:15, fontWeight:"bold", color:"white", textAlign:"center", margin:12}}>Forgot Password</Text>
        <Text style={{fontSize:15, fontWeight:"bold", color:"white", textAlign:"center"}}>--------------  or  ----------------</Text>
       <View style={{justifyContent:"center", flexDirection:"row", margin:22}}>
        <Entypo name='facebook-with-circle' size={40} color="brown" />
        <AntDesign name='google' size={40} color="brown" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
