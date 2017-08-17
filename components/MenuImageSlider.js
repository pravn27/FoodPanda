import React, { Component } from 'react';
import ImageSlider from 'react-native-image-slider';

export default class MenuImageSlider extends Component{
    constructor(props) {
        super(props);

        this.state = {
            position: 1,
            interval: null
        };
    }
     
    componentWillMount() {
        this.setState({interval: setInterval(() => {
            this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
        }, 2000)});
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render(){
        return(
            <ImageSlider images={[
                require('../src/img/Slider_Image1.png'),
                require('../src/img/Slider_Image2.png'),
                require('../src/img/Slider_Image3.png')
            ]}
            position={this.state.position}
            onPositionChanged={position => this.setState({position})}
            />
        )
    }    
}