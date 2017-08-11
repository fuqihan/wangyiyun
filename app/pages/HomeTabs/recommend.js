import React, { Component } from 'react';
import { StyleSheet, ListView, Text, View, ScrollView } from 'react-native';
import Swioer from '../../component/Suiper.js'
import RadiusButton from './recommendChild/IconList.js'
import Highquality from './recommendChild/Highquality.js'
export default class recommend extends Component {
      render(){
          return(
              <ScrollView style={styles.mainStyle}>
                  <Swioer/>
                  <RadiusButton navigation={this.props.navigation} />
                  <Highquality navigation={this.props.navigation} />
              </ScrollView>
          );
      }
  }
  // 样式
  var styles = StyleSheet.create({

  });
