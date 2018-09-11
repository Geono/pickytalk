import * as React from 'react';
import PropTypes from 'prop-types';
import { withTheme, BottomNavigation, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Dashboard from '../dashboard';
import ChatList from '../chat-list';

class Main extends React.Component {

    state = {
        index: 0,
        routes: [
            { key: 'dashboard', title: '대시보드', icon: 'dashboard', color: 'white' },
            { key: 'chat', title: '채팅', icon: 'chat', color: 'white' },
        ],
    };

    _handleIndexChange = index => this.setState({ index });

    _renderScene = BottomNavigation.SceneMap({
        dashboard: () => <Dashboard userInfo={this.props.userInfo} />,
        chat: () => <ChatList userInfo={this.props.userInfo} />,
    });

    render() {

        let theme = {
            ...DefaultTheme
        };

        if (this.props.userInfo.user_id === 'ottugi0') {
            Object.assign(theme, {
                colors: {
                    ...DefaultTheme.colors,
                    primary: '#febe29',
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
    userInfo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        user_id: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        avatarUrl: PropTypes.string.isRequired,
    }).isRequired
};


export default withTheme(Main);