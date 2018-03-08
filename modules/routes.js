import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import HeaderComponent from "./core/components/Header";
import FooterComponent from "./core/components/Footer";
import UserComponent from "./user/components/userList";
import DashboardComponent from "./dashboard/components/dashboard";
import NotFound from "./core/components/NotFound";

const PrimaryLayout = () => (
  <div className="primary-layout">
    <header>
      <HeaderComponent />
    </header>
    <div className="content-wrapper">
      <div className="container-fluid">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Dashboard</a>
          </li>
          <li className="breadcrumb-item active">Tables</li>
        </ol>
        <main>
          <Route path="/" exact component={DashboardComponent} />
          <Route path="/users" component={UserComponent} />
          <Route path="/not" component={NotFound} />
        </main>
        <FooterComponent />
      </div>
    </div>
  </div>
)

export default () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
)
console.log('master root routes loaded');


// //core components
// import MasterLayout from './core/components/MasterLayout';
// import NotFound from './core/components/NotFound';
// //routes for different modules
// //import authRoute from './user/routes/route';                         {authRoute()}
// //import dashboardRoute from './dashboard/routes/route';           {dashboardRoute()}
// import userRoute from './user/routes/route';

// //localhost:3000/admin
// /* default path is localhost:3000/admin/users */
// /* root of this route is /users i.e. localhost:3000/admin/users */
// class Routes extends Component {
  //   render() {
    //     return (
      //       <Router history={browserHistory}>
      //         <Route path='/' component={MasterLayout}>
      //           <IndexRedirect to='users' />
      //           {userRoute()}
      //           <Route path='*' component={NotFound} />
      //         </Route>
      //       </Router>
      //     );
      //   }
      // }

      // export default Routes;
