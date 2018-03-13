import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';
// import '../public/stylesheets/admin.css';
// import 'bootstrap';
// import './config.jsx';
import '../bootstrap.css';
import '../master.css';
import MasterLayout from './core/components/MasterLayout';
import NotFound from './core/components/NotFound';
console.log('react app executed');

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>, document.getElementById("app"));
