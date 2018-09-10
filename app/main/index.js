import * as React from 'react';
import PropTypes from 'prop-types';
import { AppRegistry } from 'react-native';
import { BottomNavigation, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Dashboard from '../dashboard';
import ChatList from '../chat-list';

export default class Main extends React.Component {

    state = {
        index: 0,
        routes: [
            { key: 'dashboard', title: '대시보드', icon: 'podium', color: 'white' },
            { key: 'chat', title: '채팅', icon: 'chat', color: 'white' },
        ],
    };

    _handleIndexChange = index => this.setState({ index });

    _renderScene = BottomNavigation.SceneMap({
        dashboard: () => <Dashboard user={this.props.user} />,
        chat: () => <ChatList user={this.props.user} />,
    });

    render() {

        const theme = {
            ...DefaultTheme,
        };

        // 셀러의 경우 오렌지색
        if (this.props.user === 'seller') {
            Object.assign(theme, {
                colors: {
                    ...DefaultTheme.colors,
                    primary: 'tomato',
                    accent: 'yellow',
                },
            });
        }

        return (
            <PaperProvider theme={theme}>
                <BottomNavigation
                    navigationState={this.state}
                    onIndexChange={this._handleIndexChange}
                    renderScene={this._renderScene}
                />
            </PaperProvider>
        );
    }
}

Main.propTypes = {
    user: PropTypes.string.isRequired
};

AppRegistry.registerComponent('main', () => Main);
