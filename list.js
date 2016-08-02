'use strict'

import React,{Component}from 'react';
import {
  AppRegistry,
  Text,
  View,
  ListView,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

export default class List extends React.Component{

  constructor(props){
    super(props);
    var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 != r2});
    this.state={
      dataSource:ds.cloneWithRows(this.getDataSource()),
    }
  }

  getDataSource(){
    const data=[];
      for(var i =0;i<200;i++){
      data[i] = i;
    }
    return data;
  }

onPress(rowID){
  alert(rowID);
}



  render(){
    return(
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData,sectionID,rowID)=>
          <TouchableOpacity
            onPress={()=>this.onPress(rowID)}>
          <Text>
            {rowData+'rowID    '+rowID}
          </Text>
          </TouchableOpacity>
        }

      />
    );
  }
}

const styles = StyleSheet.create({

});
