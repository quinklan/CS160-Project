import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./restaurant-listing.css";
import ArticleIcon from "@mui/icons-material/Article";
import Button from "@material-ui/core/Button";
import { addRestaurant, editRestaurant } from "../../ApiFunctions/Restaurants";
//Source: https://www.geodatasource.com/developers/javascript
import { useHistory } from "react-router-dom";

export default function RestaurantListing(props) {
  let history = useHistory();
  const [favorite, setFavorite] = useState(props.restaurant.favorite);
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <img
            src={props.restaurant.image}
            style={{ objectFit: "cover", width: "100%", height: 200 }}
          ></img>
        </Grid>
        {props.review ? (
          <Grid item xs={7}>
            <Grid container>
              <Grid item xs={10}>
                <Typography variant="h4">{props.restaurant.title}</Typography>
              </Grid>
              <Grid item xs={1}>
                <Button
                  style={{ backgroundColor: "transparent", color: "black" }}
                  onClick={() => {
                    history.push("/notes", {
                      title: props.restaurant.title,
                      restaurant: props.restaurant,
                    });
                  }}
                >
                  <ArticleIcon className="listing-notes"></ArticleIcon>
                </Button>
              </Grid>
              <Grid item xs={1}>
                <Button
                  style={{ backgroundColor: "transparent" }}
                  onClick={() => {
                    let newRestaurant = { ...props.restaurant };
                    newRestaurant.favorite = !newRestaurant.favorite;
                    setFavorite(!favorite);
                    editRestaurant(newRestaurant);
                    if (props.trending) {
                      window.location.reload(false);
                    }
                  }}
                >
                  <FavoriteIcon
                    className="listing-favorite"
                    style={{ fill: favorite ? "red" : "white" }}
                  ></FavoriteIcon>
                </Button>
              </Grid>
              <Grid item xs={12} style={{ color: "grey" }}>
                <Typography variant="h6">{props.restaurant.address}</Typography>
              </Grid>
              <Grid item xs={12} style={{ color: "grey" }}>
                <Typography variant="h6">
                  <Rating
                    value={props.restaurant.rating}
                    precision={0.5}
                    readOnly
                  />
                </Typography>
              </Grid>
              <Grid item xs={12} style={{ color: "grey" }}>
                <Grid container spacing={2}>
                  {props.restaurant.tags.map((tag) => {
                    return (
                      <Grid
                        item
                        key={tag.title}
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
              <Grid item xs={12} style={{ color: "grey" }}>
                <Typography variant="h6">{props.restaurant.address}</Typography>
              </Grid>
              <Grid item xs={12} style={{ color: "grey" }}>
                <Typography variant="h6">
                  <Rating
                    value={props.restaurant.rating}
                    precision={0.5}
                    readOnly
                  />
                </Typography>
              </Grid>
              <Grid item xs={12} style={{ color: "grey" }}>
                <Grid container spacing={2}>
                  {props.restaurant.tags
                    ? props.restaurant.tags.map((tag) => {
                        return (
                          <Grid
                            item
                            key={tag.title}
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
                      })
                    : null}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
      {props.listing ? (
        <Grid container>
          <Grid item xs={7} />
          <Grid item xs={2}>
            <Button onClick = {() => window.location.reload()}
              style={{
                color: "white",
                backgroundColor: "#979DA4",
                borderRadius: 10,
                fontSize: 20,
                padding: 10,
              }}
            >
              Restart
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              style={{
                color: "white",
                backgroundColor: "#FD804B",
                borderRadius: 10,
                right: "35%",
                fontSize: 20,
                padding: 10,
              }}
              onClick={async () => {
                await addRestaurant({
                  userID: props.user.id,
                  ...props.restaurant,
                });
                history.push("visited");
              }}
            >
              Dine Here!
            </Button>
          </Grid>
        </Grid>
      ) : null}
    </React.Fragment>
  );
}
