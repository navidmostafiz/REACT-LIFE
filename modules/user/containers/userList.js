import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
//components
import UserListComponent from '../components/userList';
//actions
import { getUserlist } from '../actions/getUserList';

console.log('CONTAINER: UserListContainer');

class UserListContainer extends Component {
    componentWillMount() {
        this.props.getUserlist();        
        // console.log('UserListContainer.componentWillMount');
    }

    render() {
        // console.log('UserListContainer.render()');
        return (
            <UserListComponent userList={this.props.userList} />
        );
    }
}

function mapStateToProps(store) {
    return {
        userList: store.userList,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        getUserlist: getUserlist,        
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserListContainer);