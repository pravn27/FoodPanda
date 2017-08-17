import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

export default class FoodItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            DeviceWidth: '',
        }
    }

    getWidth(){
        if(Dimensions.get('window').width > 0 && Dimensions.get('window').width <= 360){
            this.setState({ DeviceWidth : 1})
        }
        else if(Dimensions.get('window').width > 360 && Dimensions.get('window').width <= 640 ){
            this.setState({ DeviceWidth : 2})
        }
    }

    componentWillMount(){
        this.interval = setInterval(() => this.getWidth(), 500);
    }

    render(){
        const styles = StyleSheet.create({
            container: {
                margin: 2,
                width: Dimensions.get('window').width/this.state.DeviceWidth - 6,
                borderWidth: 1,
                borderRadius: 2,
                borderColor: '#ddd',
                borderBottomWidth: 0,
            }
        })

        return(
                <View style={styles.container}>
                    <TouchableOpacity>
                    <Image style={{width: null}} source={require('../src/img/foodItem/imgmenu1.png')}/>
                    <View style={{padding: '3%', width: '130%'}}>
                        <Text style={{color: 'black'}}>{this.props.item.hotelName}</Text>
                        <Text style={{fontSize: 12}}>{this.props.item.location}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: '5%'}}>
                            <Text style={{color:'#FF8C00'}}>{this.props.item.status}</Text>
                            <View>
                                <Text style={{color:'#FF8C00'}}>{this.props.item.rating}
                                <Image source={require('../src/img/star.png')} style={{width: 35, height: 35}}/>                                    </Text>
                            </View>
                        </View>
                    </View>
                    </TouchableOpacity>
                </View>   
        )
    }
}