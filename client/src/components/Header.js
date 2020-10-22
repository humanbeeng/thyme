import React, { Component } from "react";
import logo from "../assets/logo.png";
import './App.css'

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar is-brown is-light" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
        <a href="localhost:3000/">
          <img src={logo} width="40px" width="80" height="28"/>
        </a>
        </div>
        
        <div className="navbar-menu">
          <div className="navbar-end">
            <a href="/auth/google" className="navbar-item">
              <div className="signin">Sign in with Google</div>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
