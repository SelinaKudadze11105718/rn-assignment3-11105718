import React from 'react';
import {Button,TextInput,Image,Text,View,ScrollView,FlatList,StyleSheet,TouchableOpacity} from 'react-native';

export function SearchBar() {
    return(
       <View style={styles.searchBar}>
        <Image style={{width:30,height:30,marginTop:10}}source={require('../assets/search-removebg-preview.png')} />
        <TextInput  value={String} placeholder='search...'/>
        <TouchableOpacity style={styles.imageButton} activeOpacity={0.5}>
            <Image style={{ width:30,height:30,marginLeft:230}} source={require("../assets/nav-removebg-preview.png") }/>
            
        </TouchableOpacity>
            
            
</View>

    )
};


const styles = StyleSheet.create({
    searchBar:{
        border:1,
        width:353,
        height:49,
        marginLeft:10,
        marginTop:20,
        backgroundColor:"white",
        borderRadius:10,
        alignItems: "stretch",
        flexDirection: 'row',


    },

    imageButton:{
        justifyContent: "center",
      

    },
})