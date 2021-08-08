import React, {useEffect} from 'react'
import avatar from '../img/Avatar.jpeg';
import {NavLink} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'
function Navbar() {
     useEffect(() => {
        AOS.init({duration: 2000})
    }, [])
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile" data-aos="zoom-in-up">
                    <img src={avatar} alt=""/>
                 </div>

                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolios" exact activeClassName="active">
                            Portfolios
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/blogs" exact activeClassName="active">
                            Blogs
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>

                <footer className="footer">
                    <p>
                        &copy; Copyright 2021 Developer By <a href='#'>AmanCoder</a>
                    </p>
            </footer>
            </nav>
            
        </div>
    )
}

export default Navbar;
