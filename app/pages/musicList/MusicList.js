import React, { Component } from "react";
import { View,Text,StyleSheet,Dimensions, ScrollView, Platform, PixelRatio, Image, TouchableOpacity } from "react-native";
import { Container, Header, Left, Body, Right,Icon, Button, Title } from 'native-base';
import store from '../../store/index.js'
import { fooderMusic } from '../../action/actions.js'
export default class musicList extends Component {
  constructor(props) {
      super(props)
      this.state = {
      itemList: []
    }
  }
    componentDidMount(){
      let url = 'http://music.163.com/api/playlist/detail?id=3778678&updateTime=-1'
      fetch(url)
           .then((response) => response.json())
           .then((res) => {
             let songs = res.result.tracks
				
				    this.setState({
					     itemList: songs
				    })
           })
           .catch((error) => {
             console.error(error);
           });
    }
    _itemPlay(id){
        let url = 'http://120.25.240.196:3001/song/detail?ids='+id
      fetch(url)
           .then((response) => response.json())
           .then((responseJson) => {
             let data = {
               name: responseJson.songs[0].name,
               ar: responseJson.songs[0].ar[0].name,
               al:  responseJson.songs[0].al.picUrl,
               id:  responseJson.songs[0].id,
             }
             store.dispatch(fooderMusic(data))
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
          <Title>{this.props.navigation.state.params.head}</Title>
        </Body>

      </Header>
      <Image
          style={{height: 160,marginTop: -10}}
          source={{uri: 'http://ospevghkp.bkt.clouddn.com/26a2476dc344c27ac3e7670c9df711b2.jpg'}}
        />
      <ScrollView style={styles.ScrollView}>
      {this.state.itemList.map((tab, i) => {
          return <TouchableOpacity key={i} style={styles.itemList} onPress={this._itemPlay.bind(this,tab.id)}>
              <Text style={{position: 'absolute', top: 5, left: 20,fontSize: 18}}>{tab.name}</Text>
              <Text style={{position: 'absolute', top: 32, left: 20, fontSize: 16}}>{tab.artists[0].name}</Text>
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
