import React, { Component } from "react";
import { View,Text,StyleSheet,Dimensions, TouchableOpacity,Platform, PixelRatio} from "react-native";
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Form, Item, Label, Input } from 'native-base';
import store from '../../store/index.js'
import { loginInfo } from '../../action/actions.js'
export default class login extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  constructor(props) {
      super(props)
      this.state = {
        userName: '',
        passwprd: '',
    }

  }
    _loginSub() {
    //  alert(this.state.passwprd);
    let url = 'http://120.25.240.196:3001/login/cellphone?phone='+this.state.userName+'&password='+this.state.password
    fetch(url)
         .then((response) => response.json())
         .then((responseJson) => {
           let user = {
             backgroundUrl: responseJson.profile.backgroundUrl,
             nickname: responseJson.profile.nickname,
             userId: responseJson.account.id,
           }
           console.log(user)
             store.dispatch(loginInfo(user))

            this.props.navigation.navigate("Home")
         })
         .catch((error) => {
           console.error(error);
         });

  }
  _defaultSub(){
    let user = {
      backgroundUrl: 'http://p1.music.126.net/bmA_ablsXpq3Tk9HlEg9sA==/2002210674180203.jpg',
      nickname: 'oy123',
      userId: 3778678,
    }
    console.log(user)
      store.dispatch(loginInfo(user))

     this.props.navigation.navigate("Home")
  }

    render () {
        return (
          <Container>
     <Header style={{backgroundColor: '#EE2C2C'}}>
       <Left>
         <Button transparent  onPress={() => this.props.navigation.goBack()}>
           <Icon name='arrow-back' />
         </Button>
       </Left>
       <Body>
         <Title>手机号登录</Title>
       </Body>
       <Right/>

     </Header>
     <Content>
     <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
         <Text style={{color: 'black',fontSize: 18,marginTop: 20}}>请输入网易云音乐账号</Text>
    </View>
     <Form style={{marginTop: 20}}>
       <Item fixedLabel>
         <Label>请输入手机号</Label>
         <Input onChangeText={(text) => this.setState({userName: text})} />
       </Item>
       <Item fixedLabel last>
         <Label>请输入密码</Label>
         <Input  onChangeText={(password) => this.setState({password})} secureTextEntry={true} />
       </Item>
     </Form>
     <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
     <TouchableOpacity style={styles.loginBtn} onPress={this._loginSub.bind(this)}>
         <Text style={{color: 'white'}}>登陆</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.loginBtn} onPress={this._defaultSub.bind(this)}>
        <Text style={{color: 'white'}}>默认账号登陆</Text>
   </TouchableOpacity>
    </View>
        </Content>
   </Container>
        );
    }
}

const styles = StyleSheet.create({
    personal: {
        flex: 1,
        height: Dimensions.get('window').height-45,
    },
    loginBtn: {
      width: 300,
      height: 45,
      borderRadius: 15,
      marginTop: 20,
      borderWidth: (Platform.OS==='ios' ? 1.0 : 1.5) / PixelRatio.get(),
      backgroundColor: '#EE2C2C',
      justifyContent: 'center',
      alignItems: 'center'
    }
})
