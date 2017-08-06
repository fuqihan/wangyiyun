import React from 'react'
import {
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native'
import { Container, Content, Spinner } from 'native-base';
import Swiper from 'react-native-swiper'

var styles = {
  swiper: {
    width: Dimensions.get('window').width,
    height: 135,
  },
  slide1: {
    width: Dimensions.get('window').width,
    height: 135,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  imgs: {
    width: Dimensions.get('window').width,
    height: 135,
  }
}
export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {swImgs: false}
}
  componentDidMount() {
    fetch('http://120.25.240.196:3001/banner')
         .then((response) => response.json())
         .then((responseJson) => {
           this.setState({swImgs: responseJson.banners})
         })
         .catch((error) => {
           console.error(error);
         });
  }
  render () {
    if(!this.state.swImgs) {
      return  <Container>
        <Content>
          <Spinner color='red' />
        </Content>
      </Container>
    } else {
    

      return (<Swiper style={styles.swiper} height={135}
        width={Dimensions.get('window').width} showsButtons autoplay autoplayTimeout={20}>
           {this.state.swImgs.map((item, i) => {return <View key={i}>
             <Image
                 square
                 style={styles.imgs}
                 source={{
                     uri: item.pic
                 }}
             /></View>})}
      </Swiper>)

    }

  }
}
