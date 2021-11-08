import React, { Component } from 'react';
import '../css/Navbar.css';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
//import { faFilm } from '@fortawesome/free-solid-svg-icons';
import logo from '../rancidTomatillos.png'

const faHomeIcon = <FontAwesomeIcon icon={faHome} />;
//const faFilmIcon = <FontAwesomeIcon icon={faFilm} />;

class Navbar extends Component{
  constructor(props) {
    super(props);
    this.state = {};
  }
//Ability to pass in current page/genre selected and highlight the button through props
  render() {
    return (
      <nav className="navbar">
        <Link to='/'><img className="nav-logo" alt="logo" src={logo}></img></Link>
        <NavLink to="/"><button className="nav-btn">{faHomeIcon} Home</button></NavLink>
      </nav>
    )
  }
}

export default Navbar;
