import React from 'react';
import {Image,Text,View,ScrollView,FlatList,StyleSheet} from 'react-native';

export function Category(){
    const cat=[{id:1,item:["Exercise","13 Tasks",require('../assets/woman_working.png')]},
    {id:2,item:["Study","12 tasks",require("../assets/woman_desk.png")]},
    {id:3,item:["Chores","14 tasks",require("../assets/chores.png")]},
    {id:4,item:["Hobbies","15 tasks",require("../assets/hobbies.png")]},
    {id:5,item:["Assignments","200 tasks",require("../assets/assignment.png")]},
    {id:6,item:["Entertainment","6 tasks",require("../assets/entertainment.png")]},
    {id:7,item:["Cooking","20 tasks",require("../assets/cooking.png")]},
    {id:8,item:["Social Interactions","50 tasks",require("../assets/socials.png")]},
    {id:9,item:["Workout","50 tasks",require("../assets/exercise.png")]}
    
    ]
    return(
        <View >
             <FlatList horizontal={true} data={cat}
              renderItem={({item})=> {
                return (<View  style={styles.task}>
                    <Text style={{ fontSize:20,fontWeight: "bold",marginLeft:15}}>{item.item[0]}</Text>
                    <Text style={{marginLeft:15}}>{item.item[1]}</Text>
                    <Image style={{width:151,height:132,marginLeft:50}} source={item.item[2]}/>
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
        border:1,
        borderRadius:10,
        fontFamily:'Lato',
       
    }
});