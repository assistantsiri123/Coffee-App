import React from 'react'
import { View, Text, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import { DATA } from '../../Data/DummyData';

const HomeScreen = (props) => {
  return (
    <View style={{flex:1, backgroundColor:"#f8dd98"}}>
        <FlatList
        numColumns={2} 
        data={DATA}
        keyExtractor={(item, index)=> index.toString()}
        renderItem={(itemData)=> {
            return(
                <TouchableOpacity 
                onPress={()=>{
                    props.navigation.navigate("CategoryScreen",{
                        catId: itemData.item.id,
                    });
                }}
                style={{height:220, width:"45%", margin:10}}>
                    <ImageBackground
                    borderRadius={20}
                    style={{height:"100%", width:"100%",  borderColor:"black",

                    marginBottom: 10,
                    margin: 10,
                    marginHorizontal: 2,
                    justifyContent: "flex-end",
                    alignItems: "center"}}
                    source={{uri: itemData.item.image}}
                    >
                    <Text style={{fontSize:26, fontWeight:"bold", color:"white"}}>{itemData.item.name}</Text>

                    </ImageBackground>
                </TouchableOpacity>
            )
        }}
        />
    </View>
  );
};

export default HomeScreen;
