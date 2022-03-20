import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import "./Navbar.css";
const DefaultNavbar = (props) => {
  return (
    <AppBar className="navbar" position="static">
      <Toolbar className="navbar-body">
        {/* <img className = 'navbar-logo' src={process.env.PUBLIC_URL + '/LogoText.png'} />  */}
        <div className="navbar-links-container">
          <Link className="navbar-link" to="/SignUp">
            <Typography variant="h6">
              <div className="group">
                <div className="logo-img">
                  <img src="/profile-1.png" height="5%" width="5%" />
                </div>
                <div className="logo-text">QuickBite</div>
              </div>
            </Typography>
          </Link>
          <Link className="navbar-link" to="/SignUp">
            <Typography variant="h6">Sign Up</Typography>
          </Link>
          <Link className="navbar-link" to="/Login">
            {/* <p>Login</p> */}
            <Typography variant="h6">Login</Typography>
          </Link>
          <Link className="navbar-link" to="/Login">
            {/* <p>Login</p> */}
            <Typography variant="h6">Trending</Typography>
          </Link>
          <Link className="navbar-link" to="/Login">
            {/* <p>Login</p> */}
            <Typography variant="h6">Favorites</Typography>
          </Link>
          <Link className="navbar-link" to="/Login">
            {/* <p>Login</p> */}
            <Typography variant="h6">Personal Reviews</Typography>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default DefaultNavbar;
