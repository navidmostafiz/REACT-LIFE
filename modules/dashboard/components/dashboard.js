import React from "react";
import { render } from "react-dom";
console.log('COMPONENT: DashBoard');

export default class DashBoard extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="single category">
                            <h3 className="side-title">Category</h3>
                            <ul className="list-unstyled">
                                <li><a href title>Business <span className="pull-right">13</span></a></li>
                                <li><a href title>Technology <span className="pull-right">13</span></a></li>
                                <li><a href title>Web <span className="pull-right">13</span></a></li>
                                <li><a href title>Ecommerce <span className="pull-right">13</span></a></li>
                                <li><a href title>Wordpress <span className="pull-right">13</span></a></li>
                                <li><a href title>Android <span className="pull-right">13</span></a></li>
                                <li><a href title>IOS <span className="pull-right">13</span></a></li>
                                <li><a href title>Windows <span className="pull-right">13</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}