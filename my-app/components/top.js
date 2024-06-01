import React from 'react';
import {InlineImage,Image,Text,View,ScrollView,FlatList,StyleSheet} from 'react-native';

export function Top(){
    return(
        <View style={styles.task}>
           
            <View style={{flexDirection:'row'}}>
                <Text style={styles.textTask}>Hello , Devs</Text>
                <Image style={{height:30,width:30, alignSelf: 'flex-end',marginLeft:200,marginTop:10}}source={require("../assets/Profile Image.png")}/>
            </View>
            <Text style={{marginTop:0,textAlign:'left',fontFamily:'Lato'}}>14 tasks today</Text> 
            
            
        </View>
    )

};

const styles= StyleSheet.create({
    task:{
        
        width:354,
        height:57,
        marginTop:52,
        marginLeft:10,
        // textAlign: "justify",
        alignItems: "stretch",
        borderRadius:10,
        fontFamily:'Lato',
        
        
    },
    textTask:{
        fontSize:24,
        fontWeight: "bold",
        // alignSelf:"justify",
        alignItems: "stretch",
        marginTop:10,

    },
    
});