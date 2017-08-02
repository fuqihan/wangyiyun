/**
 * Created by Administrator on 2017/7/18.
 */
import React, { Component } from "react";
import {View} from "react-native";
import HomeScreen from "../pages/home/HomeScreen.js";
import MusicView from "../pages/musicView/MusicView";
import Search from "../pages/search/Search";
import Login from '../pages/login/login.js'
import MusicList from '../pages/musicList/MusicList.js'
import SideBar from "../pages/sideBar/SideBar.js";
 import Fooder from '../pages/Footer/Footer.js'
 import store from '../store/index.js'
 import { fooderMusic } from '../action/actions.js'
import { DrawerNavigator, StackNavigator  } from "react-navigation";
const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen, },
  MusicView: { screen: MusicView },
  Search: { screen: Search },
  MusicList: { screen: MusicList },
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
  componentDidMount() {
    if(!store.getState().fooderMusic.id){
      fetch('http://120.25.240.196:3001/song/detail?ids=347230')
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

  }

    render() {
      const navigate = '123'
        return <View style={{flex: 1}}>
          <SimpleApp screenProps={this.props.navigation} />
          <Fooder music={this.state.playMusic}  />
  </View>
    }
}
const Router = DrawerNavigator(
    {
        Home: { screen: InitApp },
        Login:  { screen: Login },
    },
    {
        contentComponent: props => <SideBar {...props} />
    }
);
export default Router;
