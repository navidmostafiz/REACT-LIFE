import React from "react";
import { render } from "react-dom";

export default class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                <a className="navbar-brand" href="index.html">Start Bootstrap</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
                        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
                            <a className="nav-link" href="/">
                                <span className="nav-link-text">Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
                            <a className="nav-link" href="/users">
                                <i className="fa fa-fw fa-area-chart" />
                                <span className="nav-link-text">User Panel</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="modal" data-target="exampleModal">
                                <i className="fa fa-fw fa-sign-out" />Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}