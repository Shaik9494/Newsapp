import React, { Component,useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


class Navbar extends Component {
    componentDidMount() {
        // Initialize Bootstrap dropdown
        const dropdownToggle = document.querySelector('.dropdown-toggle');
        new window.bootstrap.Dropdown(dropdownToggle);
    }
    render() {
        const oppositeMode = this.props.mode === 'light' ? 'dark' : 'light';
        return (
            <div>
                <nav className={`navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">{this.props.title}</Link>
                        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button> */}
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" >
                                Category
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item" to="/">Home</Link>
                                </li>
                                <li >
                                    <Link className="dropdown-item"  to="/business">Business</Link>
                                </li>
                                <li >
                                    <Link className="dropdown-item" to="/entertainment">Entertainment</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/general">General</Link>
                                </li>
                                <li >
                                    <Link className="dropdown-item" to="/health">Health</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/science">Science</Link>
                                </li>
                                <li >
                                    <Link className="dropdown-item" to="/sports">Sports</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/technology">Technology</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="conatiner">
                        <div className={`form-check form-switch text-${oppositeMode}`}>
                                <input className="form-check-input" type="checkbox" onClick={this.props.togglemode} role="switch" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {oppositeMode}mode</label>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}


export default Navbar;
