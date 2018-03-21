import React from "react";
import { render } from "react-dom";
console.log('COMPONENT: NotFound');

export default class NotFound extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card text-white bg-danger o-hidden h-100">
                        <div className="card-body">
                            <div className="card-body-icon">
                                <i className="fa fa-fw fa-support" />
                            </div>
                            <div className="mr-5">PAGE NOT FOUND!</div>
                        </div>
                        <a className="card-footer text-white clearfix small z-1" href>
                            <span className="float-left">ERROR 404</span>
                            <span className="float-right">
                                <i className="fa fa-angle-right" />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}