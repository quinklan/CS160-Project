import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Alert } from "@material-ui/lab/";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { login } from "../../ApiFunctions/User";
import $ from "jquery";
import { green } from "@material-ui/core/colors";
import Landing from "../../Components/Landing/Landing";

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
    margin: theme.spacing(1, 0),
  },
  alert: {
    width: "100%",
    margin: theme.spacing(2, 0, 0),
  },
  field: {
    background: "#FFFFFF"
  }
}));

export default function Login(props) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const submitHandler = async (user) => {
    login(user).then((res) => {
      if (res.error) {
        setError(true);
      } else {
        props.setAuthenticated(res.body.data.verified);
        window.localStorage.setItem("jwtToken", res.body.data.token);
        // window.location.reload();
        window.location.href = "/main";
      }
    });
    return false;
  };

  $("#login-form").submit(async function (e) {
    e.preventDefault();
    // await submitHandler({email,firstName,lastName,password, address,payment});
    return false;
  });

  return (
    <Landing>
      <Grid item xs={12} align="center">
        <Typography variant="h4" spacing={2}>
          Login
        </Typography>
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
              id="password"
              label="Password"
              name="password"
              autoComplete="password"
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
          >
            Login
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            //type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            //className={classes.submit}
          >
            Signup
          </Button>
        </Grid>
      </Grid>
    
    </Landing>
  );
}
