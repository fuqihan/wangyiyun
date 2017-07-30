import React, { Component } from "react";
import { View,Text,StyleSheet,Dimensions, TouchableOpacity } from "react-native";
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Form, Item, Label, Input } from 'native-base';
export default class login extends Component {

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
     <Form style={{marginTop: 20}}>
       <Item fixedLabel>
         <Label>请输入手机号</Label>
         <Input />
       </Item>
       <Item fixedLabel last>
         <Label>请输入密码</Label>
         <Input />
       </Item>
     </Form>
     <TouchableOpacity style={styles.loginBtn} >
         <Text style={{color: 'black'}}>夜间模式</Text>
    </TouchableOpacity>
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
      width: 200,
      height: 100,
      justifyContent: 'center',
      alignItems: 'center'
    }
})
