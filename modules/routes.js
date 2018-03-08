console.log('master root routes loaded');
import React, { Component } from 'react';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory  } from "react-router"; //importing specific react route classes

//core components
import MasterLayout from './core/components/MasterLayout';
import NotFound from './core/components/NotFound';
//routes for different modules
//import authRoute from './user/routes/route';                         {authRoute()}
//import dashboardRoute from './dashboard/routes/route';           {dashboardRoute()}
import userRoute from './user/routes/route';

//localhost:3000/admin
/* default path is localhost:3000/admin/users */
/* root of this route is /users i.e. localhost:3000/admin/users */
class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={MasterLayout}>
          <IndexRedirect to='users' />
          {userRoute()}
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    );
  }
}

export default Routes;