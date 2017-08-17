import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class MenuHeader extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={{width:'20%'}}> 
                    <Text style={{fontSize: 10, color: 'white'}}>We are Happy to serve you!</Text>
                </View>
                <Text style={styles.titleStyle}>Menu</Text>
                <View style={{width:'20%', flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Image source={require('../src/img/Cart.png')}/>
                    <Image source={require('../src/img/Search.png')}/>
                </View>
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#FF8C00',
        height: 50
    },
    titleStyle: {
        fontSize: 24,
        color: 'white'
    }
})