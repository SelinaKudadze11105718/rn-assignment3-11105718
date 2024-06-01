import React from "react";
import {Text,View,StyleSheet,FlatList} from "react-native";
 
export function Task() {
    const tasks=[{id:1,item:"Mobile App Development"},
    {id:2,item:"Web Development"},
    {id:3,item:"Django Project Completion"},
    {id:4,item:"Guitar lessons"},
    {id:5,item:"Chuch"},
    {id:6,item:"Sleep"},
    {id:7,item:"Watch UCL"},
    {id:8,item:"Youtube videos"},
    {id:9,item:"Clean room"},
    {id:10,item:"DCIT 202 Assignmnet"},
    {id:11,item:"Complete notes"},
    {id:12,item:"Workout"},
    {id:13,item:"Laundry"},
    {id:14,item:"Bible studies"},
    {id:15,item:"Choir rehearsals"},
    ]
  
    return (
      <View>
              <FlatList scrollEnabled={false}   data={tasks}
              renderItem={({item})=> {
                return(<View style={styles.task}><Text style={styles.textTask}>{item.item}</Text></View>)}}
               />
      </View>
    );
  }
                
       
            
  
        
   

const styles = StyleSheet.create({

task:{
    border:1,
    borderRadius:15,
    padding:10,
    width:354,
    height:128,
    marginTop:10,
    marginLeft:10,
    backgroundColor: '#E8D1BA',
    
},

textTask:{
    fontSize:18,
    fontFamily:"Helvetica",
    fontWeight:"bold",
    textAlign:"Justify",
    marginLeft:0,
    marginTop:40,
  
   

  

}

});

