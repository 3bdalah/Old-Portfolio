import React, { Component } from 'react';

import { FaAlignRight } from "react-icons/fa";
 import { Router , Link } from "react-router-dom";
 class Navbar extends Component {

    state = {
        isOpen: false
      };
      handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
      };
    render() {
        return (
            <div>
                 <nav className="navbar">
                   <div className="container">
                        <div className="navbar-center">
                            <div className="navbar-header">
                            <h1 className="name"><Link to="/">Abdallah</Link></h1>
                                <button
                                type="button"
                                className="navbar-btn"
                                onClick={this.handleToggle}
                                >
                                <FaAlignRight className="navbar-icon" />
                                </button>
                            </div>
                            <ul   className={this.state.isOpen ? "navbar-links show-navbar" : "navbar-links"}>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/Port">Projects</Link>
                                </li>
                                <li>
                                    <Link to="/tech">Tech</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                         </div>
                   </div>
                 </nav>
            </div>
        );
    }
}

export default Navbar;