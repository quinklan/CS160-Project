import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./restaurant-listing.css";
import EditIcon from "@mui/icons-material/Edit";
import ArticleIcon from '@mui/icons-material/Article';
import Button from "@material-ui/core/Button";
import {addRestaurant} from '../../ApiFunctions/Restaurants';
//Source: https://www.geodatasource.com/developers/javascript
import { useHistory } from 'react-router-dom';


function distance(lat1, lon1, lat2, lon2) {
  if (lat1 == lat2 && lon1 == lon2) {
    return 0;
  } else {
    var radlat1 = (Math.PI * lat1) / 180;
    var radlat2 = (Math.PI * lat2) / 180;
    var theta = lon1 - lon2;
    var radtheta = (Math.PI * theta) / 180;
    var dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    return dist;
  }
}

export default function RestaurantListing(props) {
  let history = useHistory();

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <img
            src={props.restaurant.image}
            style={{ objectFit: "cover", width: "100%", height: 200 }}
          ></img>
        </Grid>
        {/* {props.review ? (
        <Grid item xs={7}>
          <Grid container>
            <Grid item xs={10}>
              <Typography variant="h4">{props.restaurantTitle}</Typography>
            </Grid>
            <Grid item xs={2}>
              <EditIcon></EditIcon>
            </Grid>
            <Grid item xs={12} style={{ color: "grey" }}>
              <Typography variant="h6">{props.description}</Typography>
            </Grid>
          </Grid>
        </Grid>
      ) : ( */}
        {props.review ? (
          <Grid item xs={7}>
            <Grid container>
              <Grid item xs={10}>
                <Typography variant="h4">{props.restaurant.title}</Typography>
              </Grid>
              <Grid item xs={1}>
                <Button style = {{backgroundColor: 'transparent'}}>
                  <ArticleIcon className = 'listing-notes'></ArticleIcon>
                </Button>
              </Grid>
              <Grid item xs={1}>
                <Button style = {{backgroundColor: 'transparent'}}>
                  <FavoriteIcon className= "listing-favorite"></FavoriteIcon>
                </Button>
              </Grid>
              <Grid item xs={12} style={{ color: "grey" }}>
                <Typography variant="h6">{props.restaurant.address}</Typography>
              </Grid>
              <Grid item xs={12} style={{ color: "grey" }}>
                <Typography variant="h6">
                  <Rating value={props.restaurant.rating} precision={0.5} readOnly />
                </Typography>
              </Grid>
              <Grid item xs={12} style={{ color: "grey" }}>
                <Grid container spacing={2}>
                  {props.restaurant.tags.map((tag) => {
                    return (
                      <Grid
                        item
                        key = {tag.title}
                        style={{
                          backgroundColor: "lightGrey",
                          margin: 3,
                          borderRadius: 5,
                        }}
                      >
                        <Typography
                          style={{
                            color: "black",
                            fontSize: 13,
                            fontWeight: "bold",
                          }}
                        >
                          {tag.title}
                        </Typography>
                      </Grid>
                    );
                  })}
                </Grid>

              </Grid>
            </Grid>
          </Grid>
        ) : (
          <Grid item xs={7}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h4">{props.restaurant.title}</Typography>
              </Grid>
              {/* <Grid item xs={2}>
              <FavoriteIcon className="listing-favorite" />
            </Grid> */}
              <Grid item xs={12} style={{ color: "grey" }}>
                <Typography variant="h6">{props.restaurant.address}</Typography>
              </Grid>
              <Grid item xs={12} style={{ color: "grey" }}>
                <Typography variant="h6">
                  <Rating value={props.restaurant.rating} precision={0.5} readOnly />
                </Typography>
              </Grid>
              <Grid item xs={12} style={{ color: "grey" }}>
                <Grid container spacing={2}>
                  {props.restaurant.tags.map((tag) => {
                    return (
                      <Grid
                        item
                        key = {tag.title}
                        style={{
                          backgroundColor: "lightGrey",
                          margin: 3,
                          borderRadius: 5,
                        }}
                      >
                        <Typography
                          style={{
                            color: "black",
                            fontSize: 13,
                            fontWeight: "bold",
                          }}
                        >
                          {tag.title}
                        </Typography>
                      </Grid>
                    );
                  })}
                </Grid>
                {/* <Grid item xs={1}>
                  <Button>
                    <EditIcon></EditIcon>
                  </Button>
                </Grid> */}
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
      {(props.listing) ? 
      <Grid container>
        <Grid item xs={7} />
        <Grid item xs={2}>
          <Button
            // className="back-button"
            style={{
              color: "white",
              backgroundColor: "#979DA4",
              borderRadius: 10,
              // float: "right",
              fontSize: 20,
              padding: 10,
            }}
          >
            Restart
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            // className="back-button"
            style={{
              color: "white",
              backgroundColor: "#FD804B",
              borderRadius: 10,
              right: "35%",
              // float: "right",
              fontSize: 20,
              padding: 10,
            }}
            onClick = {async() => {
              await addRestaurant({userID: props.user.id, ...props.restaurant})
              history.push('visited')
            }}
          >
            Dine Here!
          </Button>
        </Grid>
      </Grid>
      : null }
    </React.Fragment>
  );
}
