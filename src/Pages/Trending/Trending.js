import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import "./Trending.css";
import ListingCard from "../../Components/ListingCard/ListingCard";
import { Typography } from "@material-ui/core";
import RestaurantListing from "../../Components/RestaurantListing/RestaurantListing";
import axios from "axios";

export default function Trending(props) {
  const [restaurants, setRestaurants] = useState([]);
  const fifteenKm = 24140;

  const getResults = async () => {
    axios
      .get(
        "https://radiant-ocean-98981.herokuapp.com/https://api.yelp.com/v3/businesses/search?",
        {
          headers: {
            Authorization:
              "Bearer R_NfHZkf-x2LiKEKtJ7hU2FHZbmM2exfFsNO1etgf6NAgisNoVBBdPnWJnFIYhGZRoEHc81zQaMDFwk95Ye2ny9SEkX9iEaSbp1Pfynkgb6kEQcxxygpwa-ivuBAYnYx",
          },
          params: {
            longitude: -122.0322,
            latitude: 37.323,
            sort_by: "rating",
            open_now: true,
            radius: fifteenKm,
          },
        }
      )
      .then((res) => {
        const restData = res.data.businesses;
        console.log(props);
        var finalTrending = [];
        for (let i = 0; i < restData.length; i++) {
          if (restData[i].rating >= 4 && restData[i].review_count >= 700) {
            finalTrending.push(restData[i]);
          }
        }
        finalTrending = res.data.businesses.sort(() => 0.5 - Math.random());
        setRestaurants(finalTrending.slice(0, 5));
      });
  };

  useEffect(async () => {
    await getResults();
  }, []);

  return (
    <React.Fragment>
      <div className="trending-background">
        <Grid
          container
          spacing={3}
          xs={12}
          style={{
            margin: 0,
            width: "90%",
          }}
        >
          <ListingCard>
            <Grid item xs={12} align="center">
              <Typography style={{ fontSize: 40, marginBottom: "2%" }}>
                Trending Restaurants
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {restaurants.map((restaurant) => {
                console.log(restaurant);
                return (
                  <RestaurantListing
                    user={props.user}
                    restaurant={{
                      image: restaurant.image_url
                        ? restaurant.image_url
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png",
                      rating: restaurant.rating,
                      tags: restaurant.categories,
                      address: restaurant.location.address1,
                      title: restaurant.name,
                    }}
                  />
                );
              })}
            </Grid>
            <Grid item xs={3}></Grid>
          </ListingCard>
        </Grid>
      </div>
    </React.Fragment>
  );
}
