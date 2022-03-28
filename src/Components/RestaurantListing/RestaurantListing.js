import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

export default function RestaurantListing(props) {


  return (
    <Grid container spacing = {2}>
        <Grid item xs = {3}>
            <img src = {props.image} style = {{objectFit: 'cover', width: '100%'}}></img>
        </Grid>
        <Grid item xs = {9}>
            <Grid container>
                <Grid item xs = {12}>
                    <Typography variant="h4">
                        {props.restaurantTitle}
                    </Typography>
                </Grid>
                <Grid item xs = {12} style={{color: 'grey'}}>
                    <Typography variant="h6">
                        {props.address}
                    </Typography>
                </Grid>
                <Grid item xs = {12} style={{color: 'grey'}}>
                    <Typography variant="h6">
                    <Rating value={props.rating} precision={0.5} readOnly/>
                    </Typography>
                </Grid>
                <Grid item xs = {12} style={{color: 'grey'}}>
                    <Grid container spacing = {2} >
                        {props.tags.map((tag) => {
                            return (
                                <Grid item style = {{backgroundColor: 'lightGrey', margin: 3, borderRadius: 5}}>
                                    <Typography style = {{color: 'black', fontSize: 13, fontWeight: "bold"}}>{tag}</Typography>
                                </Grid>
                            )
                        })
                        }
                    </Grid>
                </Grid>
                
            </Grid>
        </Grid>
    </Grid>

  );
}
