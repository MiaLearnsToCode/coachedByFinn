import React, { useState } from 'react';
import logo from './../images/logo.png'

export default function Navbar() {
  // Declare a new state variable, which we'll call "count"
  const [mobileNav, toggleNav] = useState(false);

  return (
    <div>
      <nav className="nav pink-background">
        <div className="nav-wrapper">
          <div className="logo-wrapper">
            <img src={logo} alt="Logo" className="brand-logo logo" />
          </div>
          <a onClick={() => toggleNav(!mobileNav)} className="sidenav-trigger">
            <i className="material-icons white-bars">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li><a href="#home">HOME</a></li>
            <li><a href="#bio">BIO</a></li>
            <li><a href="#coaching">COACHING</a></li>
            <li><a href="#blog">BLOG</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </div>
      </nav>
      {
        mobileNav ? <div className="mobile-navbar pink-background">
          <div onClick={() => toggleNav(!mobileNav)}><a href="#home">Home</a></div>
          <div onClick={() => toggleNav(!mobileNav)}><a href="#bio">Bio</a></div>
          <div onClick={() => toggleNav(!mobileNav)}><a href="#coaching">Coaching</a></div>
          <div onClick={() => toggleNav(!mobileNav)}><a href="#blog">Blog</a></div>
          <div onClick={() => toggleNav(!mobileNav)}><a href="#contact">Contact</a></div>
        </div> : null
      }
    </div>
  );
}