
import React, {Component} from 'react';
import {Text, Navigator, StyleSheet, View, TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/MaterialIcons';

class VideoPlayPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
        musicUrl: '',
        rate: 1,
        volume: 1,
        muted: false,
        resizeMode: 'contain',
        duration: 0.0,
        currentTime: 0.0,
        paused: true,
        isPlay: false,
      }
      this.playPause = () => {
        if(!this.state.isPlay) {
          let id = 'http://120.25.240.196:3001/music/url?id='+this.props.musicId
          fetch(id)
               .then((response) => response.json())
               .then((responseJson) => {
                 let url = responseJson.data[0].url
                 this.setState({paused: false,isPlay: true,musicUrl: url})
               })
               .catch((error) => {
                 console.error(error);
               });

        } else {
            this.setState({paused: false,isPlay: true})
        }

      }
      this.stopPause = () => {
        this.setState({paused: true})
      }
    }
    componentWillReceiveProps(nextProps) {
      
      if(!this.state.isPlay) {
        return
      }
      if(this.props.musicId !== nextProps.musicId){
        this.stopPause()
        let id = 'http://120.25.240.196:3001/music/url?id='+nextProps.musicId
        fetch(id)
             .then((response) => response.json())
             .then((responseJson) => {
               let url = responseJson.data[0].url
               this.setState({paused: false,musicUrl: url})
             })
             .catch((error) => {
               console.error(error);
             });
      }
    }
    render() {
      const { dispatch, music } = this.props

      if(this.state.paused) {
        play = <TouchableOpacity style={styles.tab1} onPress={this.playPause}>
        <Icon name="play-circle-outline" size={30} color="#000000" />
        </TouchableOpacity>
      } else {
         play = <TouchableOpacity style={styles.tab1} onPress={this.stopPause}>
        <Icon name="pause-circle-outline" size={30} color="#8B0000" />
        </TouchableOpacity>
      }
        return (
            <View style={{flex: 1}}>
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
                       />
                       {play}
            </View>
        )
    }

}

const styles = StyleSheet.create({

});

export default VideoPlayPage
