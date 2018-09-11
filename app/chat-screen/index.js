import React from 'react';
import { Platform, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import emojiUtils from 'emoji-utils';
import { Appbar } from 'react-native-paper';
import Chatkit from "@pusher/chatkit";
import { getAvatar } from '../helper';
import SlackMessage from './SlackMessage';
import { getDb } from '../firebase/firebase';

const CHATKIT_TOKEN_PROVIDER_ENDPOINT = 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a687febe-9212-453c-bc99-909bf4c4db90/token';
const CHATKIT_INSTANCE_LOCATOR = 'v1:us1:a687febe-9212-453c-bc99-909bf4c4db90';
let CHATKIT_ROOM_ID;
let CHATKIT_USER_NAME;

export default class ChatScreen extends React.Component {
    state = {
        messages: [],
    };

    componentWillMount() {
        const { navigation } = this.props;
        CHATKIT_USER_NAME = this.props.screenProps.userInfo.user_id;
        let messages;

        // 4. Setup Chat
        // This will create a `tokenProvider` object. This object will be later used to make a Chatkit Manager instance.
        CHATKIT_ROOM_ID = navigation.getParam('roomId');
        const tokenProvider = new Chatkit.TokenProvider({
            url: CHATKIT_TOKEN_PROVIDER_ENDPOINT
        });

        // This will instantiate a `chatManager` object. This object can be used to subscribe to any number of rooms and users and corresponding messages.
        // For the purpose of this example we will use single room-user pair.
        const chatManager = new Chatkit.ChatManager({
            instanceLocator: CHATKIT_INSTANCE_LOCATOR,
            userId: CHATKIT_USER_NAME,
            tokenProvider: tokenProvider
        });

        // In order to subscribe to the messages this user is receiving in this room, we need to `connect()` the `chatManager` and have a hook on `onNewMessage`. There are several other hooks that you can use for various scenarios. A comprehensive list can be found [here](https://docs.pusher.com/chatkit/reference/javascript#connection-hooks).
        chatManager.connect().then(currentUser => {
            this.currentUser = currentUser;

            this.currentUser.fetchMessages({
                roomId: CHATKIT_ROOM_ID,
                direction: 'newer',
                limit: 100,
            }).then(fetchedMessages => {

                const userIdSet = new Set();

                messages = fetchedMessages.map(fetched => {
                    userIdSet.add(fetched.senderId); // store user id for later use
                    return {
                        _id: fetched.id,
                        text: fetched.text,
                        createdAt: new Date(fetched.createdAt),
                        user: {
                            name: fetched.senderId
                        }
                    }
                });

                const promises = [];

                userIdSet.forEach(userId => {
                    promises.push(
                        getDb().collection('users')
                            .where('user_id', '==', userId)
                            .get());
                });

                return Promise.all(promises);

            }).then(resultsList => {
                const userInfoMap = {};

                resultsList.map(results => {
                    results.forEach(doc => {
                        const userInfo = doc.data();
                        userInfoMap[ userInfo.user_id ] = userInfo;
                    });
                });

                let lastMessageId = -1;
                messages.forEach(message => {
                    lastMessageId = message._id;
                    const userInfoData = userInfoMap[ message.user.name ];
                    Object.assign(message.user, {
                        _id: userInfoData.id,
                        avatar: userInfoData.avatarUrl
                    })
                });

                messages.reverse();

                this.setState({ messages });

                this.currentUser.subscribeToRoom({
                    roomId: CHATKIT_ROOM_ID,
                    hooks: {
                        onNewMessage: this.onReceive.bind(this)
                    },
                    messageLimit: 0
                });
            });
        });
    }

    onSend(messages = []) {
        messages.forEach(message => {
            this.currentUser.sendMessage({
                text: message.text,
                roomId: CHATKIT_ROOM_ID
            });
        });
    }

    onReceive(data) {
        const { id, senderId, text, createdAt } = data;
        const incomingMessage = {
            _id: id,
            text: text,
            createdAt: new Date(createdAt),
            user: {
                name: senderId
            }
        };

        getDb().collection('users').where('user_id', '==', senderId).get()
            .then(results => {

                // 1. fetch user data and add it into message
                results.forEach(doc => {
                    const userInfoData = doc.data();
                    Object.assign(incomingMessage.user, {
                        _id: userInfoData.id,
                        avatar: userInfoData.avatarUrl
                    });
                });

                // 2. append it to message
                this.setState(previousState => ({
                    messages: GiftedChat.append(previousState.messages, incomingMessage)
                }));
            });
    }

    static renderMessage(props) {
        const { currentMessage: { text: currText } } = props;

        let messageTextStyle;

        // Make "pure emoji" messages much bigger than plain text.
        if (currText && emojiUtils.isPureEmojiString(currText)) {
            messageTextStyle = {
                fontSize: 28,
                // Emoji get clipped if lineHeight isn't increased; make it consistent across platforms.
                lineHeight: Platform.OS === 'android' ? 34 : 30,
            };
        }

        return (
            <SlackMessage {...props} messageTextStyle={messageTextStyle} />
        );
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Appbar.Header>
                    <Appbar.BackAction
                        onPress={() => this.props.navigation.goBack()}
                    />
                    <Appbar.Content
                        title='샘플이다'
                        subtitle='this is just a sample'
                    />
                </Appbar.Header>
                <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    alwaysShowSend
                    isAnimated
                    showUserAvatar
                    user={{
                        _id: this.props.screenProps.userInfo.id,
                        _avatar: getAvatar('haha')
                    }}
                    renderMessage={this.renderMessage}
                />
            </View>
        );
    }
}
