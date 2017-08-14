import React, { Component } from "react";
import { View,Text,StyleSheet,Dimensions, ScrollView, Platform, PixelRatio, Image, TouchableOpacity } from "react-native";
import { Container, Header, Left, Body, Right,Icon, Button, Title } from 'native-base';
import store from '../../store/index.js'
import { fooderMusic,modalSongList } from '../../action/actions.js'
export default class highqualityList extends Component {
  constructor(props) {
      super(props)
      this.state = {
      itemList: []
    }
  }
    componentWillMount(){
      let url = 'http://120.25.240.196:3001/playlist/detail?id='+this.props.navigation.state.params.songList.id
      fetch(url)
           .then((response) => response.json())
           .then((res) => {
             let songs = res.playlist.tracks
             songs.length = 30

				    this.setState({
					     itemList: songs
				    })
           })
           .catch((error) => {
             console.error(error);
           });
    }
    _itemPlay(id,index){
        let url = 'http://120.25.240.196:3001/song/detail?ids='+id
        let _self = this
      fetch(url)
           .then((response) => response.json())
           .then((responseJson) => {
             let data = {
               name: responseJson.songs[0].name,
               ar: responseJson.songs[0].ar[0].name,
               al:  responseJson.songs[0].al.picUrl,
               id:  responseJson.songs[0].id,
               index: index
             }
             store.dispatch(fooderMusic(data))
             store.dispatch(modalSongList(_self.state.itemList))
           })
           .catch((error) => {
             console.error(error);
           });
    }
    render () {

        return (
          <Container>
      <Header style={{backgroundColor: '#EE2C2C',height: 45}}>
        <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>歌单</Title>
        </Body>

      </Header>
      <Image
          style={{height: 160,marginTop: -10}}
          source={{uri: this.props.navigation.state.params.songList.imgUrl}}
        />
      <ScrollView style={styles.ScrollView}>
      {this.state.itemList.map((tab, i) => {
          return <TouchableOpacity key={i} style={styles.itemList} onPress={this._itemPlay.bind(this,tab.id,i)}>
              <Text style={{position: 'absolute', top: 5, left: 20,fontSize: 18}}  numberOfLines={1}>{tab.name}</Text>
              <Text style={{position: 'absolute', top: 32, left: 20, fontSize: 16}}  numberOfLines={1}>{tab.ar[0].name}</Text>
          </TouchableOpacity>;
      })}
      </ScrollView>
    </Container>

        );
    }
}

const styles = StyleSheet.create({
    ScrollView: {

    },
    itemList: {
      height: 55,
      borderColor: 'black',
      borderWidth: (Platform.OS==='ios' ? 0.6 :1.1) / PixelRatio.get(),
      position: 'relative',
    }
})
