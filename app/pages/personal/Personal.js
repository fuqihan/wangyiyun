import React, { Component } from "react";
import { View,Text,StyleSheet,Dimensions } from "react-native";
export default class personal extends Component {

    render () {
        return (
            <View style={styles.personal}>
                <Text style={{flex: 1}}>当前屏幕高度：{Dimensions.get('window').height-100}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    personal: {
        flex: 1,
        height: Dimensions.get('window').height-113,
        backgroundColor: 'blue'
    }
})
