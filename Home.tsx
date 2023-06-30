import React from 'react';
import {Modal, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import HomeController from './HomeController';
import HOME_STRINGS from './config';

export default class Home extends HomeController {
  render() {
    return (
      <View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.handleGetData} style={styles.addAddressButton}>
            <Text style={styles.addButtonText}>{HOME_STRINGS.GET}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handlePostData} style={styles.addAddressButton}>
            <Text style={styles.addButtonText}>{HOME_STRINGS.POST}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handlePutData} style={styles.addAddressButton}>
            <Text style={styles.addButtonText}>{HOME_STRINGS.PUT}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleDeleteData} style={styles.addAddressButton}>
            <Text style={styles.addButtonText}>{HOME_STRINGS.DELETE}</Text>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="none"
          transparent={true}
          visible={this.state.openModal}>
          <View  style={styles.modalMainContainer}>
            <TouchableOpacity onPress={this.handleAddressModalClose}><Text style={styles.backModalButton}>{HOME_STRINGS.BACK_TEXT}</Text></TouchableOpacity>
            <TextInput style={styles.input}/>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addAddressButton: {
    borderColor: HOME_STRINGS.ORANGE,
    borderWidth: 1.5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: 200,
    marginBottom:10
  },
  addButtonText: {
    color: HOME_STRINGS.ORANGE,
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    marginTop: 40,
  },
  modalMainContainer:{
    backgroundColor:HOME_STRINGS.ORANGE,
    flex:1
  },
  backModalButton:{
    color:HOME_STRINGS.LIGHT_WHITE,
    fontWeight:'600',
    padding:10,
    fontSize:15
  },
  input:{
    backgroundColor:HOME_STRINGS.LIGHT_WHITE,

  }
});
