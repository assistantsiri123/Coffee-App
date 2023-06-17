import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { CATEGORY } from '../../Data/DummyData';


const CategoryScreen = (props) => {
    const CatId =  props.route.params.catId;
    const MyCAT = CATEGORY.filter((item)=> item.catId == CatId);
  return (
    <View style={{flex:1, backgroundColor:"#f8dd98"}}>
        <FlatList
        data={MyCAT}
        keyExtractor={(item, index)=> index.toString()}
        renderItem={(itemData)=> {
            return(
                <TouchableOpacity 
                onPress={()=>{
                    props.navigation.navigate("AllCategoryScreen",{
                        productData: itemData.item,
                    });
                }}
                style={{height:188, width:"100%", marginBottom:10, paddingHorizontal:10}}>
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

export default CategoryScreen;
