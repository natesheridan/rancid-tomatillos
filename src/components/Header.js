import React, { Component } from 'react';
import '../css/Header.css';
import Navbar from './Navbar';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return (
      <section className="row header">
        <Navbar />
        {/* <UserBubble /> */}
      </section>
    )
  }
}

export default Header;
