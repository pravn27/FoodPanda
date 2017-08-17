import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class LandingPageText extends Component{
    render(){
        return(
           <View style={styles.viewContainer}>
            <Text style={styles.mainText1}> 
                Food
            </Text>
            <Text style={styles.mainText2}> 
                Panda
            </Text>
            <Text style={styles.subText}> 
                WHAT A TWIST.
            </Text>
            <Text style={styles.description}>
                The Panda, the iconic long, slim slick of bread, has traditionality one of the most french culture.
            </Text>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1, 
        justifyContent: 'center', 
        paddingLeft: '6%', 
        paddingRight: '30%' 
    },
    mainText1: {
        color: 'white',
        fontFamily: 'serif',
        fontSize: 30,
        fontWeight: 'bold',
    },
    mainText2: {
        color: 'white',
        fontFamily: 'serif',
        fontSize: 40,
        fontWeight: 'bold',
        paddingBottom: 5 
    },
    subText: {
        color: 'white',
        fontSize: 13,
        paddingBottom: 5
    },
    description:{
        color: 'white',
        fontSize: 11
    }
})

