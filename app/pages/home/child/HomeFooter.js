
import React, {Component} from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Image,
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
import ModalList from '../../../component/ModalList.js';
import HomeFooterSound from '../../../component/HomeFooterSound.js'
import store from '../../../store/index.js'

export default class HomeFooter extends Component {
  constructor(props) {
    super(props);
}
    render() {
    return ( <Footer style={styles.footer}>
        <FooterTab>
            <View style={styles.footerLeft}>
                <Image
                    source={{
                        uri: this.props.playMusic.al
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
                    left: 53}}>{this.props.playMusic.name}</Text>
                <Text style={{
                    fontSize: 12,position: 'absolute',
                    top: 24,
                    left: 53}}>{this.props.playMusic.ar}</Text>
            </View>
            <View style={styles.footerRight}>
                <HomeFooterSound musicId={this.props.playMusic.id}/>
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
