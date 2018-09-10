import * as React from 'react';
import { Appbar } from 'react-native-paper';
import PropTypes from 'prop-types';

export default class Dashboard extends React.Component {
    render() {
        return (
            <Appbar.Header>
                <Appbar.Content
                    title={this.props.user}
                    subtitle="Subtitle"
                />
                <Appbar.Action icon="search" onPress={this._onSearch} />
                <Appbar.Action icon="more-vert" onPress={this._onMore} />
            </Appbar.Header>
        );
    }
}

Dashboard.propTypes = {
    user: PropTypes.string.isRequired
};
