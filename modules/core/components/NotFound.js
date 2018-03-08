import React from "react";
import { render } from "react-dom";

export default class NotFound extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="error-template">
                            <h1>Oops!</h1>
                            <h2>404 Not Found</h2>
                            <div className="error-actions">
                                <a href="/" className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-home" />Take Me Home</a>
                                <a href="http://www.jquery2dotnet.com" className="btn btn-default btn-lg"><span className="glyphicon glyphicon-envelope" /> Contact Support </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}