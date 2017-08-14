
import React, {Component} from 'react';
import {Text, Navigator, StyleSheet, View, TouchableOpacity,ScrollView, } from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Entypo';
import MusicSlider from './child/MusicSlider.js'
import LyricScroll from './child/lyricScroll.js'
import Header from './child/Header.js'
import ModalList from '../../component/ModalList.js'
import { connect } from 'react-redux'
import { modalSongList,fooderMusic } from '../../action/actions.js'

class VideoPlayPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
        musicUrl: '',
        muted: false,
        currentTime: '',
        paused: false,
        sliderValue: 0,
        sliderTime: 0,
        musiclyric: [],
      }

    }
    /* video 每250ms运行一次 */
    onProgress(e) {

      let value = e.currentTime*1000/this.state.currentTime
      this.setState({
        sliderValue: value,
        sliderTime: e.currentTime
      })
    }
    /*render执行后的生命周期*/
   componentWillMount(){
     let url = 'http://120.25.240.196:3001/music/url?id='+ this.props.songPlay.id
     fetch(url)
          .then((response) => response.json())
          .then((responseJson) => {
            let url = responseJson.data[0].url
            this.setState({musicUrl: url,currentTime: responseJson.data[0].br})
          })
          .catch((error) => {
            console.error(error);
          });
   }
   /*监听props的变化*/
   componentWillReceiveProps(nextProps) {

     if(this.props.songPlay.id !== nextProps.songPlay.id ){
       this.setState({paused: true})
       let id = 'http://120.25.240.196:3001/music/url?id='+nextProps.songPlay.id
       fetch(id)
            .then((response) => response.json())
            .then((responseJson) => {
              let url = responseJson.data[0].url
              this.setState({paused: false,musicUrl: url,currentTime: responseJson.data[0].br})
            })
            .catch((error) => {
              console.error(error);
            });
     }
   }
  /*下一首*/
   _playUnder(dispatch,index,songList){

     let id = index+1 == songList.length?0:index+1

     let url = 'http://120.25.240.196:3001/song/detail?ids='+songList[id].id

     let _self = this
   fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          let data = {
            name: responseJson.songs[0].name,
            ar: responseJson.songs[0].ar[0].name,
            al:  responseJson.songs[0].al.picUrl,
            id:  responseJson.songs[0].id,
            index: id
          }
          dispatch(fooderMusic(data))

        })
        .catch((error) => {
          console.error(error);
        });
   }
  /*上一首*/
  _playUpon(dispatch,index,songList){

    let id = index == 0?songList.length-1:index-1

    let url = 'http://120.25.240.196:3001/song/detail?ids='+songList[id].id
    let _self = this
  fetch(url)
       .then((response) => response.json())
       .then((responseJson) => {
         let data = {
           name: responseJson.songs[0].name,
           ar: responseJson.songs[0].ar[0].name,
           al:  responseJson.songs[0].al.picUrl,
           id:  responseJson.songs[0].id,
           index: id
         }
         dispatch(fooderMusic(data))

       })
       .catch((error) => {
         console.error(error);
       });
  }

    render() {

      const { dispatch, songList, songPlay } = this.props

      let play
      if(!this.state.paused) {
         play =  <TouchableOpacity style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}
         onPress={()=>{this.setState({paused: true})}}>
            <Icon name="controller-paus" size={30} color="#000000" />
          </TouchableOpacity>
      } else {
          play =  <TouchableOpacity style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}
          onPress={()=>{this.setState({paused: false})}}>
             <Icon name="controller-play" size={30} color="#000000" />
           </TouchableOpacity>
      }

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

                        <Header navigation={this.props.navigation} name={songPlay.name} ar={songPlay.ar}  />

                      <LyricScroll sliderTime={this.state.sliderTime} id={songPlay.id}/>
                     <MusicSlider sliderValue={this.state.sliderValue} sliderTime={this.state.sliderTime} currentTime={this.state.currentTime} />
                     <View style={styles.songBottom}>
                     <View style={styles.songBottomLeft}>
                     <TouchableOpacity style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
                       <Icon name="cw" size={30} color="#000000" />
                     </TouchableOpacity>
                     </View>
                     <View style={styles.songBottomConter}>
                     <TouchableOpacity onPress={this._playUpon.bind(this,dispatch,songPlay.index,songList)}
                      style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
                       <Icon name="controller-jump-to-start" size={30} color="#000000" />
                     </TouchableOpacity>
                     {play}
                     <TouchableOpacity onPress={this._playUnder.bind(this,dispatch,songPlay.index,songList)}
                     style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
                       <Icon name="controller-next" size={30} color="#000000" />
                     </TouchableOpacity>
                     </View>
                     <View style={styles.songBottomRight}>
                     <ModalList/>
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
   flex: 1,
  marginTop: 15,
   alignItems: 'center',
   justifyContent: 'center'
 }
});
const select = (state) => ({
  songList: state.modalSongList,
  songPlay: state.fooderMusic,
})
export default connect(select)(VideoPlayPage)
