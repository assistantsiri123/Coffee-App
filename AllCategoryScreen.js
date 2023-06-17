import React from 'react';
import { View, Text, ScrollView, FlatList, Dimensions, Image } from 'react-native';

const AllCategoryScreen = (props) => {
    const ProductData = props.route.params.productData;
    
  return (
    <ScrollView style={{marginHorizontal:10, marginTop:10}}>
        <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={ProductData.imagesUrl}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(itemData) => {
          return(
            <View style={{height:230, width:Dimensions.get("screen").width, margin:10, elevation:20}}>
              <Image
              borderRadius={25}
              style={{height:"100%", width:"100%"}}
              source={{uri: itemData.item.image}}
              />
            </View>
          )
        }}
        />
        <View style={{ width:"100%", marginVertical:10}}>
        <Text style={{fontSize:19, fontWeight:"bold", color:"black" }}>{`Price:`}</Text>
        <Text style={{fontSize:19, fontWeight:"bold", color:"red" }}>{` * ${ProductData.Price}`}</Text>
        <Text style={{fontSize:19, fontWeight:"bold", color:"black" }}>{`Select Quantity:`}</Text>
      <Text style={{fontSize:18, fontWeight:"bold", color:"red" }}>{` * ${ProductData.SelectQuantity}`}</Text>
      <Text style={{fontSize:19, fontWeight:"bold", color:"black", margin:10 }}>{`If you Want Order Any Type Of Product So, Please Contact on this Number:       555-44-221`}</Text>
        </View>
    </ScrollView>
  );
};

export default AllCategoryScreen;
