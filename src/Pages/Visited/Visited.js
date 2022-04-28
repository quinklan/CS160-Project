import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { createUser } from "../../ApiFunctions/User";
import "./Visited.css";
import QuestionList from "../../Components/QuestionList/QuestionList";
import ListingCard from "../../Components/ListingCard/ListingCard";
import { Button, TextField, Typography } from "@material-ui/core";
import RestaurantListing from "../../Components/RestaurantListing/RestaurantListing";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
}));

export default function Visited() {
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
              {/* <RestaurantListing></RestaurantListing> */}
              <RestaurantListing
                image="https://media-cdn.tripadvisor.com/media/photo-s/11/4a/b8/61/a-burger-for-every-lifestyle.jpg"
                restaurantTitle="The Counter"
                address="20800 Stevens Creek Blvd"
                description="This food here is great! However, the customer service here is terrible. I had to wait an HOUR before I got my food."
                rating={2.5}
                tags={[{title: "Bars"}, {title: "Burgers"}, {title: "Sandwiches"}]}
                review
              ></RestaurantListing>
              <RestaurantListing
                image="https://s3-media2.fl.yelpcdn.com/bphoto/Q7ErHze2LxTdmuKSYq94jQ/o.jpg"
                restaurantTitle="The Counter"
                address="20800 Stevens Creek Blvd"
                description="This food here is great! However, the customer service here is terrible. I had to wait an HOUR before I got my food."
                rating={2.5}
                tags={[{title: "Bars"}, {title: "Burgers"}, {title: "Sandwiches"}]}
                review
              ></RestaurantListing>
            </Grid>
            <Grid item xs={3}></Grid>
          </ListingCard>
        </Grid>
      </div>
    </React.Fragment>
  );
}
