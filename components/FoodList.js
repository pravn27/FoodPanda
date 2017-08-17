import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import FoodItem from './FoodItem';
import FoodData from '../src/MenuItems.json';

export default class FoodList extends Component{
    render(){
        const foodItemsDisplay = FoodData.map((item) => {
                                    return <FoodItem key={item.key} item={item}/>
                                });
                                
        return(
            <View style={styles.MainContainer}>
                {foodItemsDisplay}
            </View>   
        )
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 2
    }
})