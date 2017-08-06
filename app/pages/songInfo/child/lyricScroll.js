
import React, {Component} from 'react';
import {Text, Navigator, StyleSheet, View, TouchableOpacity,ScrollView, } from 'react-native';


let y = 0
class lyricScroll extends Component {
    constructor(props) {
        super(props)
        this.state = {
        musiclyric: []
      }

    }

    componentWillReceiveProps(nextProps){

      let a = Math.floor(nextProps.sliderTime)

      this.state.musiclyric.map((tab, i) => {
         if(!tab.dis){
           if(a == tab.sec){

             tab.dis = true
             y+=30
             this.refs.scroll.scrollTo({x: 0, y: y, animated: true})
          }
         }else {
           return
         }
      })
    }
    componentWillMount() {
      let url = "http://120.25.240.196:3001/lyric?id=" + this.props.id
      let lyrObj = []
        fetch(url)
             .then((response) => response.json())
             .then((responseJson) => {
               let lryAry = responseJson.lrc.lyric.split('\n')   //按照换行符切数组
                 
                       lryAry.forEach(function (val, index) {
                           var obj = {}   //用于存放时间
                           val = val.replace(/(^\s*)|(\s*$)/g, '')    //正则,去除前后空格
                           let indeofLastTime = val.indexOf(']')  // ]的下标
                           let timeStr = val.substring(1, indeofLastTime) //把时间切出来 0:04.19
                           let minSec = ''
                           let timeMsIndex = timeStr.indexOf('.')  // .的下标
                           if (timeMsIndex !== -1) {
                               //存在毫秒 0:04.19
                               minSec = timeStr.substring(1, val.indexOf('.'))  // 0:04.
                           } else {
                               //不存在毫秒 0:04
                               minSec = timeStr

                           }
                           let curTime = minSec.split(':')  // [0,04]
                           let min = parseInt(curTime[0])   //分钟 0
                           obj.sec =min*60 + parseInt(curTime[1])   //秒钟 04
                           obj.txt = val.substring(indeofLastTime + 1, val.length) //歌词文本: 留下唇印的嘴
                           obj.txt = obj.txt.replace(/(^\s*)|(\s*$)/g, '')
                           obj.dis = false

                           if (obj.txt.length > 0) {
                               lyrObj.push(obj)
                           }
                       })
                       this.setState({musiclyric: lyrObj})

             })
             .catch((error) => {
               console.error(error);
             });
    }

    render() {
      const { dispatch, music } = this.props

        return (
            <View style={{flex: 1}}>

                      <View style={{height: 440}}>
                      <ScrollView  ref='scroll'>
                      <View ref='lyricHeight'
                      style={{justifyContent: 'center',alignItems: 'center'}}>
                      <Text style={{fontSize: 16,height: 240}}></Text>
                      {this.state.musiclyric.map((tab, i) => {
                          return <Text key={i} style={{fontSize: 16,height: 30}}>{tab.txt}</Text>;
                      })}
                      </View>
                      </ScrollView>
                      </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({

});

export default lyricScroll
