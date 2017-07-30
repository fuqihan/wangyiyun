import React, { Component } from "react";
import { View,Text,StyleSheet,Dimensions, TouchableOpacity } from "react-native";
import { connect } from 'react-redux'
import store from '../../store/index.js'
import { musicUrl } from '../../action/actions.js'
 class personal extends Component {
  playPause() {
    store.dispatch(musicUrl("http://m10.music.126.net/20170730120457/d23134bc20ab29f8785c1b6abd650127/ymusic/f1ae/0bd1/31a9/5d64960d0cbebc0d089bc85a6ef54680.mp3"))
  }
  playPause2() {
    store.dispatch(musicUrl("345"))
  }

    render () {
      const { dispatch, music } = this.props
        return (
            <View style={styles.personal}>
            <TouchableOpacity style={styles.tab1} onPress={this.playPause}>
              <Text style={styles.personal}>当前屏幕高度：{music}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab1} onPress={this.playPause2}>
              <Text style={styles.personal}>当前屏幕高度：{music}</Text>
            </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    personal: {
        width: 300,
        height: Dimensions.get('window').height-45,
    },
    tab1: {
      flex: 1
    }
})
const select = (state) => ({
  music: state.musicUrl
})
export default connect(select)(personal)
