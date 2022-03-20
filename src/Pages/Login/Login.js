import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Alert } from '@material-ui/lab/';

import { login } from '../../ApiFunctions/User';


import $ from 'jquery';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0),
  },
  alert: {
    width: '100%',
    margin: theme.spacing(2, 0, 0)
  }
}));

export default function Login(props) {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const submitHandler = async (user) => {

    login(user)
      .then(res => {
        if (res.error) {
          setError(true)
        } else {
          props.setAuthenticated(res.body.data.verified);
          window.localStorage.setItem('jwtToken', res.body.data.token);
          // window.location.reload();
          window.location.href = '/main'
        }

      })
    return false;
  }

  $('#login-form').submit(async function (e) {
    e.preventDefault()
    // await submitHandler({email,firstName,lastName,password, address,payment});
    return false;
  });
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography variant="h4" spacing={2}>
          Login
        </Typography>
        {(error) ? <Alert className={classes.alert} severity="error">Login Unsuccessful</Alert> : null}

        <form id='login-form' className={classes.form} noValidate onSubmit={() => submitHandler({ email, password })}>
          <Grid container spacing={2}>


            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => { setEmail(e.target.value) }}

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => { setPassword(e.target.value) }}

              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>
        </form>
      </div>
    </Container>
  );
}

