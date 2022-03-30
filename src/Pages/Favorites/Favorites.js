import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import RestaurantListing from  "../../Components/RestaurantListing/RestaurantListing";



export default function Favorites(props) {


  return (
    
    //props image, restaurantTitle, address, rating, tags
    <React.Fragment>
        <div style = {{width: '75%'}}>
        <RestaurantListing image = "https://media-cdn.tripadvisor.com/media/photo-s/11/4a/b8/61/a-burger-for-every-lifestyle.jpg" restaurantTitle="The Counter" address='20800 Stevens Creek Blvd' rating= {2.5} tags={['Bars', 'Burgers', 'Sandwiches']} />
        <RestaurantListing image = "https://s3-media2.fl.yelpcdn.com/bphoto/Q7ErHze2LxTdmuKSYq94jQ/o.jpg" restaurantTitle="The Counter" description='This food here is great! However, the customer service here is terrible. I had to wait an HOUR before I got my food.' rating= {2.5} tags={['Bars', 'Burgers', 'Sandwiches']} review/>           
        </div>
    </React.Fragment>
  );
}
