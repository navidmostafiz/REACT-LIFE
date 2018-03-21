import React from "react";
import { render } from "react-dom";
import toastr from 'toastr';
console.log('COMPONENT: UpdateUser');

export default class UpdateUser extends React.Component {
    //constructor takes props passed in from container.
    constructor(props) {
        super(props); //we pass props form container to super class React.Component also.
        console.log('UpdateUser.constructor');

        //console.log("DetailUserComponent - constructor");
        //we define the state fields with null and assign props to them later on.
        this.state = {
            id: '',
            firstName: '',
            lastName: '',
            role: '',
            status: '',
            isChecked: false
        }

        //binding this to handler for changes to state fields
        this.firstName_HandleChange = this.firstName_HandleChange.bind(this);
        this.lastName_HandleChange = this.lastName_HandleChange.bind(this);
        this.status_HandleChange = this.status_HandleChange.bind(this);

        //binding this to handler for final form submission
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log('UpdateUser.componentWillRecieveProps', nextProps);
        //when component recive props(first time and also each time container changes prop value)
        //we check if state was set to props or props value has changed and then set/update state values
        if (this.state.id != nextProps.user.id) {
            this.setState({ id: nextProps.user.id });
        }

        if (this.state.firstName != nextProps.user.firstName) {
            this.setState({ firstName: nextProps.user.firstName });
        }

        if (this.state.lastName != nextProps.user.lastName) {
            this.setState({ lastName: nextProps.user.lastName });
        }

        //we check if role is administrator and do some logical works.
        if (this.state.role != nextProps.user.role) {
            this.setState({ role: nextProps.user.role });
        }

        //updating state on change event for checkbox.
        if (this.state.status != nextProps.user.status) {
            this.setState({
                status: nextProps.user.status,
                isChecked: nextProps.user.status == "Active" ? false : true //Active means not disabled/so set to false
            });
        }
    }


    //Handler for change
    firstName_HandleChange(event) {
        console.log("Handler: event.target.value  " + event.target.value);
        this.setState({ firstName: event.target.value });
    }

    lastName_HandleChange(event) {
        console.log("Handler: event.target.value  " + event.target.value);
        this.setState({ lastName: event.target.value });
    }

    status_HandleChange(event) {
        console.log("Handler: event.target.value  " + event.target.value + " - checked - " + this.state.isChecked);
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

        this.setState({
            isChecked: value
        });
    }

    handleSubmit(event) {
        console.log('handleSubmit');
        //prevents default action saved by browser, only allows triggering handler if a fresh submission event has taken place, see also: event.stopPropagation()
        event.preventDefault();

        const _this = this;

        let id = this.state.id;
        let firstName = this.state.firstName;
        let lastName = this.state.lastName;
        let status = this.state.isChecked ? "Inactive" : "Active";

        console.log('updating values: ' + id + firstName + '-' + lastName + '-' + status + '-' + this.state.role)

        /*
         * Validation rules
         */

        // if (firstName.length < 1) {
        //     toastr.warning('First Name is required.', 'NYCL Alert!');
        //     return false;
        // }

        // if (lastName.length < 1) {
        //     toastr.warning('Last Name is required.', 'NYCL Alert!');
        //     return false;
        // }

        const data = { id, firstName, lastName, status };
        //we call this component props action>container action>Action action>dispatcher with type>listend by reducer as per type, binds back store state
        this.props.updateUser(this.state.id, data,
            function (error, response) {
                if (error) {
                    console.error('ERROR: updateUser() ', error);
                    // toastr.error(error.message, 'MERNjs');
                } else {
                    console.log('updateUser: ', response);
                    // toastr.success(response.message, 'MERNjs');
                    /*browserHistory instance directly to call the history api methods.
                    router will listen to this and redirect accordingly. but router must be cconfigured to listen to browser history instance.
                    we have different types of history: browser history, hash history, memory history, etc
                    */
                    browserHistory.push('/users'); //redirect to user page after post submission method was called
                }
            });
    }


    shouldComponentUpdate(nextProps, nextState) {
        // console.log('UpdateUser.shouldComponentUpdate', nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        // console.log('UpdateUser.componentWillUpdate', nextProps, nextState);
    }

    componentWillMount() {
        // console.log('UpdateUser.componentWillMount');
    }

    render() {
        return (
            <div className="col-md-offset-4 col-md-4">
                <form className="form-horizontal" onSubmit={this.handleSubmit} >
                    <fieldset>
                        {/* Form Name */}
                        <legend>Update User</legend>
                        {/* Text input*/}
                        <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="firstName">First Name</label>
                            <div className="col-md-4">
                                <input id="firstName" name="firstName" type="text" value={this.state.firstName} onChange={this.firstName_HandleChange} className="form-control input-md" required />
                            </div>
                        </div>
                        {/* Text input*/}
                        <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="lastName">Last Name</label>
                            <div className="col-md-4">
                                <input id="lastName" name="lastName" type="text" value={this.state.lastName} onChange={this.lastName_HandleChange} className="form-control input-md" />
                            </div>
                        </div>
                        {/* checkbox */}
                        <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="isChecked">
                                <input
                                    type="checkbox"
                                    name="isChecked"
                                    checked={this.state.isChecked}
                                    onChange={this.status_HandleChange}
                                    disabled={this.state.role == "Administrator" ? true : false} /> Disabled?
                                    </label>
                        </div>
                        {/* Button */}
                        <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="singlebutton">Update User</label>
                            <div className="col-md-4">
                                <button type="submit" id="singlebutton" name="singlebutton" className="btn btn-primary">Update</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }

    componentDidCatch() {
        // console.log('UpdateUser.componentDidCatch');
    }

    componentDidMount() {
        // console.log('UpdateUser.componentDidMount');
    }

    componentDidUpdate() {
        // console.log('UpdateUser.componentDidUpdate');
    }

    componentWillUnmount() {
        // console.log('UpdateUser.componentWillUnmount');
    }
}
