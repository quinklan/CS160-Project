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
import "./landing.css";
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
}));

export default function Landing(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="background">
        <Grid
          container
          spacing={2}
          xs={12}
          style={{
            paddingTop: 30,
            margin: 0,
            height: "-webkit-fill-available",
          }}
        >
          <Grid item xs={5} style={{ color: "#FFFFFF", alignSelf: "center" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} align="center" style={{ alignSelf: "center" }}>
                <img src="/profile-1.png" height="20%" width="20%" />
              </Grid>
              <Grid item xs={12} align="center" style={{ paddingTop: 0 }}>
                <Typography variant="h3">QuickBite</Typography>
              </Grid>
              {props.children}
            </Grid>
            <Grid item xs={7} width="100%" style={{ padding: 0 }}>
              <img
                src="/login_image.png"
                style={{
                  float: "right",
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                  height: "90%",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
