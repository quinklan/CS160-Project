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
import { createUser } from "../../ApiFunctions/User";

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
    background: "#FFFFFF",
  },
  grid: {
    margin: theme.spacing(0, 10),
  },
  logo: {
    margin: theme.spacing(0, -40),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const [address, setAddress] = useState("hi");
  const [payment, setPayment] = useState("bye");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const submitHandler = async (user) => {
    createUser(user).then((res) => {
      setError(res.error);
      setSuccess(!res.error);
    });
    return false;
  };

  $("#signup-form").submit(async function (e) {
    e.preventDefault();
    // await submitHandler({email,firstName,lastName,password, address,payment});
    return false;
  });

  return (
    <Container component="main" className="background">
      <CssBaseline />
      <div className={classes.paper}>
        {error ? (
          <Alert className={classes.alert} severity="error">
            Account Creation Unsuccessful
          </Alert>
        ) : null}
        {success ? (
          <Alert className={classes.alert} severity="success">
            Account Creation Successful
          </Alert>
        ) : null}
        <form
          id="signup-form"
          className={classes.form}
          onSubmit={() =>
            submitHandler({
              email,
              firstName,
              lastName,
              password,
              address,
              payment,
            })
          }
        >
          <Grid container spacing={2} xs={12} className={classes.grid}>
            <Grid item xs={8} style={{ color: "#FFFFFF" }}>
              <Grid item xs={6} align="center">
                <img src="/profile-1.png" height="30%" width="70%" />
              </Grid>
              <Grid item xs={6} align="center">
                <Typography variant="h3">QuickBite</Typography>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6} align="center">
                  <Typography variant="h4" spacing={2}>
                    Sign Up
                  </Typography>
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={6}>
                  <TextField
                    className={classes.field}
                    // autoComplete="fname"
                    // color="warning"
                    name="firstName"
                    variant="filled"
                    required
                    fullWidth
                    // id="firstName"
                    label="First Name"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                    // autoFocus
                  />
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={6}>
                  <TextField
                    className={classes.field}
                    variant="filled"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={6}>
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
                <Grid item xs={6}></Grid>
                <Grid item xs={6}>
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
                  <Grid item xs={6}></Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      Create Account
                    </Button>
                  </Grid>
                  <Grid container justify="center">
                    <Grid item>
                      <Link variant="body2" to="/Login" color = "white">
                        Already have an account? Log in.
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4} width="100%">
              <Grid item xs={12} className={classes.logo}>
                <img src="/login_image.png" width="155%" height="100%" />
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

// import React, { useState } from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import {Alert} from '@material-ui/lab/';
// import {createUser} from '../../ApiFunctions/User';

// import $ from 'jquery';

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%',
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
//   alert:{
//     width: '100%',
//     margin: theme.spacing(2,0,0)
//   }
// }));
// export default function SignUp() {
//   const classes = useStyles();
//   const [email, setEmail] = useState('');
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [password, setPassword] = useState('');

//   const [address, setAddress] = useState('hi');
//   const [payment, setPayment] = useState('bye');
//   const [error, setError] = useState(false);
//   const [success, setSuccess] = useState(false)
//   const submitHandler = async(user) => {

//     createUser(user)
//       .then(res => {
//         setError(res.error);
//         setSuccess(!res.error);
//       })
//     return false;
//   }

//   $('#signup-form').submit(async function (e) {
//     e.preventDefault()
//     // await submitHandler({email,firstName,lastName,password, address,payment});
//     return false;
//    });
//   return (
//     <Container component="main" maxWidth="xs">

//       <CssBaseline />
//       <div className={classes.paper}>
//         <Typography variant="h4">
//           Sign up
//         </Typography>
//         {(error) ? <Alert className={classes.alert} severity="error">Account Creation Unsuccessful</Alert> : null}
//          {(success) ? <Alert className={classes.alert} severity="success">Account Creation Successful</Alert> : null}
//         <form id = 'signup-form' className={classes.form} onSubmit = {() => submitHandler({email,firstName,lastName,password, address,payment})} >
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 // autoComplete="fname"
//                 name="firstName"
//                 variant="outlined"
//                 required
//                 fullWidth
//                 // id="firstName"
//                 label="First Name"
//                 onChange = {(e) => {setFirstName(e.target.value)}}

//                 autoFocus
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="lastName"
//                 label="Last Name"
//                 name="lastName"
//                 autoComplete="lname"
//                 onChange = {(e) => {setLastName(e.target.value)}}

//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 onChange = {(e) => {setEmail(e.target.value)}}

//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//                 onChange = {(e) => {setPassword(e.target.value)}}
//               />
//             </Grid>
//           </Grid>
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             Sign Up
//           </Button>
//           <Grid container justify="flex-end">
//             <Grid item>
//               <Link variant="body2" to ='/Login'>
//                 Already have an account? Login
//               </Link>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//     </Container>
//   );
// }
