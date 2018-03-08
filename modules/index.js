import React from "react";
import ReactDOM from 'react-dom';
import Routes from './routes';
import '../bootstrap.css';
import '../master.css';
import MasterLayout from './core/components/MasterLayout';
import NotFound from './core/components/NotFound';
console.log('react app executed');

ReactDOM.render(<Routes />, document.getElementById("app"));