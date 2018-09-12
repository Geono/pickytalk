import React from 'react';
import { Platform, View, Linking } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import emojiUtils from 'emoji-utils';
import { Appbar } from 'react-native-paper';
import Chatkit from "@pusher/chatkit";
import { Dialogflow_V2 } from 'react-native-dialogflow';
import { getAvatar } from '../helper';
import SlackMessage from './SlackMessage';
import { getDb } from '../firebase/firebase';
import { getBotResponse } from '../dialogflow/dialogflow';


const CHATKIT_TOKEN_PROVIDER_ENDPOINT = 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a687febe-9212-453c-bc99-909bf4c4db90/token';
const CHATKIT_INSTANCE_LOCATOR = 'v1:us1:a687febe-9212-453c-bc99-909bf4c4db90';
let CHATKIT_ROOM_ID;
let CHATKIT_USER_NAME;
let CHATKIT_USER_TITLE;
let CHATKIT_USER_DESCRIPTION;

export default class ChatScreen extends React.Component {
    state = {
        messages: [],
        sentAutogen: false,
        lastSent: ''
    };

    constructor(props) {
        super(props);

        Dialogflow_V2.setConfiguration(
            "dialogflow-lftjkn@pickytalk.iam.gserviceaccount.com",
            "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCv8bWpu2LHxzXe\nE/PGU0LujZhuyQwzyF2UJykQZERSnYchsMDbw38TKs5ferBBLxQryRiXhEShM9+u\n/cGBhCj9KpRSukiKOmXluWTnIEfwpAbYr1P3bqWmLgSg6tCaHu7KEQiuBCcErOiy\n1/HvgJ6t8xGEvA5Fsex7t/l5llM0W0hwwObqlnxLIgg7kk0qJBBwENXf2hxCY9i7\n1hoMGQlrSrS/HS+84yIo8sI+RQd3zJkdQTpwMqd9XWoIo4ECrWGNdCFhBFpiPns3\nxhVSSoIBz7mQMe+hA5Vr3Y2Gpa2UwU3QVLx0DGqsIQB/yK3DLRICCxO9XUN2QcSf\nzg9OzlihAgMBAAECggEADN405vWKsMl77JfxT9N+Goa7m8/+IaQUCAZh2qONWwIk\nxHeHcMCYa3/0I7KMRTAwHaWxs+nbanN/TBlIt57BWrFsXgKRf0lByO6UF9Kvau+s\nL9k0NG1gwHSEJ9AUsqOe26N+9YSIkAR6E753IN5Q0gXBhb+KnFlPePBIgYvXiQV2\n7sr86+xoyKvohoifilG8A6bdevNAzXv/tdHcznClEiMsQgRqsCA0H0P3VgcF38m+\nBkSnLJEoP+F79dp6kLdgIUeYEKR5/0JoNlIvCeF6+W442bqgPeVMP+dRQr9Aaz35\nljfNkJleaJaaTurNb+/tkAoV+gvDb2z1SBL/Cnw3OQKBgQDnzC+5XXG7mPd9o6aR\ni4LBLvdwIhAHJxcJVaD4ojcG8xvoie9iH4wbeE1ZJAADMFzfhiPW8VtZKepNgzvu\nyiruZcvBR23IeJjKp9eZAX4Eh3yOCKVM+le0ll4tXDNOhEB8wY/+SZjC6P3YO9jD\nXbrFEUl/uQun1tJN024uUNSTVQKBgQDCUJgQsDT6ZD2Uh9q+qHy98T/vI07hVxx/\n+K3I0Wkd8UH6LJRfsiPIztpzFORFWcR1xMwKVadT0zpdEOwH3wQ1ClnIbCptJUHX\np5RmgNt4ZlkjCj5LVaEk5Ll8M8ipwf9BMHLy91n5UhY/JC3sOeFrMteiqWvHjQGH\nEZQG56MIHQKBgQDPrtvHqpi/a7O7h0gzuZsCubELcAmKTxTN0UHz42uIN4P22rd3\n5ColZqlux9mXAdsEjuxHpmKhRfPfVUj6j3rdtKlV2EjdyGelk7KRLYwaRMZtgAOT\nL+4rKFrjK2vw2n/pB4ibXpeXcygVeLGjgbRY4z9GR6bQz6IIBvr+Vn/QLQKBgQCm\n2O8JfVOwIHxj2hcwmJmrusfr/YRQpyzYkV4fTfiVdj/xoW+xj9N8LGmUYT70cXTo\nrpeI1C0+I+Q8XzhcNdl19bJMDtyLJW+YzdL2BPTuN+uX08bThu48MI04IXrOkL4t\nan15NHy0QRDLHLS13qk5E8nmaNUb3m6OXMCfASyS3QKBgQC+2Re3gDfpTI83MMOf\nhIDoUJl7Dv7kb9SsQPF8/i1nL/SlDR2z5phSexkUgeOnKMJ63sAM2OZv3d3XpwE4\nBHDEehEKxdt8shDBibbFFUqcD/kYdNNWmWz9a3vqr84IRJbzVabiUzEcAZPAi2Fh\nCv8XTlBgAZBgCjjzA2SF5OGUTQ==\n-----END PRIVATE KEY-----\n",
            Dialogflow_V2.LANG_KOREAN,
            'pickytalk'
        );
    }

    componentWillMount() {
        const { navigation } = this.props;
        CHATKIT_USER_NAME = this.props.screenProps.userInfo.user_id;
        let messages;
        CHATKIT_USER_TITLE = navigation.getParam('title');
        CHATKIT_USER_DESCRIPTION = navigation.getParam('description');

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
                direction: 'older',
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
                    if(message.text.charAt(0) === '!' || message.text.charAt(0) === '@') {
                        message.text = message.text.substring(1);
                        Object.assign(message.user, {
                            _id: 5,
                            avatar: 'https://raw.githubusercontent.com/Geono/pickytalk/master/assets/avatar/g.jpeg'
                        });
                    }
                    else if (userInfoData) {
                        Object.assign(message.user, {
                            _id: userInfoData.id,
                            avatar: userInfoData.avatarUrl
                        });
                    } else {
                        Object.assign(message.user, {
                            _id: message.user.name,
                            avatar: 'https://placeimg.com/640/480/any'
                        });
                    }

                    try {
                        const jsonObj = JSON.parse(message.text);
                        if(jsonObj.image) {
                            message.text = jsonObj.text;
                            message.image = jsonObj.image;
                        }
                    } catch(error) {
                        console.log('Not an JSON object');
                    }
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

            this.setState({
                lastSent: message.text
            })
        });
    }

    onReceive(data) {
        const { id, createdAt } = data;

        let text = data.text;
        let shouldBeAnalyzed = true;
        let isNotice = false;

        if (text.charAt(0) === '@' || text.charAt(0) === '!') {
            isNotice = true;
            shouldBeAnalyzed = false;
            text = text.substring(1);
        }

        let senderId = isNotice ? 'gmarket' : data.senderId;

        const incomingMessage = {
            _id: id,
            text: text,
            createdAt: new Date(createdAt),
            user: {
                name: senderId
            }
        };

        try {
            const jsonObj = JSON.parse(incomingMessage.text);
            if(jsonObj.image) {
                incomingMessage.text = jsonObj.text;
                incomingMessage.image = jsonObj.image;
            }
        } catch(error) {
            console.log('Not an JSON object');
        }

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

                if(text === this.state.lastSent) {
                    return;
                }

                /************************
                 * ANALYZE PART!!!!!!!! *
                 ************************/
                const userId = this.props.screenProps.userInfo.user_id;
                if (userId === 'test1004' /* 받는 사람이 AM일 때만 자동응답 */
                    && shouldBeAnalyzed && !this.state.sentAutogen) {
                    getBotResponse(text).then(dialogFlowResp => {
                        const autoGenResp = dialogFlowResp
                            .queryResult
                            .fulfillmentMessages[ 0 ]
                            .text
                            .text[ 0 ];
                        try {
                            JSON.parse(autoGenResp);
                        } catch (e) {
                            if (autoGenResp) {
                                let finalText = autoGenResp;
                                if(finalText !== 'End') {
                                    this.setState({ sentAutogen: true });
                                    this.currentUser.sendMessage({
                                        text: '@[자동응답] ' + finalText,
                                        roomId: CHATKIT_ROOM_ID
                                    });
                                }
                            }
                        }
                    });
                }

                if (this.state.sentAutogen)
                    this.setState({ sentAutogen: false });
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

    handleUrlPressed(url) {
        console.log('url', url);
        Linking.openURL(url);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Appbar.Header>
                    <Appbar.BackAction
                        onPress={() => this.props.navigation.goBack()}
                    />
                    <Appbar.Content
                        title={CHATKIT_USER_TITLE}
                        subtitle={CHATKIT_USER_DESCRIPTION}
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
                    parsePatterns={(linkStyle) => [
                        { type: 'url', style: linkStyle, onPress: this.handleUrlPressed },
                        ]}
                    renderMessage={this.renderMessage}
                />
            </View>
        );
    }
}
