import React from "react";
import { render } from "react-dom";
console.log('Footer component loaded');

export default class Footer extends React.Component {
    render() {
        return (
            <footer classname="sticky-footer">
                <div classname="container">
                    <div classname="text-center">
                        <small>Copyright © Your Website 2018</small>
                    </div>
                </div>
            </footer>
        );
    }
}