import React from 'react';
import { View, Text, Image } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import LandingPage from './LandingPage';
import Menu from './Menu';
import OrderPage from './OrderPage';
import FoodItemDetails from './FoodItemDetails';
import FoodItem from './FoodItem';

export default TabNav = TabNavigator(
    {
        Home: {
            screen: LandingPage,
            navigationOptions:{
                tabBarIcon: ({ tintColor }) => <Image source={require('../src/img/Home_Btn_nrm.png')} style={{tintColor:tintColor}}/>
            }
        },
        Menu: {
            screen: Menu,
            navigationOptions:{
                tabBarIcon: ({ tintColor }) => <Image source={require('../src/img/Menu_Btn_nrm.png')} style={{tintColor:tintColor}}/>
            }
        },
        Order: {
            screen: OrderPage,
            navigationOptions:{
                tabBarIcon: ({ tintColor }) => <Image source={require('../src/img/Order_Btn_nrm.png')} style={{tintColor:tintColor}}/>
            }
        },
    }, 
    { 
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        tabBarOptions: {
            upperCaseLabel: false,
            showIcon: true,
            showLabel: false,
            iconStyle: {
                height: 40,
                width: 40
            },
            indicatorStyle: {
                backgroundColor: 'white',
            },
            activeTintColor: '#FF8C00',
            inactiveTintColor: 'grey',
            style: {
                backgroundColor: 'white'
            }
        }   
    },  
);
