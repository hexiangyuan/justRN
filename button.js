'use strict'

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View
    } from 'react-native';

export default class Button extends Component{

  constructor(props){
    super(props);
  }

  _pressButton=()=>{
    this.props.onPress();
  }

  render(){
    return(
      <TouchableWithoutFeedback onPress={this._pressButton}>
        <View style = {[styles.button,this.props.enable ? {}:styles.buttonDisable]}>
          <Text style = {styles.buttonText}>
            {this.props.text}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

var styles = StyleSheet.create({
  button:{
    flex:1,
    backgroundColor:'blue',
    margin:5,
    padding:2,
  },

  buttonDisable:{
    backgroundColor:'gray',
  },

  buttonText:{
    color:'white',
  }
});
