import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Dropdown extends Component {
    render() {
        return (
            <div>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" >
                        Category
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <Link className="dropdown-item" to="/">Home</Link>
                        </li>
                        <li >
                            <Link className="dropdown-item" to="/business">Business</Link>
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
            </div>
        );
    }
}

export default Dropdown;
