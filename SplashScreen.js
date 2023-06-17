import React from 'react';
import { View, Text, Image } from 'react-native';
import MyAuthButton from '../Components/MyAuthButton';

const SplashScreen = (props) => {
  return (
    <View style={{flex:1}}>
        <View style={{ height:"40%", width:"100%",backgroundColor:"white", justifyContent:"flex-start", alignItems:"center"}}>
            <Image 
            style={{height:200, width:250, justifyContent:"center"}}
            source={require("../assets/Images/ss.png")} />
            <Text style={{fontSize:32, fontWeight:"bold", color:"#5c3408"}}>Koffein</Text>
            <View style={{height:"240%", width:"98%",backgroundColor:"#f8dd98", borderTopRightRadius:70, borderTopLeftRadius:80, justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:30, fontWeight:"bold", marginBottom:40}}>Welcome to Coffee Shop</Text>
      <Text style={{fontSize:22, fontWeight:"bold"}}>Feeling low? Take a Sip of Coffee</Text>
      <MyAuthButton 
      onPress={()=>{
        props.navigation.navigate("LoginScreen");
      }}
      don="GET STARTED ->" />
      </View>
      </View>
    </View>
  );
};

export default SplashScreen;
