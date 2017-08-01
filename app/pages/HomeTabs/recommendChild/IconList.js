import React, { Component } from "react";
import { View,Text,StyleSheet,Dimensions,TouchableOpacity,Platform, PixelRatio } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux'
import { loginInfo } from '../../../action/actions.js'
 class IconList extends Component {
  personalFm(login,head){
    if(!login.userId){
      alert('请先登录')
    } else {
      this.props.navigation.navigate("MusicList",{ head: head,url: '/personal_fm'})
    }
  }

    render () {
      const { dispatch, login } = this.props
        return (
            <View style={styles.iconLis}>
            <View style={styles.iconListView}>
            <TouchableOpacity style={styles.btnDefaultStyle}  onPress={this.personalFm.bind(this,login,'私人FM')}>
              <Icon name="md-radio" size={30} color="#880000" />
           </TouchableOpacity>
           <Text style={styles.iconLisText}>私人FM</Text>
           </View>
           <View style={styles.iconListView}>
           <TouchableOpacity style={styles.btnDefaultStyle}  onPress={this.personalFm.bind(this,login,'每日歌曲推荐')}>
             <Icon name="md-calendar" size={30} color="#880000" />
          </TouchableOpacity>
          <Text style={styles.iconLisText}>每日歌曲推荐</Text>
          </View>
          <View style={styles.iconListView}>
          <TouchableOpacity style={styles.btnDefaultStyle}  onPress={this.personalFm.bind(this,login,'云音乐热歌榜')}>
            <Icon name="md-podium" size={30} color="#880000" />
         </TouchableOpacity>
         <Text style={styles.iconLisText}>云音乐热歌榜</Text>
         </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    iconLis: {
        width: Dimensions.get('window').width,
        height: 130,
        flexDirection: 'row',
    },
    iconListView: {
      flex: 1,
     justifyContent: 'center',
     alignItems: 'center'
    },
    iconLisText: {
      fontSize: 14,
      marginTop: 5,
    },
    btnDefaultStyle: {
   width: 70,
   height: 70,
   borderColor: '#880000',
   borderRadius: 50,
   borderWidth: (Platform.OS==='ios' ? 1.0 : 1.5) / PixelRatio.get(),
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center'
 },
})
const select = (state) => ({
  login: state.loginInfo
})
export default connect(select)(IconList)
