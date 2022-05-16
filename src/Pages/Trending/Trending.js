import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import "./Trending.css";
import ListingCard from "../../Components/ListingCard/ListingCard";
import { Button, Typography } from "@material-ui/core";
import RestaurantListing from "../../Components/RestaurantListing/RestaurantListing";
import axios from "axios";
import InfoIcon from "@mui/icons-material/Info";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const getCusineCategory = {
  0: "thai",
  1: "indpak",
  2: "chinese",
  3: "italian",
  4: "mexican",
  5: "japanese",
  6: "newamerican, tradamerican",
  7: "french",
  8: "korean",
  9: "mediterranean",
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function Trending(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [restaurants, setRestaurants] = useState([]);
  // const [latitude, setLatitude] = React.useState("");
  // const [longitude, setLongitude] = React.useState("");
  const fifteenMiles = 24140;

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
            //  longitude: longitude,
            //  latitude: latitude,
            open_now: true,
            radius: fifteenMiles,
          },
        }
      )
      .then((res) => {
        const restData = res.data.businesses;
        console.log(props);
        var finalTrending = [];
        for (let i = 0; i < restData.length; i++) {
          if (restData[i].rating >= 4 && restData[i].review_count >= 200) {
            finalTrending.push(restData[i]);
          }
        }
        finalTrending = finalTrending.sort(() => 0.5 - Math.random());
        setRestaurants(finalTrending.slice(0, 5));
        console.log(restData);
      });
  };

  useEffect(async () => {
    await getResults();
  }, []);

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     setLatitude(position.coords.latitude);
  //     setLongitude(position.coords.longitude);
  //   });
  // }, []);

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
            <Grid item xs={4}></Grid>
            <Grid item xs={4.3}>
              <Typography style={{ fontSize: 40, marginBottom: "2%" }}>
                Trending Restaurants
              </Typography>
            </Grid>
            <Grid item xs={3.7}>
              <Button className="info-button" onClick={handleOpen}>
                <InfoIcon fontSize="large"></InfoIcon>
              </Button>
              <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    align="center"
                  >
                    <b>Trending Restaurant Criteria</b>
                  </Typography>
                  <Typography sx={{ mt: 2 }} align="center">
                    <i>
                      There will be a list of up to 5 generated restaurants
                      based on the following criteria
                    </i>
                  </Typography>
                  <Typography>&nbsp;</Typography>
                  <Typography sx={{ mt: 2 }}>
                    - The restaurant must be within a 15 mile radius from your
                    current location.
                  </Typography>
                  <Typography sx={{ mt: 2 }}>
                    - The restaurant must have an average rating of 4 stars or
                    higher.
                  </Typography>
                  <Typography sx={{ mt: 2 }}>
                    - The restaurant must have at least 200 reviews.
                  </Typography>
                </Box>
              </Modal>
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
                      address: restaurant?.location?.address1 + ", " + restaurant?.location?.city  + ", " + restaurant?.location?.state + " " + restaurant?.location?.zip_code + " (" + (restaurant?.distance/1609).toFixed(1) + " mi)",
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
