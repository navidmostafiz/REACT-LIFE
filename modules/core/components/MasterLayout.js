console.log('master laytout loaded by route');
import React, { Component } from 'react';
//core components
import HeaderComponent from "./Header";
import FooterComponent from "./Footer";

//the masterLayout load static header, footer and dynamic chil components passedinto it as props.
class MasterLayout extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <HeaderComponent />
        <div className='content'> {this.props.children} </div>
        <FooterComponent />
      </div>
    );
  }
}

export default MasterLayout;