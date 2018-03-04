import React from "react";

export class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    //event handler
    updateCount() {
        console.log('this.state.count: ', this.state.count);
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">


                            <h2 className="form-signin-heading">Please sign in</h2>
                            <label htmlFor="inputEmail" className="sr-only">Email address {this.state.count}</label>
                            <input type="text" id="inputEmail" className="form-control" value={this.state.count} placeholder="Email address" />
                            <button className="btn" onClick={this.updateCount} >Count!</button>


                    </div>
                    <div className="col-md-4">
                        <h2>Heading</h2>
                        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                        <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
                    </div>
                    <div className="col-md-4">
                        <h2>Heading</h2>
                        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                        <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
                    </div>
                </div>
            </div>
        );
    }
}