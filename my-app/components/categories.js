import React from 'react';
import {Text,View,ScrollView,FlatList,StyleSheet} from 'react-native';

export function Category(){
    const cat=[{id:1,item:["Exercise","13 Tasks"]},
    {id:2,item:["Studies","12 tasks"]},
    {id:3,item:["Chores","14 tasks"]},
    
    ]
    return(
        <View >
             <FlatList horizontal={true} data={cat}
              renderItem={({item})=> {
                return (<View  style={styles.task}>
                    <Text style={{ fontSize:20,fontWeight: "bold",marginLeft:15}}>{item.item[0]}</Text>
                    <Text>{item.item[1]}</Text>
                    </View>)}}
               />

        </View>
    )
}

const styles= StyleSheet.create({
    task:{
        width:396,
        height:192,
        marginTop:25,
        marginLeft:10,
        backgroundColor: "blue",
        border:1,
        borderRadius:10,
       
    }
});