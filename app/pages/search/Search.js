import React, { Component } from 'react';
import { StyleSheet, ListView, Text, View, ScrollView } from 'react-native';
var CustomScrollView = React.createClass({
      render(){
          return(
              <ScrollView style={styles.mainStyle}>
                  {this.renderItem()}
              </ScrollView>
          );
      },

      renderItem() {
          // 数组
          var itemAry = [];
          // 颜色数组
          var colorAry = ['gray', 'green', 'blue', 'yellow', 'black', 'orange'];
          // 遍历
          for (var i = 0; i<colorAry.length; i++) {
              itemAry.push(
                  <View key={i} style={[styles.itemStyle, {backgroundColor: colorAry[i]}]}></View>
              );
          }
          return itemAry;
      }
  });
  // 样式
  var styles = StyleSheet.create({
      scrollViewStyle: {
          // 背景色
          backgroundColor:'red'
      },

      itemStyle: {
          // 尺寸
          width:1000,
          height:200
      },
  });

export default CustomScrollView
