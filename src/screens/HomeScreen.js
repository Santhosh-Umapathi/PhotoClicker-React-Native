import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Button, TextInput, Image } from "react-native";

export default class HomeScreen extends Component {
  
  static navigationOption = {
    title: 'PhotoClicker'
  }
  
  
  render() {
    var photo = this.props.navigation.getParam("photo", "");

    return (
      <View style={{flex: 1}}>

        <Image
          //resizeMode = "center"
          source=
          {
            photo === "" ? require('../../assets/logo.png') : photo
          }
          style={{marginTop: 50,height:200, width:200, alignSelf:'center'}}
        />
        <Button
          title='Click Picture'
          style={{marginTop:30}}
          onPress={() =>
          {
            this.props.navigation.navigate('Camera')
          }
          }
        
        />



      </View>
    );
  }
}

const styles = StyleSheet.create({});
