
import React, {Component} from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
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
    FooterTab
} from "native-base";
import ModalList from '../../component/ModalList.js';
import HomeFooterSound from '../../component/HomeFooterSound.js'
import store from '../../store/index.js'
import { connect } from 'react-redux'
import { fooderMusic } from '../../action/actions.js'
class HomeFooter extends Component {
  constructor(props) {
    super(props);
}
    render() {
      const { dispatch, music } = this.props
    return ( <Footer style={styles.footer}>
        <FooterTab>
            <TouchableOpacity style={styles.footerLeft}
             onPress={() => this.props.navigation.navigate("SongInfo",{info:{
               name: music.name,
               ar: music.ar,
               id: music.id
             }})}>
                <Image
                    source={{
                        uri: music.al
                    }}
                    style={{
                        height: 35,
                        width: 35,
                        position: 'absolute',
                        top: 5,
                        left: 10
                    }}/>
                <Text style={{fontSize: 12,
                    position: 'absolute',
                    top: 4,
                    left: 53}}>{music.name}</Text>
                <Text style={{
                    fontSize: 12,position: 'absolute',
                    top: 24,
                    left: 53}}>{music.ar}</Text>
            </TouchableOpacity>
            <View style={styles.footerRight}>
                <HomeFooterSound musicId={music.id}/>
                <ModalList/>
            </View>
        </FooterTab>
    </Footer> )
}};

const styles = ({
    footer: {
        height: 45,
        backgroundColor: '#ffffff',
        opacity: 0.9
    },
    footerLeft: {
        flex: 3,
        backgroundColor: '#ffffff',
        position: 'relative'
    },
    footerRight: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
         flexDirection: 'row',
    }
});
const select = (state) => ({
  music: state.fooderMusic
})
export default connect(select)(HomeFooter)
