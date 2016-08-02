e'user strict'
import React,{Component}from 'react';
import {
  AppRegistry,
  View,
  Text,
  ViewPagerAndroid,
  Image,
  StyleSheet,
}from 'react-native';

import Button from './button';

const IMAGE_URLS=[
'http://apod.nasa.gov/apod/image/1410/20141008tleBaldridge001h990.jpg',
'http://apod.nasa.gov/apod/image/1409/volcanicpillar_vetter_960.jpg',
'http://apod.nasa.gov/apod/image/1409/m27_snyder_960.jpg',
'http://apod.nasa.gov/apod/image/1409/PupAmulti_rot0.jpg',
'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png',
];

const BGCOLOR=['#fdc08e', '#fff6b9', '#99d1b7', '#dde5fe', '#f79273'];

export default class ViewPager extends React.Component{

_onPageScroll=(e)=>{
  // console.log({e.nativeEvent});
};

_onPageSelected=(e)=>{
  console.log(e.nativeEvent.position);
};

  render(){

    var pages=[];

    for(var i=0;i<IMAGE_URLS.length;i++){
      var pagetStyle={
        backgroundColor:BGCOLOR[i],
        alignItems:'center',
        padding:12,
      };
      pages.push(
        <View
        key={i}
        style={pagetStyle}
        collapsable={false}
        >
          <Image
            style={styles.image}
            source={{uri:IMAGE_URLS[i]}}
          />
        </View>
      );
    }

    return(
      <View style = {styles.container}>
        <ViewPagerAndroid
          initialPage={0}
          // onPageScroll={this._onPageScroll}
          // onPageSelected={this._onPageSelected}
          backgroundColor={'black'}
          height={300}
          ref={viewpager => {this.viewpager=viewpager;}}
        >
        {pages}
        </ViewPagerAndroid>
         <Button
          text='这是button'
          enable={true}
          onPress={()=>alert('onPress')}
        />
        <Button
          text='button diable'
          enable={false}
          onPress={()=>alert('disable onPress')}
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:48,
    },
  image:{
    width:300,
    height:300,
  },

});
