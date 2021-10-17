import React from 'react';
import '../css/Navbar.css';

class Navbar extends React.Component{
    constructor(props) {
        super(props);
        this.state={};
    }
//Ability to pass in current page/genre selected and highlight the button through props
    render() {
        return (
            <nav className="navbar">
                <button><a className="nav-btn">Test</a></button>
                <button><a className="nav-btn">Test</a></button>
                <button><a className="nav-btn">Test</a></button>
            </nav>
        )
    }
}

export default Navbar;
