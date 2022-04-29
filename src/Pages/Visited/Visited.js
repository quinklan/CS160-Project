import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { createUser } from "../../ApiFunctions/User";
import "./Visited.css";
import QuestionList from "../../Components/QuestionList/QuestionList";
import ListingCard from "../../Components/ListingCard/ListingCard";
import { Button, TextField, Typography } from "@material-ui/core";
import RestaurantListing from "../../Components/RestaurantListing/RestaurantListing";
import {getUserRestaurants} from '../../ApiFunctions/Restaurants';

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
}));

export default function Visited(props) {
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
  const [restaurants, setRestaurants] = useState([]);
  const submitHandler = async (user) => {
    createUser(user).then((res) => {
      setError(res.error);
      setSuccess(!res.error);
    });
    return false;
  };

  useEffect(async() => {
    const restaurants = await (await getUserRestaurants(props.user.id)).body.data
    console.log(restaurants)
    setRestaurants(restaurants)
  },[])
  return (
    <React.Fragment>
      <div className="visited-background">
        <Grid
          container
          spacing={3}
          xs={12}
          style={{
            margin: 0,
            width: "90%",
          }}
          className="visited-card"
        >
          <ListingCard>
            <Grid item xs={12} align="center">
              <Typography style={{ fontSize: 40, marginBottom: "2%" }}>
                Visited Restaurants
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {restaurants.map((restaurant) => {
                return <RestaurantListing key = {restaurant._id} restaurant = {{...restaurant}} user = {props.user} review></RestaurantListing>
              })}
            </Grid>
            <Grid item xs={3}></Grid>
          </ListingCard>
        </Grid>
      </div>
    </React.Fragment>
  );
}
