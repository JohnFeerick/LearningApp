import './Styles/NavBar.css';

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className="navbar__left">
                <Link to="/">Home</Link>
                <label>
                    Topics
                    <select>
                        <option><Link to="/objects">Objects and Classes</Link></option>
                        <option><Link to="/inheritance">Inheritance</Link></option>
                        <option><Link to="/abstraction">Abstraction</Link></option>
                        <option><Link to="/polymorphism">Polymorphism</Link></option>
                        <option><Link to="/encapsulation">Encapsulation</Link></option>
                    </select>
                </label>
                <Link to="/editor">Editor</Link>
            </div>
            <div className="navbar__right">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </div>
    );
}

export default NavBar;
