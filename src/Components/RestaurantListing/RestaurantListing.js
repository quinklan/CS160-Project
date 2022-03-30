import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./restaurant-listing.css";
import Button from "@material-ui/core/Button";

//Source: https://www.geodatasource.com/developers/javascript

function distance(lat1, lon1, lat2, lon2) {
    if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
    }
    else {
        var radlat1 = Math.PI * lat1/180;
        var radlat2 = Math.PI * lat2/180;
        var theta = lon1-lon2;
        var radtheta = Math.PI * theta/180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180/Math.PI;
        dist = dist * 60 * 1.1515;
        return dist;
    }
}

export default function RestaurantListing(props) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={5}>
        <img
          src={props.image}
          style={{ objectFit: "cover", width: "100%", height: 200 }}
        ></img>
      </Grid>
      {props.review ? (
        <Grid item xs={7}>
        <Grid container>
          <Grid item xs={10}>
            <Typography variant="h4">{props.restaurantTitle}</Typography>
          </Grid>
          <Grid item xs={12} style={{ color: "grey" }}>
              <Typography variant="h6">{props.description}</Typography>
            </Grid>
        </Grid>
      </Grid>
      ) : (
        <Grid item xs={7}>
          <Grid container>
            <Grid item xs={10}>
              <Typography variant="h4">{props.restaurantTitle}</Typography>
            </Grid>
            <Grid item xs={2}>
              {/* <Button> */}
              <FavoriteIcon className="listing-faviorite" />
              {/* </Button> */}
            </Grid>
            <Grid item xs={12} style={{ color: "grey" }}>
              <Typography variant="h6">{props.address}</Typography>
            </Grid>
            <Grid item xs={12} style={{ color: "grey" }}>
              <Typography variant="h6">
                <Rating value={props.rating} precision={0.5} readOnly />
              </Typography>
            </Grid>
            <Grid item xs={12} style={{ color: "grey" }}>
              <Grid container spacing={2}>
                {props.tags.map((tag) => {
                  return (
                    <Grid
                      item
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
                        {tag}
                      </Typography>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}
