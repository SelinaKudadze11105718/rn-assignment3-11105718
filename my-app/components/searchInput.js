import React from 'react';
import {Button,TextInput,Image,Text,View,ScrollView,FlatList,StyleSheet} from 'react-native';

export function SearchBar() {
    return(
       <View style={styles.searchBar}>
            <TextInput  value={String} placeholder='search...'/>
            <Button style={{alignItem:"right", height:20, weight:20}} title="Learn More" color="#841584" accessibilityLabel="Learn more about this purple button"
/></View>

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