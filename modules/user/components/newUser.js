import React from "react";
import { render } from "react-dom";
console.log('NewUser loaded');

export default class NewUser extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">


                        <form className="form-horizontal">
                            <fieldset>
                                {/* Form Name */}
                                <legend>Form Name</legend>
                                {/* Text input*/}
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="username">User Name</label>
                                    <div className="col-md-4">
                                        <input id="username" name="username" type="text" placeholder="placeholder" className="form-control input-md" required />
                                        <span className="help-block">help</span>
                                    </div>
                                </div>
                                {/* Text input*/}
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="firstName">First Name</label>
                                    <div className="col-md-4">
                                        <input id="firstName" name="firstName" type="text" placeholder="First Name" className="form-control input-md" required />
                                        <span className="help-block">help</span>
                                    </div>
                                </div>
                                {/* Text input*/}
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="lastName">Last Name</label>
                                    <div className="col-md-4">
                                        <input id="lastName" name="lastName" type="text" placeholder="Last Name" className="form-control input-md" />
                                        <span className="help-block">help</span>
                                    </div>
                                </div>
                                {/* Password input*/}
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="password">Password</label>
                                    <div className="col-md-4">
                                        <input id="password" name="password" type="password" placeholder="placeholder" className="form-control input-md" required />
                                        <span className="help-block">help</span>
                                    </div>
                                </div>
                                {/* Password input*/}
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="passwordConfirm">Confirm Password</label>
                                    <div className="col-md-4">
                                        <input id="passwordConfirm" name="passwordConfirm" type="password" placeholder="Confirm Password" className="form-control input-md" required />
                                        <span className="help-block">Confirm Password</span>
                                    </div>
                                </div>
                                {/* Prepended checkbox */}
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="disable">Disable this user?</label>
                                    <div className="col-md-4">
                                        <div className="input-group">
                                            <span className="input-group-addon">
                                                <input type="checkbox" />
                                            </span>
                                            <input id="disable" name="disable" className="form-control" type="text" placeholder="placeholder" required />
                                        </div>
                                        <p className="help-block">help</p>
                                    </div>
                                </div>
                                {/* Button */}
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="singlebutton">Create New User</label>
                                    <div className="col-md-4">
                                        <button id="singlebutton" name="singlebutton" className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>


                    </div>
                </div>
            </div>
        );
    }
}
