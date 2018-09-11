import * as React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { List } from 'react-native-paper';
import { createStackNavigator } from 'react-navigation';
import ChatScreen from '../chat-screen';
import Header from '../header';
import { getDb } from '../firebase/firebase';

class ChatList extends React.Component {
    static navigationOptions = {
        header: {
            visible: false,
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        const conversationsList = getDb().collection('conversations-list');
        const userInfo = this.props.screenProps.userInfo;
        conversationsList.get().then(querySnapshot => {
            var results = [];
            querySnapshot.forEach(function (doc) {
                const data = doc.data();
                if (data.user_id &&
                    data.user_id.includes(userInfo.id)) {
                    results.push(data);
                }
            });
            return results.sort((a, b) => b.upd_date - a.upd_date);
        }).then(results => {
            this.setState({ list: results });
        }).catch(function (error) {
            console.error(error);
        });
    }

    render() {
        return (
            <View>
                <Header userInfo={this.props.screenProps.userInfo} />
                {this.state.list !== null && this.state.list.map(data =>
                    (<List.Item
                        key={data.title + data.upd_date}
                        title={data.title}
                        description={data.last_sentence}
                        onPress={() => {
                            this.props.navigation.navigate('ChatScreen', {
                                conversationId: data.conversation_id
                            });
                        }}
                        left={props => <List.Icon {...props} icon="chat" />}
                    />)
                )}
            </View>
        );
    }
}

ChatList.propTypes = {
    userInfo: PropTypes.shape({
        id: PropTypes.string,
        description: PropTypes.string,
        avatarUrl: PropTypes.string,
    })
};

ChatList.defaultProps = {
    userInfo: {
        id: '',
        description: '',
        avatarUrl: '',
    }
};

const ChatStackNavigator = createStackNavigator(
    {
        ChatList: {
            screen: ChatList,
            headerMode: 'none',
            header: null,
            navigationOptions: {
                header: null
            }
        },
        ChatScreen: {
            screen: ChatScreen,
            headerMode: 'none',
            header: null,
            navigationOptions: {
                header: null
            }
        },
    },
    {
        initialRouteName: 'ChatList',
        header: null,
        headerMode: 'none',
        navigationOptions: {
            header: null
        }
    }
);

export default class ChatStack extends React.Component {
    render() {
        return (
            <ChatStackNavigator
                screenProps={{
                    userInfo: this.props.userInfo
                }}
            />
        );
    }
}
