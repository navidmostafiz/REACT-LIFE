console.log('react app executed');
import React from "react";
import ReactDOM from 'react-dom';
import Routes from './routes';
import '../bootstrap.css';
import '../master.css';
//core components
import MasterLayout from './core/components/MasterLayout';
import NotFound from './core/components/NotFound';

ReactDOM.render(<Routes />, document.getElementById("app"));