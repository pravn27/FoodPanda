import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';


import MenuHeader from './MenuHeader';
import MenuImageSlider from './MenuImageSlider';
import FoodList from './FoodList';

export default class Menu extends Component{
    render(){
        return(
            <View style={styles.container}>
                <MenuHeader/>
                <ScrollView>
                    <MenuImageSlider/>
                    <FoodList/>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column'
    }
})