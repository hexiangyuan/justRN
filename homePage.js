/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
  Image,
  Dimensions,
} from 'react-native';

const URL = 'http://www.65emall.net:8051/SG_android.ashx';

var {height, width} = Dimensions.get('window');


export default class HomePage extends Component {
  constructor(props){
    super(props);
    var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
    this.state={
        dataSource:ds,
        loaded:false,
    }
  }

  componentDidMount(){
    this.fetData();
  }

  fetData(){
    fetch(URL,{
        method:'POST',
        body:JSON.stringify({
          id:'15',
          parmas:[0,0,20],
          method:'Category.getPrimeProducts'
        })
      })
        .then((response) =>{
        console.log(response);
        // response.json());
      }
        .then((responseDate) => {
          this.setState({
            dataSource:this.dataSource.cloneWithRows(responseDate.result),
            loaded:true,
          })
        })
        .done();
  }

  render() {
    if(!this.state.loaded){
      return this.renderLoadingView();
    }
    return (
      <ListView
        contentContainerStyle={styles.list}
        dataSource={this.state.dataSource}
        renderRow={(rowData,sectionID,rowID) =>
          <View style={styles.row}>
            <Image
              source={{uri:rowData.pricture}}
              style={style.thumbnail}
            />
            <Text>
              {rowData.name}
            </Text>
          </View>
        }
      />
    )
  }
    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    Loading ...
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F5FCFF',
      },
  list:{
    flexDirection:'row',
    justifyContent:'center',
    flexWrap:'wrap'
  },
  rowContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:width/2,
    height:width/2,
  },
  thumbnail: {
       width: 180,
       height:240,
   },
});
