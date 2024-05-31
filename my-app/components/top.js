import React from 'react';
import {InlineImage,Image,Text,View,ScrollView,FlatList,StyleSheet} from 'react-native';

export function Top(){
    return(
        <View style={styles.task}>
            <Text style={styles.textTask}>Hello,Devs<Image style={{height:30,width:30, alignSelf: 'flex-end'}}source={require("../assets/favicon.png")}/></Text>
            
        </View>
    )

};

const styles= StyleSheet.create({
    task:{
        width:354,
        height:52,
        marginTop:52,
        marginLeft:10,
        backgroundColor: "yellow",
        // textAlign: "justify",
        alignItems: "stretch",
        borderRadius:10,
        
    },
    textTask:{
        fontSize:22,
        fontWeight: "bold",
        // alignSelf:"justify",
        alignItems: "stretch",

    },
    
});