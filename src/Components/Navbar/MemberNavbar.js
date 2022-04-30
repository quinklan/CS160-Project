import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./Navbar.css";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import { useHistory } from "react-router-dom";
const MemberNavbar = (props) => {
  let history = useHistory();
  return (
    <AppBar className="navbar" position="static">
      <Toolbar className="navbar-body">
        <Button className="navbar-link" onClick={() => history.push("/home")}>
          <img src="/profile-1.png" height="40px" width="40px" />
          <Typography
            className="quickbite-text"
            style={{ marginLeft: 5, fontSize: 25 }}
          >
            QuickBite
          </Typography>
        </Button>
        <div className="navbar-links-container">
          <Link className="navbar-link" to="/trending">
            <Typography variant="h6">Trending</Typography>
          </Link>
          <Link className="navbar-link" to="/favorites">
            <Typography variant="h6">Favorites</Typography>
          </Link>
          <Link className="navbar-link" to="/visited">
            <Typography variant="h6">Visited</Typography>
          </Link>
          <ProfileDropdown {...props} />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default MemberNavbar;
