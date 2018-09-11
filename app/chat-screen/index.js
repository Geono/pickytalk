import React from 'react';
import { Platform, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import emojiUtils from 'emoji-utils';
import { Appbar } from 'react-native-paper';
import { getAvatar } from '../helper';
import SlackMessage from './SlackMessage';
import { getDb } from '../firebase/firebase';

export default class ChatScreen extends React.Component {
    state = {
        messages: [],
    };

    componentWillMount() {
        const { navigation } = this.props;
        const conversationId = navigation.getParam('conversationId');

        const query = getDb()
            .collection('conversations')
            .where('conversation_id', '==', conversationId)
            .orderBy('createdAt', 'desc')
            .limit(100);

        const chatArr = [];
        let messages;

        // 1. Get conversations
        query.get().then(results => {
            if (results.empty) {
                console.log('No history');
            } else {
                const userIdSet = new Set();
                // find conversations
                results.forEach(function (doc) {
                    const chatData = doc.data();
                    userIdSet.add(chatData.user_id);
                    chatArr.push(doc.data());
                });

                // 2. Get participants of the conversation
                chatArr.sort((a, b) => a.createdAt - b.createdAt);
                messages = chatArr.map((chatData, index) => {
                    return {
                        _id: index,
                        text: chatData.text,
                        createdAt: chatData.createdAt.toDate(),
                        user_id: chatData.user_id
                    }
                });

                const promises = [];
                userIdSet.forEach(userId => {
                    promises.push(
                        getDb()
                            .collection('users')
                            .where('user_id', '==', userId)
                            .get());
                });
                return Promise.all(promises);
            }
        }).then(resultsList => {
            const userInfoMap = {};
            resultsList.map(results => {
                results.forEach(doc => {
                    const userInfo = doc.data();
                    userInfoMap[ userInfo.user_id ] = userInfo;
                });
            });

            // 3. Merge userinfo into messages
            messages = messages.map(message => {
                const userInfoOfMessage = userInfoMap[ message.user_id ];
                return Object.assign(message, {
                    user: {
                        _id: userInfoOfMessage.id,
                        avatar: userInfoOfMessage.avatarUrl
                    }
                })
            });

            this.setState({ messages });

        }).catch(error => {
            console.log(error);
        });
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
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
            <View style={{flex: 1}}>
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
