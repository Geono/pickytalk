import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { List } from 'react-native-paper';
import Main from '../main';

class SelectUser extends React.Component {
    constructor(props) {
        super(props);
        this.onUserClick = this.onUserClick.bind(this);
    }

    componentWillMount() {
        this.setState({ user: null });
    }

    onUserClick(user) {
        this.setState({ user });
    }

    render() {
        if (this.state.user !== null) {
            return <Main user={this.state.user} />;
        } else {
            return (
                <View
                    style={[ styles.container ]}
                >
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

