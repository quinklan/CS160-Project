import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Alert } from "@material-ui/lab/";
import { createUser } from "../../ApiFunctions/User";
import Landing from '../../Components/Landing/Landing';

import $ from "jquery";
const useStyles = makeStyles((theme) => ({
  paper: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(2, 0),
  },
  alert: {
    width: "100%",
    margin: theme.spacing(2, 0, 0),
  },
  field: {
    background: "#FFFFFF"
  }
}));
export default function Signup(){
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const submitHandler = async (user) => {
    createUser(user).then((res) => {
      setError(res.error);
      setSuccess(!res.error);
    });
    return false;
  };
  

  return(
    <Landing>
          
          <Grid item xs={12} align = 'center'>
            <Typography variant="h4" spacing={2}>
              Sign Up
            </Typography>
          </Grid>
          {(error) ? <Alert className={classes.alert} severity="error">Account Creation Unsuccessful</Alert> : null}
         {(success) ? <Alert className={classes.alert} severity="success">Account Creation Successful</Alert> : null}
          <Grid item xs={12}>
            <TextField
              className={classes.field}
              variant="filled"
              required
              fullWidth
              // id="lastName"
              label="Name"
              name="name"
              autoComplete="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.field}
              variant="filled"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.field}
              variant="filled"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick = {() => submitHandler({email,name,password})}
              >
                Create Account
              </Button>
            </Grid>
            <Grid container justify="center">
              <Grid item>
                <Link variant="body2" to="/Login"  style = {{textDecoration: 'none', color: 'white'}}>
                  Already have an account? Log in.
                </Link>
              </Grid>
            </Grid>
          </Grid>
    </Landing>
  )
}
