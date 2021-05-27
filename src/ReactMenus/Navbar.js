import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    return (
        <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-10 mx-auto' style={{backgroundColor:'blueviolet'}}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to="/" >Ashish</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link"  to="/">HOME <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName='menu-active' to="/about">ABOUT</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName='menu-active' to="/services">SERVICES</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName='menu-active' to="/contact">CONTACT</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
             </div>
            </div>
        </div>
        </>
    )
}

export default Navbar;
