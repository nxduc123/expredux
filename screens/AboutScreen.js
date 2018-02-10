import React, { Component } from 'react';
import {View, Platform} from 'react-native';
import {STATUS_BAR_HEIGHT} from '../constants';


class AboutScreen extends Component {
    static navigationOptions  = () => ({

        title: 'About',
        headerStyle: {
            height: Platform.OS ==='android' ? 54 + STATUS_BAR_HEIGHT : 54,
            backgroundColor: '#2196F3'
        },
        headerTitleStyle: {
            marginTop : Platform.OS == 'android' ? STATUS_BAR_HEIGHT : 0,
            color : 'white'
        },
        headerLeft: <View>I</View>

    });

    render(){
        return (
            <View style={{ flex:1,backgroundColor:'#ddd'}} >
            {/* hi chord modal */}

            </View>

        );
       
    }
}

export default AboutScreen;