import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import React from 'react'

const CustomModal = ({setIsModalVisible, isModalVisible, clearList}) => {
  return (
    <Modal  transparent={true} visible={isModalVisible}>
        <View style={styles.modal_container}>
          <Text style={styles.text_pregunta}>¿Estas Seguro de eliminar la lista?</Text>
            <View style={styles.modal_container_button}>
                <Pressable style={styles.modal_button} onPress={() => clearList()}>
                  <Text style={styles.list}>Si</Text>
                </Pressable>

                <Pressable style={styles.modal_button} onPress={()=> setIsModalVisible(false)}>
                  <Text style={styles.list}>No</Text>
                </Pressable>
            </View>
        </View>
    </Modal>
  );
};


export default CustomModal

const styles = StyleSheet.create({
//Modal estilos

modal_container:{
   
    width: 410,
    height: 250,
    color: "white",
    borderWidth:1,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "#C20B2A",
    marginLeft: 1,
    marginTop: 250,
  },
  text_pregunta:{
    fontSize: 20,
    marginVertical: 1,
    color: "white",
    fontWeight: "bold",
    marginTop: 60,
  },
  modal_container_button:{
    flexDirection: 'row',
    justifyContent: 'space-around', 
    marginVertical: 50, 
    
  },
  modal_button:{
    
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
   
  },
  list:{
    fontSize: 20,
    marginVertical: 1,
    color: "white",
    fontWeight: "bold",
},


})