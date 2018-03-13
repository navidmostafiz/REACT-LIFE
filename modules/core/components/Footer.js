import React from "react";
import { render } from "react-dom";
console.log('Footer component loaded');

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="sticky-footer">
                <div className="container">
                    <div className="text-center">
                        <small>Copyright © Your Website 2018</small>
                    </div>
                </div>
            </footer>
        );
    }
}