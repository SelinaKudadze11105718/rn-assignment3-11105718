import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text,View,Image,TouchableHighlight,ScrollView,StyleSheet, FlatList} from 'react-native';
import {Task} from './components/OngoingTask';
import {Category} from './components/categories';
import {Top} from './components/top';
import {SearchBar} from './components/searchInput';

export default function App() {
  return (
  <ScrollView style={styles.container}>

    <Top/>
    <SearchBar/>
    <Text style={{marginTop:15, fontSize:20, fontWeight:'bold',marginLeft:10}}>Categories:</Text>
    <Category/>
    <Text style={{marginTop:15, fontSize:20, fontWeight:'bold',marginLeft:10}}>Ongoing Tasks:</Text>
    <Task/>
   
    
  </ScrollView>
  )
  

}
    
    
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbb',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  text:{
    width:354,
    backgroundColor:"yellow",
    marginTop:52,
    height:52,
    marginLeft:10,
    border:10,
    borderRadius:10,
  

  },
});
