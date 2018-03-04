console.log('react app executed');
import React from "react";
import { render } from "react-dom";

import { Header } from "./core/components/Header";
import { Home } from "./core/components/Home";
import { Footer } from "./core/components/Footer";

class App extends React.Component {
    constructor(props) {
        super(props);
        //this.state = { count: 0 };
    }

    //event handler
    // updateCount() {
    //     this.setState({ count: this.state.count + 1 });
    // }

    //render output
    render() {
        return (
            <div>
                <Header />
                <Home />
                <Footer />
            </div>
        );
    }
}


render(<App user="navid" />, document.getElementById("app"));