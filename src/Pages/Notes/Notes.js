import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { createUser } from "../../ApiFunctions/User";
import "./Notes.css";
import QuestionList from "../../Components/QuestionList/QuestionList";
import QuestionCard from "../../Components/QuestionCard/QuestionCard";
import { Button, TextField, Typography } from "@material-ui/core";
import { useHistory, useLocation } from 'react-router-dom';
import { editRestaurant } from '../../ApiFunctions/Restaurants';
const useStyles = makeStyles((theme) => ({
  paper: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
}));

export default function Notes(props) {
  console.log(props)
  let history = useHistory()
  let location = useLocation()
  console.log("Bruh", location.state.restaurant)
  const classes = useStyles();
  const [notes, setNotes] = useState("");
  

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
              onClick = {() => {
                history.goBack()
              }}
            >
              BACK
            </Button>
          </Grid>
          <Grid item xs={11}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={11}>
            <Typography style={{ fontSize: 40 }}>
              {location.state.title}
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
              onChange = {(e) => setNotes(e.target.value)}
              defaultValue = {(location.state.restaurant.notes) ? location.state.restaurant.notes : '' }
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
            onClick = {() => {
              let newRestaurant = {...location.state.restaurant}
              newRestaurant.notes = notes
              editRestaurant(newRestaurant)
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
