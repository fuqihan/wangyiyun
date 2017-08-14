import React, { Component } from "react";
import { View,Text,StyleSheet,Dimensions,TextInput,TouchableOpacity,ScrollView,Platform,PixelRatio } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import store from '../../store/index.js'
import { fooderMusic,modalSongList } from '../../action/actions.js'
 class Search extends Component {
   constructor(props) {
       super(props)
       this.state = {
         text: '',
         searchList:[],

     }

   }
   _onSubmitEditing() {

     let url = 'http://120.25.240.196:3001/search?limit=20&keywords='+this.state.text
     fetch(url)
          .then((response) => response.json())
          .then((responseJson) => {
            let list = responseJson.result.songs
            console.log(list)
             this.setState({searchList: list})

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
            <View style={{flex: 1,  flexDirection: 'column'}}>
            <View style={styles.searchHeader}>
            <TouchableOpacity style={{flex: 1,  height: 40,alignItems: 'center',justifyContent: 'center'}}
            onPress={() => this.props.navigation.navigate("Home")}>
              <Icon name="arrow-left" size={30} color="#ffffff" />
            </TouchableOpacity>
            <TextInput autoFocus={true} style={styles.searchInput}  placeholderTextColor="#FFFFFF"
             onChangeText={(text) => this.setState({text})} placeholder={'搜索音乐，歌手，歌词，用户'}
              value={this.state.text} onSubmitEditing={this._onSubmitEditing.bind(this)}  />
            </View>
            <ScrollView style={styles.searchScrollView}>
            {this.state.searchList.map((tab, i) => {
                return <TouchableOpacity key={i} style={styles.itemList} onPress={this._itemPlay.bind(this,tab.id,i)}>
                    <Text style={{position: 'absolute', top: 5, left: 20,fontSize: 18}}  numberOfLines={1}>{tab.name}</Text>
                    <Text style={{position: 'absolute', top: 32, left: 20, fontSize: 16}}  numberOfLines={1}>{tab.artists[0].name}</Text>
                </TouchableOpacity>;
            })}
            </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchHeader: {
        height: 40,
        flexDirection: 'row',
        backgroundColor: '#EE2C2C'
    },
    searchInput: {
      flex: 5,
      fontSize: 18,
      height: 40,
      marginRight: 10,
      color: '#ffffff',
      borderColor: '#ffffff'

    },
    searchScrollView: {
    flex: 4
    },
    itemList: {
      height: 55,
      borderColor: 'black',
      borderWidth: (Platform.OS==='ios' ? 0.6 :1.1) / PixelRatio.get(),
      position: 'relative',
    }
})
export default Search
