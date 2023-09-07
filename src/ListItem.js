import { View, Text, StyleSheet } from 'react-native'
import React from 'react'



const ListItem = ({ item }) => {
    console.log("ITEM", item);
  return (
    <View style={styles.view_top} >
      <Text style={styles.list} > {item.text} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    list:{

      fontSize: 22,
      margin: 5,
      color: "white",
      alignItems: "center",
      justifyContent: "center",
      width: 300,
  
      // BORDER STYLES
      borderColor: "white",
      borderWidth: 2,
      borderRadius: 18,
  
      // Text styles
      textAlign: "center",
      padding: 8,
    },
  
    
});

export default ListItem