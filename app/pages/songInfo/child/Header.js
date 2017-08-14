
import React, {Component} from 'react';
import {Text, Navigator, StyleSheet, View, TouchableOpacity,ScrollView,Platform,PixelRatio } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


class VideoPlayPage extends Component {
    constructor(props) {
        super(props)
        this.state = {

      }

    }



    render() {
        return (

  <View style={styles.header}>
  <View style={styles.headerLeft}>
  <TouchableOpacity style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}
  onPress={() => this.props.navigation.navigate("Home")}>
    <Icon name="arrow-left" size={30} color="#000000" />
  </TouchableOpacity>
  </View>
  <View style={styles.headerCenter}>
  <View style={{height: 50,justifyContent: 'center',alignItems: 'center'}}>
  <Text style={{fontSize: 18}} numberOfLines={1}>{this.props.name}</Text>
  <Text style={{fontSize: 12}}>{this.props.ar}</Text>
  </View>
  </View>
  <View style={styles.headerRight}>
  <TouchableOpacity style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
    <Icon name="share-variant" size={30} color="#000000" />
  </TouchableOpacity>
  </View>
  </View>

        )
    }

}

const styles = StyleSheet.create({
    header: {
      height: 50,
      flexDirection: 'row',
      borderBottomColor: '#000000',

      borderWidth: (Platform.OS==='ios' ? 0.6 : 1.0) / PixelRatio.get(),
    },
    headerLeft:{
      flex: 1,
    },
    headerCenter: {
      flex: 5,

    },
    headerRight: {
      flex: 1
    }
});

export default VideoPlayPage
