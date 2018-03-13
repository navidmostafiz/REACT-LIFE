import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
//components and actions
import UserListComponent from '../components/userList';
import { getUserlist } from '../actions/getUserList';
console.log('user list container loaded');

var users = [
    { id: 1, userName: 'navidmostafiz', firstName: 'Navid', lastName: 'Mostafiz' },
    { id: 2, userName: 'mohaiminul', firstName: 'Mohaiminul', lastName: 'Islam' }
];

class UserListContainer extends Component {
    componentWillMount() {
        //this.props.getUserlist();
        console.log('UserListComponent.componentWillMount');
    }

    render() {
        console.log('UserListComponent.render()');
        return (
            <UserListComponent userList={users} />
        );
    }
}

// Get apps store and pass it as props to UserListComponent
//  > whenever store changes, the UserListComponent will automatically re-render
// "store.userList" is set in reducers.js
function mapStateToProps(store) {
    return {
        userList: store.userList,
    };
}

// Get actions and pass them as props to to UserListComponent
//  > now UserListComponent has this.props.getUserlist
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        getUserlist: getUserlist,
    }, dispatch);
}

// We don't want to return the plain UserListComponent (component) anymore,
// we want to return the smart Container
//  > UserListComponent is now aware of state and actions
//export default connect(mapStateToProps, matchDispatchToProps)(UserListContainer);

export default UserListContainer;
