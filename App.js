import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import SelectUser from './app/select-user';
import Main from './app/main';

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 320,
    }
});

const slides = [
    {
        key: 'somethun',
        title: 'Title 1',
        text: 'Description.\nSay something cool',
        image: require('./assets/intro/1.jpg'),
        imageStyle: styles.image,
        backgroundColor: '#59b2ab',
    },
    {
        key: 'somethun-dos',
        title: 'Title 2',
        text: 'Other cool stuff',
        image: require('./assets/intro/2.jpeg'),
        imageStyle: styles.image,
        backgroundColor: '#febe29',
    },
    {
        key: 'somethun1',
        title: 'Rocket guy',
        text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
        image: require('./assets/intro/3.jpeg'),
        imageStyle: styles.image,
        backgroundColor: '#22bcb5',
    }
];

export default class App extends Component {
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
        console.log('test');
        //if (this.state.showRealApp) {
            return <SelectUser />;
        //} else {
            //return <AppIntroSlider slides={slides} onDone={this._onDone} />;
        //}
    }
}
