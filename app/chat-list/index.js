import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar, Colors, List, withTheme } from 'react-native-paper';

const ChatList = () => (
    <View
        style={[ styles.container ]}
    >
        <Appbar.Header>
            <Appbar.Content
                title="Title"
                subtitle="Subtitle"
            />
        </Appbar.Header>
        <List.Item
            title="First Item"
            description="Item description"
            left={props => <List.Icon {...props} icon="chat" />}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

export default withTheme(ChatList);
