import React from "react";
import {Text,View,StyleSheet,FlatList} from "react-native";
 
export function Task() {
    const tasks=[{id:1,item:"Guitar lessons"},
    {id:2,item:"Code"},
    {id:3,item:"Assignments"},
    {id:4,item:"Cook"},
    {id:5,item:"Chuch"},
    {id:6,item:"Sleep"},
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
    backgroundColor: 'rgb(235,235,235)',
    
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

