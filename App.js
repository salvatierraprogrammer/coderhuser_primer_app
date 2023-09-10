import React, { useState } from "react";
import {Button, Pressable, StyleSheet, Text, TextInput, Image, View, FlatList, Modal }  from 'react-native';
import AddItem from "./src/AddItem";
import ListItem from "./src/ListItem";
import CustomModal from "./src/CustomModal";
import { Ionicons } from '@expo/vector-icons'; 



export default function App() {
 
  const initialState = [
   { id : 1, text: "Casa Azul" },
   { id : 2, text: "Casa Verde" },
   { id : 3, text: "Casa Amarilla" },
  ];
  
  
  const [text, setText] = useState("");

  const [list, setList] = useState(initialState);
  
  const [isModalVisible, setIsModalVisible] = useState(false); 
  
  console.log(text);
  
  const  addItem = () => {
   
    list.push({
      id: Math.random(),
    
      text: text,
      
    });
   
    setList(list);
    setText("");

   
  };
  const clearList = () =>{
    setList([]);
    setIsModalVisible(false);
  };

  

  return (
    <View style={styles.container}>
     <CustomModal setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible} clearList={clearList}/> 
      <Image style={styles.imagen}
      source={{
        uri: "https://cdn.icon-icons.com/icons2/1880/PNG/512/iconfinder-home-4341294_120570.png" }}   
      />

    <Text style={styles.titulo}> Lista de casas</Text>
    <AddItem text={text} setText={setText} addItem={addItem}/> 
       
         <View style={styles.box_list}>
          <FlatList 
          data={list}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <ListItem item={item} />}
          />

        </View>
          <Pressable style={styles.button}  onPress={()=> setIsModalVisible(true)}>
          <Ionicons name="trash"  size={35} color="red" />
          </Pressable> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  
  titulo: {
    marginTop: 20,
    fontSize: 30,
    borderBottomColor: 'red',
    borderBottomWidth: 5,
  },
  imagen:{
    height: 100,
    width: 100,
    marginTop: 40,
  },
  box_list:{
    width: "95%",
    borderColor: "black",
    borderWidth:1,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "#C20B2A",
  },
  


    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

);

