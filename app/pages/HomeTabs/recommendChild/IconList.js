import React, { Component } from "react";
import { View,Text,StyleSheet,Dimensions,TouchableOpacity,Platform, PixelRatio } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
export default class personal extends Component {

    render () {
        return (
            <View style={styles.iconLis}>
            <View style={styles.iconListView}>
            <TouchableOpacity style={styles.btnDefaultStyle}  onPress={this.playSoundLooped}>
              <Icon name="md-radio" size={30} color="#880000" />
           </TouchableOpacity>
           <Text style={styles.iconLisText}>私人FM</Text>
           </View>
           <View style={styles.iconListView}>
           <TouchableOpacity style={styles.btnDefaultStyle}  onPress={this.playSoundLooped}>
             <Icon name="md-calendar" size={30} color="#880000" />
          </TouchableOpacity>
          <Text style={styles.iconLisText}>每日歌曲推荐</Text>
          </View>
          <View style={styles.iconListView}>
          <TouchableOpacity style={styles.btnDefaultStyle}  onPress={this.playSoundLooped}>
            <Icon name="md-podium" size={30} color="#880000" />
         </TouchableOpacity>
         <Text style={styles.iconLisText}>云音乐热歌榜</Text>
         </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    iconLis: {
        width: Dimensions.get('window').width,
        height: 130,
        flexDirection: 'row',
    },
    iconListView: {
      flex: 1,
     justifyContent: 'center',
     alignItems: 'center'
    },
    iconLisText: {
      fontSize: 14,
      marginTop: 5,
    },
    btnDefaultStyle: {
   width: 70,
   height: 70,
   borderColor: '#880000',
   borderRadius: 50,
   borderWidth: (Platform.OS==='ios' ? 1.0 : 1.5) / PixelRatio.get(),
   flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
 },
})
