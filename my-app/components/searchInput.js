import React from 'react';
import {Button,TextInput,Image,Text,View,ScrollView,FlatList,StyleSheet,TouchableOpacity} from 'react-native';

export function SearchBar() {
    return(
       <View style={styles.searchBar}>
        <Image style={{width:20,height:20,marginTop:15}}source={require('../assets/Group 5.png')} />
        <TextInput  keyboardType='default' style={{fontWeight:'bold',color:'black'}} value={String} placeholder=' search'  placeholderTextColor={'black'}/>
        <TouchableOpacity style={styles.imageButton} activeOpacity={0.5}>
            <Image style={{ width:30,height:30,marginLeft:250}} source={require("../assets/nav-removebg-preview.png") }/>
            
        </TouchableOpacity>
            
            
</View>

    )
};


const styles = StyleSheet.create({
    searchBar:{
        border:1,
        width:353,
        height:49,
        marginLeft:12,
        marginTop:30,
        backgroundColor:"#FBF9F7",
        borderRadius:10,
        alignItems: "stretch",
        flexDirection: 'row',


    },

    imageButton:{
        justifyContent: "center",
      

    },
})