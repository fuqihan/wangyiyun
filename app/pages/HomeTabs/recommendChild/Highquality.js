import React, { Component } from "react";
import { View,Text,StyleSheet,Dimensions, Image,TouchableOpacity } from "react-native";
export default class Highquality extends Component {
  constructor(props) {
      super(props)
      this.state = {
      highqualityList: []
    }

  }
  componentWillMount(){
    let url = 'http://120.25.240.196:3001/top/playlist/highquality?limit=12'
    fetch(url)
         .then((response) => response.json())
         .then((res) => {
           let list = res.playlists

          this.setState({
             highqualityList: list
          })
         })
         .catch((error) => {
           console.error(error);
         });
  }
  _onHighquality(i){
    let a= this.state.highqualityList
    let songList = {
      id: a[i].id,
      imgUrl: a[i].coverImgUrl,

    }
    
     this.props.navigation.navigate("HighqualityList",{ songList })
  }
    render () {

        return (
          <View style={{flex: 1}}>
          <View style={{height: 40}}>
          <Text style={{fontSize: 16,marginTop: 10,marginLeft: 20}}>推荐歌单</Text>

          </View>
          <View style={styles.highquality}>
          {this.state.highqualityList.map((tab, i) => {
              return   <TouchableOpacity key={i} style={styles.playListView} onPress={this._onHighquality.bind(this,i)}>
                <Image
                        style={{width: Dimensions.get('window').width/3-5,height: 120}}
                        source={{uri: tab.coverImgUrl}}
                      />
                <Text style={{fontSize: 12,paddingLeft: 5,paddingRight: 5}}>{tab.name}</Text>

                </TouchableOpacity>;
          })}

          </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    highquality: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    playListView: {
      width:  Dimensions.get('window').width/3,
      height: 170,
      alignItems: 'center',
      overflow: 'hidden'
    }
})
