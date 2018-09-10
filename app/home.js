import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Home extends React.Component {

    render() {
        return <View>
            <Text>Hello world!</Text>
        </View>
    }
}


export default Home;
