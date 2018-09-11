import * as React from 'react';
import PropTypes from 'prop-types';
import Header from '../header';

export default class Dashboard extends React.Component {
    render() {
        return <Header userInfo={this.props.userInfo} />
    }
}

Dashboard.propTypes = {
    userInfo: PropTypes.shape({
        _id: PropTypes.number,
        user_id: PropTypes.string,
        description: PropTypes.string,
        avatarUrl: PropTypes.string,
    })
};

Dashboard.defaultProps = {
    userInfo: {
        _id: -1,
        user_id: '',
        description: '',
        avatarUrl: '',
    }
};
