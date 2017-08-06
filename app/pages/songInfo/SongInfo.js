
import React, {Component} from 'react';
import {Text, Navigator, StyleSheet, View, TouchableOpacity,ScrollView, } from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Entypo';
import MusicSlider from './child/MusicSlider.js'
import LyricScroll from './child/lyricScroll.js'
import Header from './child/Header.js'

class VideoPlayPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
        musicUrl: '',
        muted: false,
        currentTime: 320000,
        paused: false,
        sliderValue: 0,
        sliderTime: 0,
        musiclyric: [],
      }

    }
    onProgress(e) {

      let value = e.currentTime*1000/320000
      this.setState({
        sliderValue: value,
        sliderTime: e.currentTime
      })
    }
   componentWillMount(){
     let url = 'http://120.25.240.196:3001/music/url?id='+ this.props.navigation.state.params.info.id
     fetch(url)
          .then((response) => response.json())
          .then((responseJson) => {
            let url = responseJson.data[0].url
            this.setState({musicUrl: url})
          })
          .catch((error) => {
            console.error(error);
          });
   }

    render() {

      const { info } = this.props.navigation.state.params

        return (
            <View style={{flex: 1}}>
            {/* */}
               <Video source={{ uri: this.state.musicUrl}}   // Can be a URL or a local file.
                       ref={(ref) => {
                           this.player = ref
                       }}                             // Store reference
                       rate={1.0}                     // 0 is paused, 1 is normal.
                       volume={1.0}                   // 0 is muted, 1 is normal.
                       muted={false}                  // Mutes the audio entirely.
                       paused={this.state.paused}                 // Pauses playback entirely.
                       resizeMode="contain"             // Fill the whole screen at aspect ratio.
                       repeat={false}                  // Repeat forever.
                       playInBackground={true}       // Audio continues to play when app entering background.
                       playWhenInactive={false}       // [iOS] Video continues to play when control or notification center are shown.
                       progressUpdateInterval={250.0} // [iOS] Interval to fire onProgress (default to ~250ms)
                       onProgress={(e) => this.onProgress(e)}
                       />

                        <Header navigation={this.props.navigation} name={info.name} ar={info.ar}  />

                      <LyricScroll sliderTime={this.state.sliderTime} id={info.id}/>
                     <MusicSlider sliderValue={this.state.sliderValue} sliderTime={this.state.sliderTime}/>
                     <View style={styles.songBottom}>
                     <View style={styles.songBottomLeft}>
                     <TouchableOpacity style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
                       <Icon name="cw" size={30} color="#000000" />
                     </TouchableOpacity>
                     </View>
                     <View style={styles.songBottomConter}>
                     <TouchableOpacity style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
                       <Icon name="controller-jump-to-start" size={30} color="#000000" />
                     </TouchableOpacity>
                     <TouchableOpacity style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
                       <Icon name="controller-paus" size={30} color="#000000" />
                     </TouchableOpacity>
                     <TouchableOpacity style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
                       <Icon name="controller-next" size={30} color="#000000" />
                     </TouchableOpacity>
                     </View>
                     <View style={styles.songBottomRight}>
                     <TouchableOpacity style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
                       <Icon name="menu" size={30} color="#000000" />
                     </TouchableOpacity>
                     </View>
                     </View>

            </View>
        )
    }

}

const styles = StyleSheet.create({
 songBottom: {
   height: 60,
   flexDirection: 'row',
 },
 songBottomLeft:{
   flex: 1
 },
 songBottomConter: {
   flex: 4,
   flexDirection: 'row',
 },
 songBottomRight:{
   flex: 1
 }
});

export default VideoPlayPage
