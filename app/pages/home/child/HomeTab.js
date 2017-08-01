import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Modal,
  PixelRatio,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Radio from '../../HomeTabs/radio.js'
import Ranking from '../../HomeTabs/ranking.js'
import Recommend from '../../HomeTabs/recommend.js'
import SongLst from '../../HomeTabs/songLst.js'

export default class One extends Component {
       // 构造
       constructor(props) {
           super(props);
           // 初始状态
           this.state = {};
       }
       render() {
           return(
             <View style={styles.container}>
             <Container style={{marginTop: -17}}>
        <Tabs initialPage={0}  style={{height: 32}}>
          <Tab heading="个性推荐" tabStyle={styles.tab} activeTabStyle={styles.tab}
           textStyle={styles.textStyle} activeTextStyle={styles.activeTextStyle}>
            <Recommend navigation={this.props.navigation} />
          </Tab>
          <Tab heading="歌单" tabStyle={styles.tab} activeTabStyle={styles.tab}
           textStyle={styles.textStyle} activeTextStyle={styles.activeTextStyle}>
            <SongLst />
          </Tab>
          <Tab heading="主播电台" tabStyle={styles.tab} activeTabStyle={styles.tab}
           textStyle={styles.textStyle} activeTextStyle={styles.activeTextStyle}>
            <Radio />
          </Tab>
          <Tab heading="排行榜" tabStyle={styles.tab} activeTabStyle={styles.tab}
           textStyle={styles.textStyle} activeTextStyle={styles.activeTextStyle}>
            <Ranking />
          </Tab>
        </Tabs>
      </Container>
      </View>
           );
       }
   }

   const styles = StyleSheet.create({
     container: {
           height:  Dimensions.get('window').height-113,
           width:  Dimensions.get('window').width,
     },
       tab: {
           backgroundColor: 'white',
           height: 32,
           marginTop: 17,
       },
       textStyle: {
         fontSize: 13,
          color: 'black',
       },
      activeTextStyle: {
         fontSize: 13,
          color: 'red',
      }

   });
