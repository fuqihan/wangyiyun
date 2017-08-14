
import React, {Component} from 'react';
import {Text, Navigator, StyleSheet, View, TouchableOpacity, Slider } from 'react-native';

class VideoPlayPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
        sliderValue: 0,
      }

    }


     //把秒数转换为时间类型
    formatTime(time) {
       // 71s -> 01:11

       let min = Math.floor(time / 60)
       let second = time - min * 60
       min = min >= 10 ? min : '0' + min
       second = Math.floor(second)
       second = second >= 10 ? second : '0' + second
       return min + ':' + second
   }

   componentWillReceiveProps(nextProps){
     this.setState({
       sliderValue: nextProps.sliderValue,
       sliderTime: nextProps.sliderTime
     })
   }
    render() {
      const currentTime =  this.props.currentTime
        return (
            <View style={styles.musicSlider}>
              <Text style={styles.sliderText}>{this.formatTime(this.state.sliderTime)}</Text>
              <Slider value={this.state.sliderValue} style={styles.slider}/>
              <Text style={styles.sliderText}>{this.formatTime(currentTime/1000)}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
     musicSlider: {
       height: 30,
       flexDirection: 'row',
       alignItems: 'center',
       marginBottom: 10

     },
    slider: {
      flex: 6,
      height: 30,
    },
    sliderText: {
      flex: 1,
    }
});

export default VideoPlayPage
