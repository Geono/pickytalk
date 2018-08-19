import React from 'react';
import store from './app/store';
import Home from './app/home';
import { Provider } from 'react-redux';
import { StyleSheet } from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Home />
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
