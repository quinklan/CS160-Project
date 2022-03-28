import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import RestaurantListing from  "../../Components/RestaurantListing/RestaurantListing";



export default function Favorites(props) {


  return (
    
    //props image, restaurantTitle, address, rating, tags
    <React.Fragment>
        <RestaurantListing image = "https://media-cdn.tripadvisor.com/media/photo-s/11/4a/b8/61/a-burger-for-every-lifestyle.jpg" restaurantTitle="The Counter" address='20800 Stevens Creek Blvd' rating= {2.5} tags={['Bars', 'Burgers', 'Sandwiches']} />
        <RestaurantListing image = "https://media-cdn.tripadvisor.com/media/photo-s/11/4a/b8/61/a-burger-for-every-lifestyle.jpg" restaurantTitle="The Counter" address='20800 Stevens Creek Blvd' rating= {2.5} tags={['Bars', 'Burgers', 'Sandwiches']} />           
    </React.Fragment>
  );
}
