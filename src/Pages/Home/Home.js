import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { createUser } from "../../ApiFunctions/User";
import "./Home.css";
import QuestionList from "../../Components/QuestionList/QuestionList";

import { getUserRestaurants } from "../../ApiFunctions/Restaurants";

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



export default function Home(props) {
  
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

  // useEffect(async () => {
  //   let results = await getUserRestaurants(props.user.id);
  //   console.log(results);
  
  // }) 

  const submitHandler = async (user) => {
    createUser(user).then((res) => {
      setError(res.error);
      setSuccess(!res.error);
    });
    return false;
  };

  return (
    <React.Fragment>
      <div className="home-background">
        <Grid
          container
          spacing={3}
          xs={12}
          style={{
            paddingTop: 30,
            margin: 0,
            height: "-webkit-fill-available",
          }}
        >
            <QuestionList {...props}></QuestionList>
          {/* <QuestionCard>
            <Typography style = {{fontSize: 30}}>Find Restaurant</Typography>
            <Typography style = {{fontSize: 20}}>How far do you want to travel?</Typography>
            <Slider
              style={{ width: "85%" }}
              defaultValue={0}
              max={50}
              onChange={(e, val) => {
                setDistance(val);
              }}
            ></Slider>
            <Typography>{distance + " miles   "}</Typography>
            <Button
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Next
            </Button>
          </QuestionCard> */}
        </Grid>
      </div>
    </React.Fragment>
  );
}
