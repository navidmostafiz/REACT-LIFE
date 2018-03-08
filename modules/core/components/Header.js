import React from "react";
import { render } from "react-dom";

export default class Header extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/">Home</a>
                    <a className="navbar-brand" href="/dashboard">Dashboard</a>
                    <a className="navbar-brand" href="/users">Users</a>
                </div>
            </div>
        );
    }
}