import * as React from 'react';
import { Image } from 'react-native';
import { Appbar } from 'react-native-paper';
import PropTypes from 'prop-types';

export default class Header extends React.Component {
    render() {
        return (
            <Appbar.Header>
                <Image
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 64
                    }}
                    source={{ uri: this.props.userInfo.avatarUrl }}
                />
                <Appbar.Content
                    title={this.props.userInfo.id}
                    subtitle={this.props.userInfo.description}
                />
                <Appbar.Action icon="search" onPress={this._onSearch} />
                <Appbar.Action icon="more-vert" onPress={this._onMore} />
            </Appbar.Header>
        );
    }
}

Header.propTypes = {
    userInfo: PropTypes.shape({
        id: PropTypes.string,
        description: PropTypes.string,
        avatarUrl: PropTypes.string,
    })
};

Header.defaultProps = {
    userInfo: {
        id: '',
        description: '',
        avatarUrl: '',
    }
};
