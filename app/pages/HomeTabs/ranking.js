import React, { Component } from "react";
import { View,Text,StyleSheet,Dimensions } from "react-native";
export default class personal extends Component {

    render () {

        return (
            <View style={styles.personal}>
                <Text style={{flex: 1}}>123</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    personal: {
        flex: 1,
        height: Dimensions.get('window').height-45,

    }
})
