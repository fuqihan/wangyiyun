import React from "react";
import { AppRegistry, Image, StatusBar, StyleSheet, View, TouchableOpacity, Platform, PixelRatio, Dimensions } from "react-native";
import {
    Button,
    Text,
    Container,
    List,
    ListItem,
    Content,
} from "native-base";
const routes = ["Home", "Chat", "Profile"];
export default class SideBar extends React.Component {
    render() {
        return (
            <Container>
                <Content >
                  <View style={styles.sideLogin}>
                            <TouchableOpacity style={styles.btnDefaultStyle}
                             onPress={() => this.props.navigation.navigate("Login")}>
                                <Text style={{color: 'white'}}>立即登陆</Text>
                           </TouchableOpacity>
                  </View>
              <View style={styles.sideList}>
              <Text style={styles.sideListText}>我的消息</Text>

              <Text style={styles.sideListText}>会员中心</Text>

              <Text style={styles.sideListText}>商城</Text>
             </View>
             <View style={styles.sideBottom}>
             <TouchableOpacity style={styles.bottomBtn} >
                 <Text style={{color: 'black'}}>夜间模式</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomBtn} >
                <Text style={{color: 'black'}}>设置</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.bottomBtn} >
               <Text style={{color: 'black'}}>退出</Text>
          </TouchableOpacity>
             </View>

                </Content>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    sideLogin: {

      height: 160,
      backgroundColor: '#808080',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    sideList: {
      height: 130,
      justifyContent: 'center',
      alignItems: 'center'
    },
    sideBottom: {
      height: Dimensions.get('window').height-312,
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    bottomBtn: {
      flex: 1,
      height: 45,
      borderTopColor: '#808080',
      borderTopWidth: (Platform.OS==='ios' ? 1.0 : 1.5) / PixelRatio.get(),
      justifyContent: 'center',
      alignItems: 'center'
    },
    sideListText: {
      marginTop: 10,
      fontSize: 18,
    },

    btnDefaultStyle: {
      width: 130,
      height: 45,
      backgroundColor: 'black',
      borderRadius: 15,
      borderWidth: (Platform.OS==='ios' ? 1.0 : 1.5) / PixelRatio.get(),
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    }
});
