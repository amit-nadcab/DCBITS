import React from 'react'
import { Link } from "react-router-dom";


export const Navbar = () => {
  return (
    //  <!-- Main-menu Strat -->
    <div className="mein-menu">
        <nav className="navbar navbar-expand-lg navbar-dark ">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src="assets/img/logo.png" className="logo" alt="logo" width="172px" height="43px"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        {/* <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#features">Features</a>
                        </li> */}
                        {/* <li className="nav-item">
                            <div className="language-select">
                                <select className="select-bar">
                                    <option value="">EN</option>
                                    <option value="">IN</option>
                                    <option value="">BN</option>
                                </select>
                            </div>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">SignUp</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}
