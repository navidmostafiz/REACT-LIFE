import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//components
import UpdateUserComponent from '../components/updateUser';
//actions
import { getUser } from '../actions/getUser';
import { updateUser } from '../actions/updateUser';

console.log('CONTAINER: UpdateUserContainer');

class UpdateUserContainer extends Component {
    componentWillMount() {
        console.log('this.props.params.userId' + this.props.params.userId);
        this.props.getUser(1);
        //this.props.getUser(this.props.params.userId);
    }

    render() {
        console.log('render(): this.props.user ' + this.props.user);
        return (
            <UpdateUserComponent
                user={this.props.user}
                updateUser={this.props.updateUser} />
        );
    }
}

function mapStateToProps(store) {
    console.log('store.user ' + store.user);
    return {
        user: store.user,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        getUser: getUser,
        updateUser: updateUser,
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UpdateUserContainer);