import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";

import './Navbar.css';
const DefaultNavbar = (props) => {
  return  (
  <AppBar className = 'navbar' position="static">
        <Toolbar className = 'navbar-body'>
          <img className = 'navbar-logo' src={process.env.PUBLIC_URL + '/LogoText.png'} /> 
          <div className = 'navbar-links-container'>
            <Link className = 'navbar-link' to = '/SignUp'>
              <p>Sign Up</p>
            </Link>
            <Link className = 'navbar-link' to = '/Login'>
              <p>Login</p>
            </Link>
            
          </div>
        </Toolbar>
    </AppBar>
  )
}

export default DefaultNavbar;