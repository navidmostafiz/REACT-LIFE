import React from "react";
import { render } from "react-dom";

export class Home extends React.Component {

    constructor(props) {
        super(props);
        this.states = { count: 0 };
        console.log('home component started!');

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount(){

        console.log('this.state.count: ', this.states.count);
    }



    //event handler
    handleSubmit() {
        console.log('this.state.count: ', this.states.count);
        this.setState({ count: this.states.count + 1 });
    }

    render() {
        return (

            <div className="row">
                <div className="col-md-4">

                    <form onSubmit={this.handleSubmit} >
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="form-control" value={this.states.count} />
                        </div>

                        <button type="submit" className="btn btn-default">Save</button>
                    </form>

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
        );
    }
}