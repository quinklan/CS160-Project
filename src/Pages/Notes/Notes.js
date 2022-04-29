import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { createUser } from "../../ApiFunctions/User";
import "./Notes.css";
import QuestionList from "../../Components/QuestionList/QuestionList";
import QuestionCard from "../../Components/QuestionCard/QuestionCard";
import { Button, TextField, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
}));

export default function Notes() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [address, setAddress] = useState("hi");
  const [payment, setPayment] = useState("bye");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [distance, setDistance] = useState(0);
  const submitHandler = async (user) => {
    createUser(user).then((res) => {
      setError(res.error);
      setSuccess(!res.error);
    });
    return false;
  };

  return (
    <React.Fragment>
      <div className="notes-background">
        <Grid
          container
          spacing={3}
          xs={12}
          style={{
            // paddingTop: 30,
            margin: 0,
            // height: "-webkit-fill-available",
            width: "80%"
          }}
          className="notes-card"
        >
          <Grid item xs={1}>
            <Button
              // className="back-button"
              style={{
                color: "white",
                backgroundColor: "#979DA4",
                borderRadius: 10,
                float: "left",
                fontSize: 20,
                padding: 13,
                // marginBottom: "2%",
              }}
              fullWidth
            >
              BACK
            </Button>
          </Grid>
          <Grid item xs={11}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={11}>
            <Typography style={{ fontSize: 40 }}>
              The Counter Cupertino
            </Typography>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={11}>
            <Typography style={{ fontSize: 30 }}>Notes:</Typography>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={11}>
            <TextField
              style={{ width: "95%", backgroundColor: "#E5E5E5", borderRadius: 15}}
              inputProps={{style:{fontSize:25, padding: 10}}}
              InputProps = {{disableUnderline:true}}
              rows={12}
              multiline
              backgroundColor = "#E5E5E5"
            ></TextField>
          </Grid>
          <Grid item xs= {11}></Grid>
          <Grid item xs={1}>
          <Button
            // className="back-button"
            style={{
              color: "white",
              backgroundColor: "#5AA1FF",
              borderRadius: 10,
              float: "right",
              right: "70%",
              fontSize: 20,
              padding: 13,
            //   marginTop: "2%",
            }}
          >
            Save
          </Button>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
