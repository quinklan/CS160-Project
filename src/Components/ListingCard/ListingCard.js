import Grid from "@material-ui/core/Grid";
import './ListingCard.css'

function ListingCard(props) {
  return (
    <Grid container xs={12} align = {props.align} className="listing-card" style = {{width: "100%", padding: 20}}>
      {props.children}
    </Grid>
  );
}

export default ListingCard;
