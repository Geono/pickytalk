import * as React from 'react';
import { Appbar } from 'react-native-paper';
import PropTypes from 'prop-types';

export default class Dashboard extends React.Component {
    render() {
        return (
            <Appbar.Header>
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

Dashboard.propTypes = {
    userInfo: PropTypes.shape({
        id: PropTypes.string,
        description: PropTypes.string,
        avatarUrl: PropTypes.string,
    })
};

Dashboard.defaultProps = {
    userInfo: {
        id: '',
        description: '',
        avatarUrl: '',
    }
};
