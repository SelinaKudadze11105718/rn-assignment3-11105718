import React from 'react';
import {TextInput,Image,Text,View,ScrollView,FlatList,StyleSheet} from 'react-native';

export function SearchBar() {
    return(
       
            <TextInput style={styles.searchBar} value={String} placeholder='search...'/>
     

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

    },
})