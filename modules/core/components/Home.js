import React from "react";
import { render } from "react-dom";

export class Home extends React.Component {

    constructor(props) {
        console.log('home component constructor', props);
        super(props);
        this.state = { count: 0 };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        console.log('componentWillMount');
    };

    componentWillReceiveProps(nextProps) {
        //call setState: yes        
        console.log('componentWillReceiveProps: nextProps: ', nextProps);
    };

    shouldComponentUpdate(nextProps, nextState) {
        //method type: boolean
        //call setState: no
        console.log('shouldComponentUpdate:true: nextProps: nextState', nextProps, nextState);
        return true;
    };

    componentWillUpdate() {
        //call setState: no
        console.log('componentWillUpdate');
    };

    //event handler
    handleSubmit() {
        this.setState({ count: (this.state.count + 1) });
        console.log('this.state.count: ' + this.state.count);
    }

    render() {
        console.log('render()');
        return (

            <div className="row">

                <div className="col-md-4">
                    <h2>Welcome, {this.props.username}</h2>
                    <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                    <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
                </div>


                <div className="col-md-4">


                    <div className="form-group">
                        <h3>{this.state.count}</h3>
                    </div>

                    <button type="button" className="btn btn-default" onClick={this.handleSubmit} >Save</button>


                </div>

                <div className="col-md-4">
                    <h2>Heading</h2>
                    <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                    <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
                </div>
            </div>
        );
    }

    componentDidMount() {
        //call setState: yes
        console.log('componentDidMount');
    };

    componentDidUpdate() {
        //call setState: yes
        console.log('componentDidUpdate');
    };

    componentWillUnmount() {
        //call setState: no
        console.log('componentWillUnmount');
    };
}