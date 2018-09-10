import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { List } from 'react-native-paper';
import Spinner from 'react-native-loading-spinner-overlay';
import Main from '../main';
import { readCollectionById } from "../firebase/firebase";

class SelectUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            userInfo: null,
            isSpinning: false
        };
        this.onUserClick = this.onUserClick.bind(this);
    }

    onUserClick(username) {
        this.setState({
            username,
            isSpinning: false
        });

        readCollectionById('users', username)
            .then(userInfo => {
                this.setState({
                    userInfo,
                    isSpinning: false
                });
            });
    }

    render() {
        if (this.state.userInfo !== null) {
            return <Main userInfo={this.state.userInfo} />;
        } else {
            return (
                <View
                    style={[ styles.container ]}
                >
                    <Spinner
                        visible={this.state.isSpinning}
                        textContent={"Loading..."}
                        textStyle={{ color: '#FFF' }}
                    />
                    <List.Section title="Select your role">
                        <List.Item
                            title="Seller"
                            onPress={() => this.onUserClick('ottugi0')}
                            left={() => <List.Icon icon="people" />}
                        />
                        <List.Item
                            title="Account Manager"
                            onPress={() => this.onUserClick('test1004')}
                            left={() => <List.Icon icon="person" />}
                        />
                    </List.Section>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 40,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
    fab: {
        position: 'absolute',
        right: 16,
        bottom: 28,
    },
});

export default SelectUser;

