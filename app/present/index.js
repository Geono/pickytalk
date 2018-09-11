import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Main from '../main';

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 320,
    }
});

export default class Present extends Component {
    constructor() {
        super();
        this._onDone = this._onDone.bind(this);

    }

    componentWillMount() {
        this.setState({ showRealApp: false });
    }

    _onDone() {
        this.setState({ showRealApp: true });
    }

    render() {
        const isSeller = this.props.userInfo.user_id === 'ottugi0';
        const seller1 = require('../../assets/intro/seller1.png');
        const seller2 = require('../../assets/intro/seller2.png');
        const seller3 = require('../../assets/intro/seller3.png');
        const seller4 = require('../../assets/intro/seller4.png');
        const am1 = require('../../assets/intro/am1.png');
        const am2 = require('../../assets/intro/am2.png');
        const am3 = require('../../assets/intro/am3.png');
        const am4 = require('../../assets/intro/am4.png');

        const slides = [
            {
                key: 'somethun',
                title: 'Title 1',
                text: 'Description.\nSay something cool',
                image: isSeller ? seller1 : am1,
                imageStyle: styles.image,
                backgroundColor: !isSeller ? '#59b2ab' : '#febe29',
            },
            {
                key: 'somethun-dos',
                title: 'Title 2',
                text: 'Other cool stuff',
                image: isSeller ? seller2 : am2,
                imageStyle: styles.image,
                backgroundColor: !isSeller ? '#59b2ab' : '#febe29',
            },
            {
                key: 'somethun2',
                title: 'Rocket guy',
                text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
                image: isSeller ? seller3 : am3,
                imageStyle: styles.image,
                backgroundColor: !isSeller ? '#59b2ab' : '#febe29',
            },
            {
                key: 'somethun3',
                title: 'Rocket guy',
                text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
                image: isSeller ? seller4 : am4,
                imageStyle: styles.image,
                backgroundColor: !isSeller ? '#59b2ab' : '#febe29',
            }
        ];

        if (this.state.showRealApp) {
            return <Main userInfo={this.props.userInfo} />;
        } else {
            return (
                <AppIntroSlider
                    slides={slides}
                    onDone={this._onDone}
                    showPrevButton
                />
            );
        }
    }
}
