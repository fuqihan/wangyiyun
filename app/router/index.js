/**
 * Created by Administrator on 2017/7/18.
 */
import React, { Component } from "react";
import {View} from "react-native";
import HomeScreen from "../pages/home/HomeScreen.js";
import Search from "../pages/search/Search";
import Login from '../pages/login/login.js'
import IconSongList from '../pages/songList/iconSongList.js'
import HighqualityList from '../pages/songList/highqualityList.js'
import SideBar from "../pages/sideBar/SideBar.js";
 import Fooder from '../pages/Footer/Footer.js'
 import SongInfo from '../pages/songInfo/SongInfo.js'
 import store from '../store/index.js'
 import { fooderMusic } from '../action/actions.js'
import { DrawerNavigator, StackNavigator  } from "react-navigation";
const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen, },
  Search: { screen: Search },
  IconSongList: { screen: IconSongList },
  HighqualityList: { screen: HighqualityList },
},
{
  navigationOptions: {
    header: null
  }
});

class InitApp extends Component {
  constructor(props) {
    super(props);
    this.state = {playMusic: ''}
}
  componentWillMount() {
    if(!store.getState().fooderMusic.id){
      fetch('http://120.25.240.196:3001/song/detail?ids=347230')
           .then((response) => response.json())
           .then((responseJson) => {

             let data = {
               name: responseJson.songs[0].name,
               ar: responseJson.songs[0].ar[0].name,
               al:  responseJson.songs[0].al.picUrl,
               id:  responseJson.songs[0].id,
               index: 0,
             }
             store.dispatch(fooderMusic(data))
           })
           .catch((error) => {
             console.error(error);
           });
    }

  }

    render() {
      const navigate = '123'
        return <View style={{flex: 1}}>
          <SimpleApp screenProps={this.props.navigation} />
          <Fooder music={this.state.playMusic} navigation={this.props.navigation} />
  </View>
    }
}
const Router = DrawerNavigator(
    {
        Home: { screen: InitApp },
        Login:  { screen: Login },
        SongInfo:  { screen: SongInfo },
    },
    {
        contentComponent: props => <SideBar {...props} />
    }
);
export default Router;
