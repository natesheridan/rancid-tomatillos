import React, { Component } from 'react';
import '../css/Navbar.css';
import { NavLink } from 'react-router-dom';

class Navbar extends Component{
    constructor(props) {
      super(props);
      this.state={};
    }
//Ability to pass in current page/genre selected and highlight the button through props
  render() {
    return (
      <nav className="navbar">
        <NavLink to="/"><button><a className="nav-btn">Home</a></button></NavLink>
        <NavLink to="/"><button><a className="nav-btn">Test</a></button></NavLink>
        <NavLink to="/"><button><a className="nav-btn">Test</a></button></NavLink>
      </nav>
    )
  }
}

export default Navbar;
