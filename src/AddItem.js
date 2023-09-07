import { View, Text , StyleSheet, TextInput, Pressable} from 'react-native' 
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const AddItem = ({text, setText, addItem}) => {
  return (
    
    <View style={styles.buttonContainer}>  

    <View style={styles.inputContainer}>
      <TextInput placeholder='Ingrese casa..' style={styles.input} value={text} onChangeText={(value) => setText(value)}/>
    </View>

    <Pressable  style={styles.button} onPress={()=> addItem()} >
    <Ionicons name="add-circle-outline" size={35} color="red" />
    </Pressable>

  </View>
  );
};
const styles = StyleSheet.create({
    input:{
        padding: 5,
        fontSize: 18,
        width: 300,
      },
      inputContainer: { 
        marginTop: 20,
        borderColor: "blue",
        borderWidth:2,
        borderRadius: 2,
      },
      buttonContainer:{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
      },
      button:{
        marginTop: 15,
        marginLeft: 15,
      },
})

export default AddItem