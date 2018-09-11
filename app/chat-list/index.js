import * as React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Header from '../header';
import {getDb} from '../firebase/firebase';

export default class ChatList extends React.Component {
    componentDidMount() {
        const conversationsList = getDb().collection('conversations-list');
        const userInfo = this.props.userInfo;
        conversationsList.get().then(querySnapshot => {
            var results = [];
            querySnapshot.forEach(function(doc) {
                const data = doc.data();
                if(data.user_id &&
                    data.user_id.includes(userInfo.id)) {
                    results.push(data);
                }
            });
            return results;
        }).then(results => {
            console.log(results);
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <View>
                <Header userInfo={this.props.userInfo} />
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
