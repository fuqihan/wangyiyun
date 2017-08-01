import React, {Component} from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
} from 'react-native';
import Personal from "../personal/Personal.js";
import HomeTab from "./child/HomeTab";
import Dynamic from "../dynamic/Dynamic.js";
import FacebookTabBar from './child/FacebookTabBar';
import HomeFooter from '../Footer/Footer.js';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {
    Button,
    Text,
    Container,
    Card,
    CardItem,
    Body,
    Content,
    Header,
    Title,
    Footer,
    FooterTab,
    Left,
    Right
} from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';
import store from '../../store/index.js'
import { fooderMusic } from '../../action/actions.js'
class HomeScreen extends Component {
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
        return (  <Container style={{position: 'relative'}}>
                {/*中间三个导航*/}
                <ScrollableTabView
                    style={{ flex: 1 }}
                    initialPage={1}
                    renderTabBar={() => <FacebookTabBar />}
                >
                    <ScrollView tabLabel="ios-musical-notes" style={styles.tabView}>
                        <Personal/>
                    </ScrollView>
                    <ScrollView tabLabel="ios-home" style={styles.tabView}>
                        <HomeTab navigation={this.props.navigation} />
                    </ScrollView>
                    <ScrollView tabLabel="md-people" style={styles.tabView}>
                        <Dynamic/>
                    </ScrollView>
                </ScrollableTabView>
            {/*左侧抽屉*/}
            <Button style={{ position: 'absolute',
                top: 0,backgroundColor: '#EE2C2C',
                left: 0,}}
                    transparent
                    onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                <Icon name="ios-menu" size={30} color="#FFFFFF" />
            </Button>
            {/*右侧搜索*/}
            <Button style={{ position: 'absolute',
                top: 0,backgroundColor: '#EE2C2C',
                right: 0,}}
                    transparent
                    onPress={() => this.props.navigation.navigate("Search")}>
                <Icon name="ios-search" size={30} color="#FFFFFF" />
            </Button>
            {/*底部音乐*/}
            <HomeFooter playMusic={this.state.playMusic} navigation={this.props.navigation} />
        </Container> )
    }
};

const styles = StyleSheet.create({
    tabView: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.01)',
    },
    card: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.1)',
        height: 150,
        shadowColor: '#ccc',
        shadowOffset: { width: 2, height: 2, },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
});
export default HomeScreen;
