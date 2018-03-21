import React, { Component } from 'react';
//core components
import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
console.log('COMPONENT: MasterLayout');

//the masterLayout load static header, footer and dynamic chil components passedinto it as props.
class MasterLayout extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <div className="content-wrapper">
          <div className="container-fluid">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Tables</li>
            </ol>
            <div className='content'> {this.props.children} </div>
            <FooterComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default MasterLayout;