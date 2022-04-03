import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";

import './Navbar.css';
import ProfileDropdown from '../ProfileDropdown/ProfileDropdown';
const MemberNavbar = (props) => {
  return  (
    <AppBar className="navbar" position="static">
    <Toolbar className="navbar-body">
            <img src="/profile-1.png" height="40px" width="40px" />
            <Typography  style = {{marginLeft: 5, fontSize: 25}}>QuickBite</Typography>
      <div className="navbar-links-container">
        
       
        <Link className="navbar-link" to="/Login">
          <Typography variant="h6">Trending</Typography>
        </Link>
        <Link className="navbar-link" to="/Login">
          <Typography variant="h6">Favorites</Typography>
        </Link>
        <Link className="navbar-link" to="/Login">
          <Typography variant="h6">Personal Reviews</Typography>
        </Link>
        <ProfileDropdown {...props}/>
      </div>
    </Toolbar>
  </AppBar>
  )
}

export default MemberNavbar;